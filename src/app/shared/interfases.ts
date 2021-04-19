export interface User {
  email: string;
  password: string;
  role?: string;
  person_id?: number;
}

export interface Activity {
  title: string;
  author: string;
  content: string;
  _id?: number;
  date?: Date;
  kindOfActivity?: string;
  _userId?: string;
}

export interface Appointment {
  title: string;
  startDate: Date;
  finishDate: Date;
  duration: number;
  place: Place;
  organizationsParticipants: string;
  sportKind?: SportKind;
  KPKV: number;
  character: string;
  participants: string;
  direction: string;
  status: string;
  organiser: string;
  _id?: string;
  _userId?: string;
}

export interface SportKind{
  name: string;
  sportkind_id?: number;
}

export interface Place {
  country: string;
  region?: string;
  town: string;
  sportHallName?: string;
  address?: string;
  _id?: string;
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
  sportHall_name: string;
  address?: string;
  town: Town;
  sportHall_id?: number;
}

export interface EducationEntity {
  name: string;
  category?: number;
  type: string;
  region?: string;
  _id?: string;
}

export interface Participant {
  name: string;
  surname: string;
  fathersName?: string;
  DoB: Date;
  gender: string;
  schoolchildOrStudent: string;
  coach?: Coach;
  _id?: string;
}

export interface Coach {
  name: string;
  surname: string;
  fatherName: string;
  gender: string;
  _id?: string;
}

export interface Result {
  appointment: Appointment;
  participant: Participant;
  eduEntity: EducationEntity;
  region?: string;
  discipline: string;
  place: number;
  ratingPoints: number;
  _id?: string;
  _userId?: string;
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
  _userId?: string;
}

export interface AppointmentFinancing {
  appointment: Appointment;
  expensesPlan: Expenses;
  expensesFact: Expenses;
  _id?: string;
  _userId?: string;
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
  personPerDayTotalPlan: number;
  membersFact: Members;
  personPerDayTotalFact: number;
  _id?: string;
  _userId?: string;
}

export interface News {
  title: string;
  date: Date;
  content: string;
  _id?: string;
}
