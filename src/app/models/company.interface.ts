import { Coordinate } from './coordinate.interface';
import { Phone } from './phone.interface';
import { Image } from './image.interface';

export interface Company {
  _id?: string;
  name?: string;
  dir?: string;
  coordinate?: Coordinate;
  phones?: Phone[];
  images?: Image[];
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  mission?: string;
  vision?: string;
  description?: string;
}
