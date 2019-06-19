import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  activities = [
    { value: 1, viewValue: 'Bicicleta' },
    { value: 1, viewValue: 'Caminata' },
    { value: 1, viewValue: 'Otro' },
  ];
  destinies = [{ value: 1, viewValue: 'Bogota' }, { value: 2, viewValue: 'Medellin' }, { value: 3, viewValue: 'Cali' }];
  dataForm: any = { op1: '', op2: '', fecha: '' };

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      op1: new FormControl('', Validators.required),
      op2: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.date, this.dataForm);
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.dataForm.fecha = event.value;
  }
}
