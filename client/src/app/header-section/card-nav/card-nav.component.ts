import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-nav',
  templateUrl: './card-nav.component.html',
  styleUrls: ['./card-nav.component.scss']
})
export class CardNavComponent implements OnInit {
  itemsOfMenu: string[] = ['Home', 'Courses', 'Events', 'Pages', 'Blog', 'Contact'];

  constructor() { }

  ngOnInit(): void {
  }

}
