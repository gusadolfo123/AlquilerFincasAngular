import { Image } from './image.interface';
import { Coordinate } from './coordinate.interface';

interface SeasonPrice {
  total?: number;
  per_person?: number;
}

export interface FarmsPerPage {
  farms?: Farm[];
  current?: number;
  pages?: number;
  total?: number;
}

export interface Farm {
  _id?: string;
  name?: string;
  alias?: string;
  dir?: string;
  description?: string;
  type?: string;
  qualification?: number;
  city?: string;
  coordinate?: Coordinate;
  image_card?: Image;
  images?: [Image];
  prices?: {
    low_season: SeasonPrice;
    mid_season: SeasonPrice;
    high_season: SeasonPrice;
  };
  services?: [string];
  terms_conditions?: [string];
}
