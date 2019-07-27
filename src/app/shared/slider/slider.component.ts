import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.interface';
import { CompanyService } from 'src/app/services/company.service';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  private company: Company[];
  private avatars: Image[] = [{ url: 'https://picsum.photos/1920/800/?image=1052' }];

  follow = true;
  enablePan = true;
  index = 8;
  speed = 3000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    // this.companyService.getCompany().subscribe(result => {
    //   this.company = result.object as Company[];
    //   this.avatars = this.company[0].images as Image[];
    // });
  }

  indexChanged(index) {
    // console.log(index);
  }

  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }

  a(i) {
    // console.log(i);
  }
}
