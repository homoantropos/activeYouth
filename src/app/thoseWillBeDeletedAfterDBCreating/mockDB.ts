import {Activity, Appointment, AppointmentFinancing, Result, User} from '../shared/interfases';
import {Statistic} from '../shared/interfases';

export class MockDataBase {

  static mockResultsDataBase: Array<Result> = [];

  static statistics: Array<Statistic> = [];

  static balance: Array<AppointmentFinancing> = [];

  static schedule: Array<Appointment> = [
    {title: 'Зимова Гімназіада України з лижних гонок',
     startDate: new Date(2021, 2, 16),
     finishDate: new Date(2021, 2, 28),
     participants: 'schoolchild',
     sportKind: 'лижні гонки',
     direction: 'sport',
     status: 'ukrainian',
     placeOfHolding: {
       country: 'Україна',
       region: 'Львівська обл.',
       town: 'Сколе',
       sportHallName: 'база Тисовець',
       address: ''
     },
     organiser: 'УФУС',
     id: '1ww'
    },
    {title: 'Зимова Універсіада України з біатлону',
      startDate: new Date(2021, 2, 9),
      finishDate: new Date(2021, 2, 11),
      participants: 'students',
      sportKind: 'біатлон',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Львівська обл.',
        town: 'Сколе',
        sportHallName: 'база Тисовець',
        address: ''
      },
      organiser: 'СССУ',
      id: '2ww'
    },
    {title: 'Зимова Гімназіада України з біатлону',
      startDate: new Date(2021, 2, 28),
      finishDate: new Date(2021, 2, 30),
      participants: 'schoolchild',
      sportKind: 'біатлон',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Львівська обл.',
        town: 'Сколе',
        sportHallName: 'база Тисовець',
        address: ''
    },
      organiser: 'УФУС',
      id: '3ww'
    },
    {title: 'Зимова Універсіада України з лижних гонок',
      startDate: new Date(2021, 2, 18),
      finishDate: new Date(2021, 2, 21),
      participants: 'students',
      sportKind: 'лижні гонки',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Львівська обл.',
        town: 'Сколе',
        sportHallName: 'база Тисовець',
        address: ''
    },
      organiser: 'СССУ',
      id: '4ww'
    },
    {title: 'Європейські університетські ігри з волейболу',
      startDate: new Date(2021, 6, 14),
      finishDate: new Date(2021, 6, 21),
      participants: 'students',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHallName: '',
        address: ''
    },
      organiser: 'СССУ EUSA',
      id: '5ww'
    },
    {title: 'Європейські університетські ігри з регбі-7',
      startDate: new Date(2021, 6, 14),
      finishDate: new Date(2021, 6, 21),
      participants: 'students',
      sportKind: 'регбі-7',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHallName: '',
        address: ''
    },
      organiser: 'СССУ EUSA',
      id: '6ww'
    },
    {title: 'Чемпіонат України з волейболу серед учнів',
      startDate: new Date(2021, 1, 23),
      finishDate: new Date(2021, 1, 26),
      participants: 'schoolchild',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Івано-Франківська обл.',
        town: 'Івано-Франківськ',
        sportHallName: 'Олімп',
        address: 'вул. Паркова 12'
    },
      organiser: 'КФВС МОН',
      id: '7ww'
    },
    {title: 'Спортивна надія України з волейболу серед учнів',
      startDate: new Date(2021, 10, 23),
      finishDate: new Date(2021, 10, 26),
      participants: 'schoolchild',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Луганська обл.',
        town: 'Кремінна',
        sportHallName: 'спортивний зал ЗОШ № 8',
        address: 'вул. Весняна 12'
    },
      organiser: 'КФВС МОН',
      id: '8ww'
    },
    {title: 'Спортивна надія України з боксу серед учнів',
      startDate: new Date(2021, 10, 23),
      finishDate: new Date(2021, 10, 26),
      participants: 'schoolchild',
      sportKind: 'бокс',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Луганська обл.',
        town: 'Кремінна',
        sportHallName: 'спортивний зал ЗОШ № 8',
        address: 'вул. Весняна 12'
    },
      organiser: 'КФВС МОН',
      id: '9ww'
    },
    {title: 'Спортивна надія України з боротьби вільної серед учнів',
      startDate: new Date(2021, 10, 23),
      finishDate: new Date(2021, 10, 26),
      participants: 'schoolchild',
      sportKind: 'боротьба вільна',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Луганська обл.',
        town: 'Кремінна',
        sportHallName: 'спортивний зал ЗОШ № 8',
        address: 'вул. Весняна 12'
    },
      organiser: 'КФВС МОН',
      id: '10ww'
    },
    {title: 'Чемпіонат України з козацького двобою серед учнів',
      startDate: new Date(2021, 2, 3),
      finishDate: new Date(2021, 2, 5),
      participants: 'schoolchild',
      sportKind: 'козацький двобій',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Сумська обл.',
        town: 'Суми',
        sportHallName: 'легкоатлетичний манеж СумДУ',
        address: 'вул. Студентська 52'
    },
      organiser: 'КФВС МОН',
      id: '11ww'
    },
    {title: 'Чемпіонат України з козацького двобою серед студентів',
      startDate: new Date(2021, 2, 6),
      finishDate: new Date(2021, 2, 8),
      participants: 'students',
      sportKind: 'козацький двобій',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Сумська обл.',
        town: 'Суми',
        sportHallName: 'легкоатлетичний манеж СумДУ',
        address: 'вул. Студентська 52'
    },
      organiser: 'КФВС МОН',
      id: '12ww'
    },
    {title: 'Всесвітні учнівські спортивні ігри з волейболу (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
      participants: 'schoolchild',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHallName: '',
        address: ''
    },
      organiser: 'УФУС ISF',
      id: '1ww1'
    },
    {title: 'Всесвітні учнівські спортивні ігри з дзюдо (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
      participants: 'schoolchild',
      sportKind: 'дзюдо',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHallName: '',
        address: ''
    },
      organiser: 'УФУС ISF',
      id: '1ww2'
    },
    {title: 'Всесвітні учнівські спортивні ігри з карате (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
      participants: 'schoolchild',
      sportKind: 'карате',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHallName: '',
        address: ''
    },
      organiser: 'УФУС ISF',
      id: '1ww3'
    },
    {title: 'Всесвітні учнівські спортивні ігри з легкої атлетики (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
      participants: 'schoolchild',
      sportKind: 'легка атлетика',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHallName: '',
        address: ''
    },
      organiser: 'УФУС ISF',
      id: '1ww4'
    },
    {title: 'Всесвітні учнівські спортивні ігри з плавання (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
      participants: 'schoolchild',
      sportKind: 'плавання',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHallName: '',
        address: ''
    },
      organiser: 'УФУС ISF',
      id: '1ww5'
    },
    {title: 'Літня Гімназіада України з волейболу (відбіркові)',
      startDate: new Date(2021, 3, 12),
      finishDate: new Date(2021, 2, 15),
      participants: 'schoolchild',
      sportKind: 'волейбол',
      direction: 'sport',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Волинська обл.',
        town: 'Луцьк',
        sportHallName: 'Спорткомплекс "Атлет"',
        address: 'вул. Мохова, 23'
    },
      organiser: 'УФУС',
      id: '1ww6'
    },
    {title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
      participants: 'schoolchild',
      sportKind: 'Cool Games',
      direction: 'physical culture',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Вінницька обл.',
        town: 'Ладижин',
        sportHallName: '',
        address: ''
    },
      organiser: 'КФВС МОН',
      id: '1ww7'
    },
    {title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
      participants: 'schoolchild',
      sportKind: 'Cool Games',
      direction: 'physical culture',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Дніпропетровська обл.',
        town: 'Дніпро',
        sportHallName: '',
        address: ''
    },
      organiser: 'КФВС МОН',
      id: '1ww8'
    },
    {title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
      participants: 'schoolchild',
      sportKind: 'Cool Games',
      direction: 'physical culture',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Івано-Франківська обл.',
        town: 'Долина',
        sportHallName: '',
        address: ''
    },
      organiser: 'КФВС МОН',
      id: '1ww9'
    },
    {title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
      participants: 'schoolchild',
      sportKind: 'Cool Games',
      direction: 'physical culture',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Запорізька обл.',
        town: 'Запоріжжа',
        sportHallName: '',
        address: ''
    },
      organiser: 'КФВС МОН',
      id: '1ww10'
    },
    {title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
      participants: 'schoolchild',
      sportKind: 'Cool Games',
      direction: 'physical culture',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Донецька обл.',
        town: 'Славянск',
        sportHallName: '',
        address: ''
    },
      organiser: 'КФВС МОН',
      id: '1ww19'
    },
    {title: 'ІІІ Всеукраїнські Cool Games',
      startDate: new Date(2021, 4, 27),
      finishDate: new Date(2021, 4, 30),
      participants: 'schoolchild',
      sportKind: 'Cool Games',
      direction: 'physical culture',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Меридіан-Венето',
        address: 'бул. Героїв Севастополя, 11В'
    },
      organiser: 'КФВС МОН',
      id: '1ww20'
    },
    {title: 'Літня Універсіада України з веслування академічного',
      startDate: new Date(2021, 4, 20),
      finishDate: new Date(2021, 4, 22),
      participants: 'students',
      sportKind: 'веслування академічне',
      direction: 'sport',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Гребний канал',
        address: 'Труханів острів'
    },
      organiser: 'СССУ',
      id: '1ww21'
    },
    {title: 'Літня Гімназіада України з тхеквондо ВТФ (відбіркові)',
      startDate: new Date(2021, 0, 20),
      finishDate: new Date(2021, 0, 23),
      participants: 'schoolchild',
      sportKind: 'тхеквондо ВТФ',
      direction: 'sport',
      status: 'regional',
      placeOfHolding: {
        country: 'Україна',
        region: 'Івано-Франківська обл.',
        town: 'Івано-Франківськ',
        sportHallName: 'Спорткомплекс Прикарпатського національного уніврситету',
        address: 'вул. Прикарпатська 90'
    },
      organiser: 'УФУС',
      id: '1ww223'
    },
    {title: 'Всесвітня літня Гімназіада з велоспорту',
      startDate: new Date(2021, 9, 14),
      finishDate: new Date(2021, 9, 21),
      participants: 'schoolchild',
      sportKind: 'велоспорт',
      direction: 'sport',
      status: 'international',
      placeOfHolding: {
        country: 'КНР',
        region: '',
        town: 'Ченду',
        sportHallName: '',
        address: ''
    },
      organiser: 'УФУС ISF',
      id: '1ww331'
    },
    {title: 'Літня Універсіада України з гандболу',
      startDate: new Date(2021, 5, 19),
      finishDate: new Date(2021, 5, 21),
      participants: 'students',
      sportKind: 'гандбол',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Дніпропетровська обл.',
        town: 'Дніпропетровськ',
        sportHallName: 'спорткомплекс НУХТУ',
        address: 'Дніпровська набережна 25'
    },
      organiser: 'СССУ',
      id: '1ww334'
    },
    {title: 'Всеукраїнські Combat Games з карате',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
      participants: 'schoolchild',
      sportKind: 'карате',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
    },
      organiser: 'КФВС МОН',
      id: '1ww40'
    },
    {title: 'Всеукраїнські Combat Games з боротьби греко-римської',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
      participants: 'schoolchild',
      sportKind: 'боротьба греко-римська',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
    },
      organiser: 'КФВС МОН',
      id: '1ww41'
    },
    {title: 'Всеукраїнські Combat Games з тхеквондо ВТФ',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
      participants: 'schoolchild',
      sportKind: 'тхеквондо ВТФ',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
    },
      organiser: 'КФВС МОН',
      id: '1ww42'
    },
    {title: 'Всеукраїнські Combat Games з боротьби вільної',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
      participants: 'schoolchild',
      sportKind: 'боротьба вільна',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
    },
      organiser: 'КФВС МОН',
      id: '1ww43'
    },
    {title: 'Всеукраїнські Combat Games з дзюдо',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
      participants: 'schoolchild',
      sportKind: 'дзюдо',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
    },
      organiser: 'КФВС МОН',
      id: '1ww44'
    },
    {title: 'Шкільна баскетбольна ліга',
      startDate: new Date(2021, 8, 26),
      finishDate: new Date(2021, 8, 30),
      participants: 'schoolchild',
      sportKind: 'баскетбол',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Запорізька обл.',
        town: 'Запоріжжа',
        sportHallName: 'Юність',
        address: 'Центральний бульвар 96'
    },
      organiser: 'КФВС МОН',
      id: '1ww45'
    },
    {title: 'Чемпіонат України з фрі-файту серед учнів',
      startDate: new Date(2021, 10, 9),
      finishDate: new Date(2021, 10, 10),
      participants: 'schoolchild',
      sportKind: 'фрі-файт',
      direction: 'sport',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Тернопільска обл.',
        town: 'Збараж',
        sportHallName: 'Палац Спорту',
        address: 'вул. Б. Хмельницького, 1'
    },
      organiser: 'КФВС МОН',
      id: '1ww46'
    },
    {title: 'Міжнародний день студентського спорту',
      startDate: new Date(2021, 8, 20),
      finishDate: new Date(2021, 8, 20),
      participants: 'students',
      direction: 'physical culture',
      status: 'ukrainian',
      placeOfHolding: {
        country: 'Україна',
        region: 'Вінницька обл.',
        town: 'Вінниця',
        sportHallName: 'Стадіон ДЮСШ № 5',
        address: 'Центральний Парк'
    },
      organiser: 'СССУ',
      id: '1ww47'
    }];
  static authenticatedUsers: Array<User> = [
    {email: 'santre8@gmail.com',
      password: '11111111',
      accessLevel: 1
    },
    {email: 'homoantropos@gmail.com',
      password: '22222222',
      accessLevel: 2
    },
  ];

  static mockActivitiesDataBase: Array<Activity> = [
    {title: 'Правила Cool Games',
      author: 'Сергій Антропов',
      content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
      id: `${Date.now()}`,
      date: new Date(2010, 10, 10),
      kindOfActivity: 'physical culture'},

    {title: 'Естафети Cool Games', author: 'Сергій Антропов',
      content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
      id: `${Date.now()}`,
      date: new Date(2000, 1, 23),
      kindOfActivity: 'physical culture'},

    {title: 'Правила Cool Race', author: 'Олександр Ігнатко',
      content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
      id: `${Date.now()}`,
      date: new Date(2000, 4, 15),
      kindOfActivity: 'physical culture'},

    {title: 'Естафети Cool Race',
      author: 'Сергій Антропов',
      content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
      id: `${Date.now()}`,
      date: new Date(2001, 11, 30),
      kindOfActivity: 'physical culture'},

    {title: 'Структури і правила',
      author: 'Володимир Артамонов',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia qu',
      id: `${Date.now()}`,
      date: new Date(2020, 5, 19),
      kindOfActivity: 'physical culture'},

    {title: 'Подача заявок на Європейські університетські ігри',
      author: 'Олена Зерник',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia qu',
      id: `${Date.now()}`,
      date: new Date(2020, 12, 22),
      kindOfActivity: 'sport'},

    {title: 'Подача заявок на Всесвітню Універсіаду',
      author: 'Олена Зерник',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia qu',
      id: `${Date.now()}`,
      date: new Date(2020, 7, 28),
      kindOfActivity: 'sport'},

    {title: 'Зимова Універсіада України',
      author: 'Олена Негода',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus\n' +
        '  molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias  officiis assumenda officia qu',
      id: `${Date.now()}`,
      date: new Date(2020, 5, 2),
      kindOfActivity: 'sport'},
  ];
}

