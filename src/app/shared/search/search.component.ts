import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  currentDate: Date = new Date();
  startDate: Date;
  endDate: Date;

  myFilter = (d: Date): boolean => {
    // const day = d.getDay();
    return d >= this.currentDate;
  };

  myFilter2 = (d: Date): boolean => {
    // const day = d.getDay();
    return d > this.startDate;
  };

  form: FormGroup;
  options: FormGroup;
  activities = [{ value: 1, viewValue: 'Bicicleta' }, { value: 1, viewValue: 'Caminata' }, { value: 1, viewValue: 'Otro' }];
  destinies = [{ value: 1, viewValue: 'Bogota' }, { value: 2, viewValue: 'Medellin' }, { value: 3, viewValue: 'Cali' }];
  dataForm: any = { op1: '', op2: '', fecha1: '', fecha2: '' };

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      op1: new FormControl('', Validators.required),
      op2: new FormControl('', Validators.required),
      fecha1: new FormControl('', Validators.required),
      fecha2: new FormControl('', Validators.required),
    });
    this.options = new FormBuilder().group({
      hideRequired: false,
      floatLabel: 'never',
    });
  }

  onSubmit() {
    console.log(this.date, this.dataForm);
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.dataForm.fecha1 = event.value;
  }

  addEventStart(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.startDate = event.value;
  }

  addEventEnd(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.endDate = event.value;
  }
}
