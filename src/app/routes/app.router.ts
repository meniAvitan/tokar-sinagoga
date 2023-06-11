import {Routes} from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { MemorationComponent } from '../components/memoration/memoration.component';

export const AppRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'memoration', component: MemorationComponent},

  {
    path: '**',
    redirectTo: '',
  },
];
