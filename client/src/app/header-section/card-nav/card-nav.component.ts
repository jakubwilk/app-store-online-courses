import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-card-nav',
  templateUrl: './card-nav.component.html',
  styleUrls: ['./card-nav.component.scss']
})
export class CardNavComponent implements OnInit {
  itemsOfMenu: string[] = ['Home', 'Courses', 'Events', 'Pages', 'Blog', 'Contact'];
  isHidden: boolean = true;


  constructor(private eRef: ElementRef) {
    console.log('no click yet');
  }

  ngOnInit(): void {
  }
  toogleMenu() {
    this.isHidden = !this.isHidden;
  }
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isHidden = false;
    } else {
      this.isHidden = true;

    }
  }


}
