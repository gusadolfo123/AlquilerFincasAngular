import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as companyActions from '../actions/company.actions';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.interface';

@Injectable()
export class CompanyEffects {
  constructor(private actions$: Actions, private companyService: CompanyService) {}

  @Effect()
  loadCompany$ = this.actions$.pipe(
    ofType(companyActions.CompanyActionType.LoadCompany),
    switchMap(() => {
      return this.companyService.getCompany().pipe(
        map(result => {
          let company = result.object[0] as Company;
          return new companyActions.LoadCompanySuccess(company);
        }),
        catchError(error => of(new companyActions.LoadCompanyFail(error))),
      );
    }),
  );
}
