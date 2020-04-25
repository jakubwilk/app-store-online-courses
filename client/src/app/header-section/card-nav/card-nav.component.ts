import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-card-nav',
  templateUrl: './card-nav.component.html',
  styleUrls: ['./card-nav.component.scss']
})
export class CardNavComponent implements OnInit {
  itemsOfMenu: string[] = ['home', 'courses', 'events', 'pages', 'blog', 'contact'];
  itemsOfUser: string[] = ['login', 'register'];
  isHidden: boolean = true;


  constructor(private eRef: ElementRef) {
  }

  ngOnInit(): void {
  }
  toogleMenu() {
    this.isHidden = !this.isHidden;
  }
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) { return; }
    else { return this.isHidden = true; }


  }


}
