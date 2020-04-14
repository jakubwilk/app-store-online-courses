import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-card-opinions',
  templateUrl: './card-opinions.component.html',
  styleUrls: ['./card-opinions.component.scss']
})
export class CardOpinionsComponent implements OnInit {

  constructor(private httpTestimonials: HttpService) { }

  ngOnInit(): void {
    this.getTestimonials();
  }
  getTestimonials() {
    this.httpTestimonials.getTestimonials().subscribe(testimonials => console.log(testimonials));

  }

}
