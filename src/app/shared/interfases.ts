export interface User {
  email: string;
  password: string;
  idToken?: string;
}

export interface Appointment {
  title: string;
  id?: string;
}
