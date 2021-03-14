export interface User {
  email: string;
  password: string;
  idToken?: string;
}

export interface Appointment {
  title: string;
  id?: string;
}

export interface Activity {
  title: string;
  author: string;
  content: string;
  id?: string;
  date?: Date;
}
