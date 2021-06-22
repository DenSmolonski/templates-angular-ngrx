import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {}
}
