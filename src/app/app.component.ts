import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MemorationComponent } from './components/memoration/memoration.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { Card, CardComponent } from './components/memoration/card/card.component';
import { PrimaryComponent } from './components/primary/primary.component';
import { FamilyGalleryComponent } from './components/family-gallery/family-gallery.component';

const standalone = [ PrimaryComponent,AboutComponent, NavBarComponent, GalleryComponent, MemorationComponent, FamilyGalleryComponent , FooterComponent, CardComponent]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...standalone, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cards: Card[] = [
    new Card("עבודות חשמל", 22000, "../../../../assets/images/cards/חשמל.jpg"),
    new Card("עבודות אינסטלציה", 20000, "../../../../assets/images/cards/אינסטלציה.webp"),
    new Card("עבודות מיזוג", 15000, "../../../../assets/images/cards/מיזוג.jpg"),
    new Card("דלתות", 8000, "../../../../assets/images/cards/דלתות.jpeg"),
    new Card("עבודות ריצוף", 26000, "../../../../assets/images/cards/ריצוף.jpg"),
    new Card("עבודות חיפוי קירות", 24000, "../../../../assets/images/cards/חיפוי קירות.jpg"),
    new Card("עבודות תקרה", 30000, "../../../../assets/images/cards/תקרה.jpg"),
    new Card("גופי תאורה ומערכות אוורור", 15000, "../../../../assets/images/cards/תאורה.jpg"),
    new Card("עבודות חדר שירותים ומטבחון", 10000, "../../../../assets/images/cards/מטבחון.jpg"),
    new Card("ארון קודש מיוחד", 60000, "../../../../assets/images/cards/ארון קודש.jpg"),
    new Card("בימה מיוחדת", 25000, "../../../../assets/images/cards/בימה.jpg"),
    new Card("ספסלים", 22000, "../../../../assets/images/cards/ספסלים.jpeg"),
    new Card("שולחנות", 15000, "../../../../assets/images/cards/שולחנות.jpg"),
    new Card("ספריה", 8000, "../../../../assets/images/cards/ספרייה.jpg"),

  ]

  constructor() { }
  showLoader: boolean = false;

  ngOnInit() {
    this.showLoader = true;

    // Simulating a 3-second delay before hiding the loader
    setTimeout(() => {
      this.showLoader = false;
    }, 3000);
  }



}
