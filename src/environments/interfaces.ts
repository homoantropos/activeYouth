import {User} from '../app/shared/interfases';

export interface MockDbResponse {
  token?: string;
  user: User;
  expireIn?: Date;
  status: number;
}
