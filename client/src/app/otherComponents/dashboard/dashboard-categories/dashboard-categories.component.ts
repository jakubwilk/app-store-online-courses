import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss']
})
export class DashboardCategoriesComponent implements OnInit {
  message: string;
  listOfCategories = [];
  isVisible: boolean = false;

  constructor(private categories: HttpService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categories.getAllCategories().subscribe(categories => {
      if (categories.length === 0) {
        this.message = 'There is no categories. Please create one';
      } else {
        this.listOfCategories = categories;
      }
    });
  }

  deleteCategories(id: number) {
    console.log(id);
    this.categories.deleteCategories(id).subscribe(response =>
      console.log(response));
  }

  updateCategories(id: number) {
    console.log(id);
    this.categories.updateCategories(id).subscribe(response => {
      console.log(response);
    });

  }

  showModal() {
    this.isVisible = true;
  }
  hideModal($event) {
    this.isVisible = $event;

  }
}
