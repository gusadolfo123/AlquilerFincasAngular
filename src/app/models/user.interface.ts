export interface User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  email?: string;
  password?: string;
  tokens?: [string];
}
