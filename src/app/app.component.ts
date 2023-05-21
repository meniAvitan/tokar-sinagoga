import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MemorationComponent } from './components/memoration/memoration.component';
import { AboutComponent } from './components/about/about.component';

const standalone = [AboutComponent, NavBarComponent, GalleryComponent, MemorationComponent]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...standalone],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'טוקאר סינגוגה';
}
