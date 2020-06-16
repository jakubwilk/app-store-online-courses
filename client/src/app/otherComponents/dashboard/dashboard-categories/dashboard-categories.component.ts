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
  isVisibleEdit: boolean = false;
  categoriesId: number;

  constructor(private categories: HttpService) { }

  ngOnInit(): void {
    this.getCategories();
    this.categories.subjectCategories.subscribe(() => {
      this.getCategories();
    });
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
    this.categories.deleteCategories(id).subscribe(response =>
      console.log(response));
    this.categories.subjectCategories.next(true);
  }


  showModal() {
    this.isVisible = true;
  }

  showModalEdit(id) {
    this.isVisibleEdit = true;
    this.categoriesId = id;
  }

  hideModal($event) {
    this.isVisible = $event;
  }

  hideModalEdit($event) {
    this.isVisibleEdit = $event;

  }
}
