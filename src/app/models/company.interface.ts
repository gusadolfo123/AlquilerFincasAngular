export interface Coordinate {
  lat?: number;
  lan?: number;
}

export interface Phone {
  phone_type?: String;
  number?: String;
}

export interface Image {
  name?: string;
  url?: string;
  size?: number;
}

export interface Company {
  _id?: string;
  name?: string;
  dir?: string;
  coordinate?: Coordinate;
  phones?: [Phone];
  images?: [Image];
  whatsapp?: string;
  mission?: string;
  vision?: string;
  description?: string;
}
