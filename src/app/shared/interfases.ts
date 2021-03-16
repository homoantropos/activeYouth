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
  placeOfHolding?: PlaceOfHolding;
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

export interface QuantityOfParticipants {
  countries?: number;
  regions?: number;
  educationEntity?: number;
  sportsmen: number;
  coaches?: number;
  referees?: number;
  others: number;
  total: number;
}
