import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepicker } from '@angular/material';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('picker1', { static: true }) picker1: MatDatepicker<Date>;
  @ViewChild('picker2', { static: true }) picker2: MatDatepicker<Date>;

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
  destinies = [{ value: 1, viewValue: 'Bogota' }, { value: 2, viewValue: 'Medellin' }, { value: 3, viewValue: 'Cali' }, { value: 4, viewValue: 'Amazonas' }];
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      elderly_guests: new FormControl('', Validators.required),
      minor_guests: new FormControl('', Validators.required),
      destinies: new FormControl(this.destinies, Validators.required),
    });
    this.options = new FormBuilder().group({
      hideRequired: false,
      floatLabel: 'never',
    });
  }

  ngOnDestroy(): void {}

  onSubmit() {
    for (const key in this.form.controls) {
      if (this.form.controls.hasOwnProperty(key)) {
        const element = this.form.controls[key];
        console.log(element);
      }
    }
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {}

  addEventStart(event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value;
    console.log(this.startDate, this.endDate);
    if (this.startDate >= this.endDate || isNullOrUndefined(this.endDate)) {
      this.endDate = new Date(this.startDate);
      this.endDate.setDate(this.startDate.getDate() + 1);
      this.form.controls['endDate'].setValue(this.endDate);
    }
    this.picker2.open();
  }

  addEventEnd(event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value;
  }
}
