import {Activity, Appointment, User} from '../shared/interfases';

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
    {email: 'homoantropos@gmail.com',
      password: '22222222',
      idToken: 'werterwpisfjjvsdbfsdfd'
    },
    ];
}

export class MockActivitiesDataBase {
  static mockActivitiesDataBase: Array<Activity> = [
    {  title: 'Правила Cool Games',
      author: 'Сергій Антропов',
      content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
      id: '1',
      date: new Date(2010, 10, 10)},
    {  title: 'Естафети Cool Games', author: 'Сергій Антропов',
      content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
      id: '2',
      date: new Date(2000, 1, 23)},
    {  title: 'Правила Cool Race', author: 'Олександр Ігнатко',
      content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
      id: '3',
      date: new Date(2000, 4, 15)},
    {  title: 'Естафети Cool Race',
      author: 'Сергій Антропов',
      content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!', id: '', date: new Date(2001, 11, 30)},
    {  title: 'Структури і правила',
      author: 'Володимир Артамонов',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia qu',
      id: '4',
      date: new Date(2020, 5, 19)},
    {  title: 'Подача заявок на Європейські університетські ігри',
      author: 'Олена Зерник',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia qu',
      id: '5',
      date: new Date(2020, 12, 22)},
    {  title: 'Подача заявок на Всесвітню Універсіаду',
      author: 'Олена Зерник',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia qu',
      id: '6',
      date: new Date(2020, 7, 28)},
    {  title: 'Зимова Універсіада України',
      author: 'Олена Негода',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia qu',
      id: '7',
      date: new Date(2020, 5, 2)},
  ];

}
