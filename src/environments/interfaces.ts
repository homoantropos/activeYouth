import {AppointmentFinancing, User} from '../app/shared/interfases';

export interface MockDbResponse {
  token?: string;
  user: User;
  expireIn?: Date;
  status: number;
}

export interface Environment {
  production: false;
  mongoDbUrl: string;
}
