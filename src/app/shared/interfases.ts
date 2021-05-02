export interface User {
  email: string;
  password: string;
  role?: string;
  id?: number;
}

export interface Activity {
  title: string;
  author: string;
  content: string;
  id?: number;
  date?: Date;
  kindOfActivity?: string;
  user_id?: string;
}

export interface Appointment {
  title: string;
  start: Date;
  finish: Date;
  duration: number;
  place: Place;
  organizationsParticipants: string;
  sportKind?: SportKind;
  kpkv: number;
  character: string;
  participants: string;
  direction: string;
  status: string;
  organiser: string;
  appointment_id?: string;
  person_id?: string;
}

export interface SportKind {
  sport_kind: string;
  code?: string;
  id?: number;
}

export interface Place {
  country: string;
  region?: string;
  town: string;
  sportHall?: string;
  address?: string;
  place_id?: string;
}

export interface Country {
  country_name: string;
  country_id?: number;
}

export interface Region {
  region_name: string;
  region_group?: number;
  country?: Country;
  region_id?: number;
}

export interface Town {
  town_name: string;
  country?: Country;
  region?: Region;
  town_id?: number;
}

export interface SportHall {
  sporthall_name: string;
  address?: string;
  town: Town;
  sportHall_id?: number;
}

export interface EducationEntity {
  name: string;
  category?: number;
  type: string;
  region?: string;
  eduentity_id?: string;
}

export interface Participant {
  name: string;
  surname: string;
  fathersName?: string;
  DoB: Date;
  gender: string;
  schoolchildOrStudent: string;
  coach?: Coach;
  participant_id?: string;
}

export interface Coach {
  coach_name: string;
  surname: string;
  fatherName: string;
  gender: string;
  coach_id?: string;
}

export interface Result {
  appointment: Appointment;
  participant: Participant;
  eduentity: EducationEntity;
  region?: string;
  discipline: string;
  place: number;
  ratingPoints: number;
  result_id?: string;
  person_id?: string;
}

export interface RatingBrick {
  resultsOwnerStudent?: Participant;
  resultsOwnerEduEntity?: EducationEntity;
  results: Array<Result>;
  totalRating: number;
}

export interface Expenses {
  kekv2210: number;
  kekv2220: number;
  kekv2240: number;
  // TODO: удалить
  total?: number;
  person_id?: string;
}

export interface AppointmentFinancing {
  appointment: Appointment;
  expensesPlan: Expenses;
  expensesFact: Expenses;
  appointmentfinancing_id?: string;
  person_id?: string;
}

export interface Members {
  countries?: number;
  regions?: number;
  educationEntity?: number;
  sportsmen: number;
  coaches?: number;
  referees?: number;
  others?: number;
  total: number;
}

export interface Report {
  appointment: Appointment;
  membersPlan: Members;
  personPerDayPlan: number;
  membersFact: Members;
  personPerDayFact: number;
  report_id?: string;
  person_id?: string;
}

export interface News {
  title: string;
  date: Date;
  content: string;
  _id?: string;
}
