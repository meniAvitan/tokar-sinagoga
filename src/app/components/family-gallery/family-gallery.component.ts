import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-family-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './family-gallery.component.html',
  styleUrls: ['./family-gallery.component.scss']
})
export class FamilyGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    { src: '../../../assets/images/memoration/memory (1).jpg', alt: 'Image 1' },
    { src: '../../../assets/images/memoration/memory (3).jpg', alt: 'Image 2' },
    { src: '../../../assets/images/memoration/memory (4).jpg', alt: 'Image 3' },
    { src: '../../../assets/images/memoration/memory (8).jpg', alt: 'Image 3' },
    { src: '../../../assets/images/memoration/memory (10).jpg', alt: 'Image 3' },
    { src: '../../../assets/images/memoration/memory (6).jpg', alt: 'Image 3' },
    { src: '../../../assets/images/memoration/memory (7).jpg', alt: 'Image 3' },
    { src: '../../../assets/images/memoration/memory (2).jpg', alt: 'Image 3' },
    { src: '../../../assets/images/memoration/memory (9).jpg', alt: 'Image 3' },
    { src: '../../../assets/images/memoration/memory (5).jpg', alt: 'Image 3' },
    { src: '../../../assets/images/memoration/memory (11).jpg', alt: 'Image 3' },
    { src: '../../../assets/images/memoration/memory (12).jpg', alt: 'Image 3' },
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
