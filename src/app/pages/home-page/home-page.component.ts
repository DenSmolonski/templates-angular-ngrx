import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

export interface Product {
  id: string;
  name: string;
}

const ELEMENT_DATA: Product[] = [
  { id: '1', name: 'Hydrogen' },
  { id: '12', name: 'Helium' },
  { id: '13', name: 'Lithium' },
  { id: '14', name: 'Beryllium' },
  { id: '15', name: 'Boron' },
  { id: '16', name: 'Carbon' },
  { id: '17', name: 'Nitrogen' },
  { id: '18', name: 'Oxygen' },
  { id: '19', name: 'Fluorine' },
  { id: '110', name: 'Neon' },
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'details'];
  dataSource = ELEMENT_DATA;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToDetailPage(el: Product): void {
    this.route.navigate(['product', el.id]);
  }
}
