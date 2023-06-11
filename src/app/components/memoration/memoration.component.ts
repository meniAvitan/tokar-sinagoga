import {Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardComponent } from './card/card.component';
import { FamilyGalleryComponent } from '../family-gallery/family-gallery.component';
@Component({
  selector: 'app-memoration',
  standalone: true,
  imports: [CommonModule, CardComponent, FamilyGalleryComponent],
  templateUrl: './memoration.component.html',
  styleUrls: ['./memoration.component.scss']
})
export class MemorationComponent implements OnInit  {

  constructor() { }

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
    new Card("ארון קודש מיוחד", 60000, "../../../../assets/images/cards/ארון קודש.jpeg"),
    new Card("בימה מיוחדת", 25000, "../../../../assets/images/cards/בימה.jpeg"),
    new Card("ספסלים", 22000, "../../../../assets/images/cards/ספסלים.jpeg"),
    new Card("שולחנות", 15000, "../../../../assets/images/cards/שולחנות.jpg"),
    new Card("ספריה", 8000, "../../../../assets/images/cards/ספרייה.jpg"),

  ]



  ngOnInit(): void {
  }


}
