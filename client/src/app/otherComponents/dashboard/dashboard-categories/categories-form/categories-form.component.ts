import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
  @Output() hiddenEmmiter = new EventEmitter();
  isHidden: boolean = false;
  isDisabled: boolean = true;
  addCategoriesForm: FormGroup;
  constructor(private fb: FormBuilder, private categories: HttpService) { }

  ngOnInit(): void {
    this.addCategoriesForm = this.fb.group({
      title: [null, [
        Validators.required
      ]],
      description: [null, [
        Validators.required
      ]],
      file: [null, [
        Validators.required
      ]]


    });
    //this.addCategoriesForm.valueChanges.subscribe(console.log);

  }
  onSubmit() {
    this.addCategories();
  }

  addCategories() {
    this.isDisabled = false;
    const data = {
      title: this.addCategoriesForm.get(['title']).value,
      description: this.addCategoriesForm.get(['description']).value
    };

    const file = {
      file: this.addCategoriesForm.get(['file']).value
    };

    console.log(data, file);
    this.categories.postCategories(data, file).subscribe(response => console.log(response));
  }


  hideModal() {
    this.hiddenEmmiter.emit(this.isHidden);
  }

  get title() {
    return this.addCategoriesForm.get('title');
  }

  get description() {
    return this.addCategoriesForm.get('description');
  }

  get file() {
    return this.addCategoriesForm.get('file');
  }


}
