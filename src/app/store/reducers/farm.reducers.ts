import * as fromFarm from '../actions/farm.actions';
import { Farm } from '../../models/farm.interface';

export interface FarmState {
  farm: Farm;
  loaded: boolean;
  loading: boolean;
  error: any;
}
