import {Appointment, User} from '../shared/interfases';

export class MockSchedule {
  static schedule: Appointment [] = [
    {title: 'Чемпіонат Світу з волейболу', id: 'first'},
    {title: 'Чемпіонат України з гандболу', id: 'second'},
    {title: 'Всесвітня літня Універсіада', id: 'third'}
  ];
}

export class MockAuthenticatedUsers {
  static authenticatedUsers: Array<User> = [
    {email: 'santre8@gmail.com',
      password: '11111111',
      idToken: 'asewrweotrksdfsdifseYYY'
    },
    {email: 'homoantropos8@gmail.com',
      password: '22222222',
      idToken: 'werterwpisfjjvsdbfsdfd'
    },
    ];
}
