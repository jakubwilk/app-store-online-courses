import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';



@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.scss']
})

export class CardCategoriesComponent implements OnInit {
  categories = [];
  constructor(private httpCategories: HttpService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.httpCategories.getCategories().subscribe(categories => this.categories = categories);

  }

}
