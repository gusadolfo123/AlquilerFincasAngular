import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from 'src/app/models/company.interface';
import { CompanyService } from 'src/app/services/company.service';
import { Image } from 'src/app/models/image.interface';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, OnDestroy {
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
  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select('Company')
      .pipe(filter(res => res.company != null)) // solo permite pasar el observable si este no es null
      .subscribe(result => {
        this.avatars = result.company.images;
      });
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
