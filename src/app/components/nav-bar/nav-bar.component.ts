import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WINDOW } from 'src/app/services/window.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller,  @Inject(DOCUMENT) private document: Document,
 ) { }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  divHeight: number = 200; // Initial height of the div

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.divHeight = 400 - scrollPosition; // Adjust this formula according to your needs
  }

  ngOnInit(): void {
  }



}
