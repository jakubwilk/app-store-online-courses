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
  message: string;
  constructor(private fb: FormBuilder, private categories: HttpService) { }

  ngOnInit(): void {
    this.addCategoriesForm = this.fb.group({
      title: [null, [
        Validators.required
      ]],
      description: ['']


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
    this.categories.postCategories(data).subscribe(response => {
      if (response.statusCode === 400) {
        this.message = response.message[0].constraints.value;
      } else {
        this.isHidden = false;
        console.log(response);
        this.hideModal();
        this.categories.subjectCategories.next(true);
      }



    });
  }
  hideModal() {
    this.hiddenEmmiter.emit(this.isHidden);
  }

  get title() {
    return this.addCategoriesForm.get('title');
  }


}
