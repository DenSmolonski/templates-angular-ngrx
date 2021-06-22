import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  count: number;
  size: string;
  colours: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { count: 1, name: 'Hydrogen', size: 's', colours: 'H' },
  { count: 2, name: 'Helium', size: 's', colours: 'He' },
  { count: 3, name: 'Lithium', size: 's', colours: 'Li' },
  { count: 4, name: 'Beryllium', size: 's', colours: 'Be' },
  { count: 5, name: 'Boron', size: 's', colours: 'B' },
  { count: 6, name: 'Carbon', size: 's', colours: 'C' },
  { count: 7, name: 'Nitrogen', size: 's', colours: 'N' },
  { count: 8, name: 'Oxygen', size: 's', colours: 'O' },
  { count: 9, name: 'Fluorine', size: 's', colours: 'F' },
  { count: 10, name: 'Neon', size: 's', colours: 'Ne' },
];

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss'],
})
export class BasketPageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'count', 'size', 'colours'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
