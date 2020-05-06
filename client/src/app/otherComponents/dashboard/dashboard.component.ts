import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tablica = ['html', 'html1', 'html2', 'html3', 'html4',
    'html5', 'html6', 'html7', 'html8', 'html9']
  tablicaUser = ['John Snow', 'John Snow1', 'John Snow2',
    'John Snow3', 'John Snow4', 'John Snow5', 'John Snow6',
    'John Snow7', 'John Snow8', 'John Snow9']
}
