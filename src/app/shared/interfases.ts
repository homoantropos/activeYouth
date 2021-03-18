export interface User {
  email: string;
  password: string;
  accessLevel?: number;
  idToken?: string;
}

export interface Activity {
  title: string;
  author: string;
  content: string;
  id?: string;
  date?: Date;
  kindOfActivity?: string;
}

export interface Appointment {
  title: string;
  startDate: Date;
  finishDate: Date;
  duration?: number;
  placeOfHolding: PlaceOfHolding;
  participants: string;
  sportKind?: string;
  direction: string;
  status: string;
  organiser: string;
  id?: string;
}

export interface PlaceOfHolding {
  country: string;
  region?: string;
  town: string;
  sportHallName?: string;
  address?: string;
}

export interface EducationEntity {
  name: string;
  category?: number;
  type: string;
}

export interface Participant {
  name: string;
  surname: string;
  DoB: Date;
  gender: string;
}

export interface Result {
  appointment: Appointment;
  participant: Participant;
  eduEntity: EducationEntity;
  discipline: string;
  place: number;
  ratingPoints: number;
  id: string;
}

export interface Expenses {
  kekv2210: number;
  kekv2220: number;
  kekv2240: number;
  total: number;
}

export interface AppointmentFinancing {
  appointment: Appointment;
  expensesPlan: Expenses;
  expensesFact: Expenses;
  id: string;
}

export interface NumbersOfParticipants {
  countries?: number;
  regions?: number;
  educationEntity?: number;
  sportsmen: number;
  coaches?: number;
  referees?: number;
  others: number;
  total: number;
}

export interface Statistic {
  appointment: Appointment;
  numberOfParticipants: NumbersOfParticipants;
  id: string;
}
