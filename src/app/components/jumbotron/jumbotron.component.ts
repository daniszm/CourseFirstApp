import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnLink:string;

  constructor() {
    this.jbtHeading = "Course First App";
    this.jbtText = "Lorem ipsum text";
    this.jbtBtnText = "Read more";
    this.jbtBtnLink = "/";
   }

  ngOnInit() {
  }

}
