import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-card-opinions',
  templateUrl: './card-opinions.component.html',
  styleUrls: ['./card-opinions.component.scss']
})
export class CardOpinionsComponent implements OnInit {
  opinions = [];

  constructor(private httpTestimonials: HttpService) { }

  ngOnInit(): void {
    this.getTestimonials();
  }
  getTestimonials() {
    this.httpTestimonials.getTestimonials().subscribe(testimonials => this.opinions = testimonials);

  }

}
