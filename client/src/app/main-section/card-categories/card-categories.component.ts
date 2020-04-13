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
  images = ['..//..//..//assets/images/azure.png','..//..//..//assets/images/html.jpg',
  '..//..//..//assets/images/react.jpg','..//..//..//assets/images/vuejs.png','..//..//..//assets/images/jquery.jpg',
  '..//..//..//assets/images/angular.png','..//..//..//assets/images/javascript.png','..//..//..//assets/images/java.jpg'];

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
