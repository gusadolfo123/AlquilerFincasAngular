import { Action } from '@ngrx/store';
import { Company } from '../../models/company.interface';

export enum CompanyActionType {
  LoadCompany = '[Company] Load Company',
  LoadCompany_Success = '[Company] Load Company Success',
  LoadCompany_Fail = '[Company] Load Company Fail',
}

export class LoadCompany implements Action {
  readonly type = CompanyActionType.LoadCompany;
}

export class LoadCompanySuccess implements Action {
  readonly type = CompanyActionType.LoadCompany_Success;
  constructor(public company: Company) {}
}

export class LoadCompanyFail implements Action {
  readonly type = CompanyActionType.LoadCompany_Fail;
  constructor(public payload: any) {}
}

export type CompanyActions = LoadCompany | LoadCompanySuccess | LoadCompanyFail;
