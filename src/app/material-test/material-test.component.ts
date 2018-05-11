import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.css']
})
export class MaterialTestComponent implements OnInit {

  constructor() { }

   tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  color1 = "pink"
  color2 = "red"
  color3 = "green"

  ngOnInit() {
  }

}
