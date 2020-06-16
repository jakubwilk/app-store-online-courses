import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss']
})
export class CategoriesUpdateComponent implements OnInit {
  @Output() hiddenEmmiterEdit = new EventEmitter();
  @Input() categoriesId: number;
  isHiddenEdit: boolean = false;
  isDisabled: boolean = true;
  editCategoriesForm: FormGroup;
  message: string;
  constructor(private fb: FormBuilder, private categories: HttpService) { }

  ngOnInit(): void {
    this.editCategoriesForm = this.fb.group({
      title: [null, [
        Validators.required
      ]],
      description: ['']


    });
    //this.addCategoriesForm.valueChanges.subscribe(console.log);


  }
  onSubmit() {
    this.editCategories();
  }

  editCategories() {
    this.isDisabled = false;
    const data = {
      id: this.categoriesId,
      title: this.editCategoriesForm.get(['title']).value,
      description: this.editCategoriesForm.get(['description']).value,
    };

    this.categories.updateCategories(data).subscribe(response => console.log(response));

  }
  hideModalEdit() {
    this.hiddenEmmiterEdit.emit(this.isHiddenEdit);
  }

  get title() {
    return this.editCategoriesForm.get('title');
  }


}
