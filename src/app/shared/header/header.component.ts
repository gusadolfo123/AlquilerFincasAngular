import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadCompany } from 'src/app/store/actions/company.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  socialMedia: string[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // carga datos de la compañia
    this.store.dispatch(new LoadCompany());
    this.subscription = this.store
      .select('Company')
      .pipe(filter(res => res.company != null)) // solo permite pasar el observable si este no es null
      .subscribe(result => {
        this.socialMedia.push(result.company.facebook);
        this.socialMedia.push(result.company.instagram);
        this.socialMedia.push(result.company.whatsapp);
        this.socialMedia.push(result.company.twitter);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
