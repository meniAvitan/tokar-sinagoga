import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() image: string = "";

  constructor() { }



  ngOnInit(): void {
  }




}

export class Card {
  title: string;
  price: number;
  image: string;

  constructor(title: string, price: number, image: string) {
    this.title = title;
    this.price = price;
    this.image = image;
  }
}
