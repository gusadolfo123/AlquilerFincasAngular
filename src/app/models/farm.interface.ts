import { Image } from './image.interface';
import { Coordinate } from './coordinate.interface';

interface SeasonPrice {
  total?: number;
  per_person?: number;
}

export interface Farm {
  _id?: string;
  name?: string;
  alias?: string;
  dir?: string;
  description?: string;
  coordinate?: Coordinate;
  images?: [Image];
  prices?: {
    low_season: SeasonPrice;
    mid_season: SeasonPrice;
    high_season: SeasonPrice;
  };
  services?: [string];
  terms_conditions: [string];
}
