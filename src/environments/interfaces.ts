import {User} from '../app/shared/interfases';

export interface SecurityToken {
  token: string;
  user: User;
  expiredIn: Date;
}

export interface MockDbResponse {
  token?: string;
  user: User;
  expireIn?: Date;
  status: number;
}
