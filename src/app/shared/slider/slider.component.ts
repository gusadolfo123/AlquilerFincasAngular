import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  follow = true;
  enablePan = true;
  index = 8;
  speed = 3000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '123456789'.split('').map((x, i) => {
    const num = i;
    return {
      url: `https://picsum.photos/1920/800/?image=${num}`,
      title: `${num}`,
    };
  });
  constructor() {}

  ngOnInit() {}

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
