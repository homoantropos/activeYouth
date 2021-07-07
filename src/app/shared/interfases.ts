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
  imageSrc?: string;
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
  appointment_place: AppointmentPlace;
  logoSrc?: string;
  organizationsParticipants: string;
  sportKind?: SportKind;
  kpkv: number;
  character: string;
  participants: string;
  direction: string;
  status: string;
  organiser: string;
  appointmentId?: number;
  appointment_id?: string;
  person_id?: string;
}

export interface SportKind {
  sport_kind: string;
  program: string;
  registration_number: number;
  id?: number;
}

export interface Country {
  country_name: string;
  id?: number;
}

export interface Region {
  region_name: string;
  region_group?: number;
  country?: Country;
  id?: number;
}

export interface Town {
  town_name: string;
  country?: Country;
  region?: Region;
  id?: number;
}

export interface AppointmentPlace {
  appointment_place_name: string;
  address: string;
  country: Country;
  region: Region;
  town: Town;
  id?: number;
}

export interface EducationEntity {
  name: string;
  category?: number;
  type?: string;
  country?: Country;
  reg?: Region;
  region?: string;
  id?: number;
}

export interface Participant {
  name: string;
  surname: string;
  fathersName?: string;
  DoB: Date;
  gender: string;
  schoolchildOrStudent: string;
  coach?: Coach;
  participant_id?: string; /*this will be removed*/
  id?: number;
}

export interface Coach {
  coach_name: string;
  surname: string;
  fathersName: string;
  gender?: string;
  id?: number;
}

export interface Result {
  appointment: Appointment;
  participant: Participant;
  coach?: Coach;
  eduentity: EducationEntity;
  educational_entity?: EducationEntity;
  reg?: Region;
  region?: string;
  discipline: string;
  place?: number;
  ratingPoints?: number;
  completed?: false;
  appointmentId?: number;
  user?: User;
  id?: number;
  personId?: number;
  result_id?: string; /*this will be removed*/
  person_id?: string; /*this will be removed*/
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
  id?: number;
  person_id?: number;
}

export interface News {
  title: string;
  date: Date;
  content: string;
  imagesScr?: Array<string>;
  _id?: string;
}
