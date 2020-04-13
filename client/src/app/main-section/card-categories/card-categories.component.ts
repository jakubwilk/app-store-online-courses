import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.scss']
})

export class CardCategoriesComponent implements OnInit {
  categories = [];
  constructor() {}
  ngOnInit(): void {
    this.fetchDate();
  }

  fetchDate() {
    fetch('http://localhost:44125/categories/popular', { method: 'GET', headers: { ContentType: 'text/json' } })
      .then(response => response.json())
      .then(json => {
        json.forEach(element => {
          this.categories.push(element);
        });
      });
  }
}
