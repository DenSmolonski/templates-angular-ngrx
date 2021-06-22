import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    options: new FormArray([
      new FormGroup({
        colour: new FormControl(''),
        size: new FormControl(''),
        count: new FormControl(''),
      }),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  get options() {
    return this.form.get('options') as FormArray;
  }
}
