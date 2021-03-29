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
  duration: number;
  place: Place;
  organizationsParticipants: string;
  character: string;
  KPKV: number;
  participants: string;
  sportKind?: string;
  direction: string;
  status: string;
  organiser: string;
  id?: string;
}

export interface Place {
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
  region?: string;
}

export interface Participant {
  name: string;
  surname: string;
  fathersName?: string;
  DoB: Date;
  gender: string;
  schoolchildOrStudent: string;
  coach?: Coach;
  id?: string;
}

export interface Coach {
  name: string;
  surname: string;
  gender: string;
  id?: string;
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

export interface RatingBrick  {
  resultsOwnerStudent?: Participant;
  resultsOwnerEduEntity?: EducationEntity;
  results: Array<Result>;
  totalRating: number;
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
  numberOfParticipantsPlan: NumbersOfParticipants;
  personPerDayTotalPlan: number;
  numberOfParticipantsFact: NumbersOfParticipants;
  personPerDayTotalFact: number;
  id?: string;
}
