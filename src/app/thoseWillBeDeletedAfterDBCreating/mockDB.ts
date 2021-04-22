import {Appointment, AppointmentFinancing, Result, Report} from '../shared/interfases';

export class MockDataBase {

  constructor() {
  }

  static statistics: Array<Report> = [];

  static balance: Array<AppointmentFinancing> = [];

  static schedule: Array<Appointment> = [
    {
      title: 'Зимова Гімназіада України з лижних гонок',
      start: new Date(2021, 2, 16),
      finish: new Date(2021, 2, 28),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Львівська обл.',
        town: 'Сколе',
        sportHall: 'база Тисовець',
        address: ''
      },
      organiser: 'УФУС',
      appointment_id: '1ww'
    },
    {
      title: 'Зимова Універсіада України з біатлону',
      start: new Date(2021, 2, 9),
      finish: new Date(2021, 2, 11),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'students',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Львівська обл.',
        town: 'Сколе',
        sportHall: 'база Тисовець',
        address: ''
      },
      organiser: 'СССУ',
      appointment_id: '2ww'
    },
    {
      title: 'Зимова Гімназіада України з біатлону',
      start: new Date(2021, 2, 28),
      finish: new Date(2021, 2, 30),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Львівська обл.',
        town: 'Сколе',
        sportHall: 'база Тисовець',
        address: ''
      },
      organiser: 'УФУС',
      appointment_id: '3ww'
    },
    {
      title: 'Зимова Універсіада України з лижних гонок',
      start: new Date(2021, 2, 18),
      finish: new Date(2021, 2, 21),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'students',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Львівська обл.',
        town: 'Сколе',
        sportHall: 'база Тисовець',
        address: ''
      },
      organiser: 'СССУ',
      appointment_id: '4ww'
    },
    {
      title: 'Європейські університетські ігри з волейболу',
      start: new Date(2021, 6, 14),
      finish: new Date(2021, 6, 21),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'students',
      direction: 'sport',
      status: 'international',
      place: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHall: '',
        address: ''
      },
      organiser: 'СССУ EUSA',
      appointment_id: '5ww'
    },
    {
      title: 'Європейські університетські ігри з регбі-7',
      start: new Date(2021, 6, 14),
      finish: new Date(2021, 6, 21),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'students',
      direction: 'sport',
      status: 'international',
      place: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHall: '',
        address: ''
      },
      organiser: 'СССУ EUSA',
      appointment_id: '6ww'
    },
    {
      title: 'Чемпіонат України з волейболу серед учнів',
      start: new Date(2021, 1, 23),
      finish: new Date(2021, 1, 26),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Івано-Франківська обл.',
        town: 'Івано-Франківськ',
        sportHall: 'Олімп',
        address: 'вул. Паркова 12'
      },
      organiser: 'КФВС МОН',
      appointment_id: '7ww'
    },
    {
      title: 'Спортивна надія України з волейболу серед учнів',
      start: new Date(2021, 10, 23),
      finish: new Date(2021, 10, 26),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Луганська обл.',
        town: 'Кремінна',
        sportHall: 'спортивний зал ЗОШ № 8',
        address: 'вул. Весняна 12'
      },
      organiser: 'КФВС МОН',
      appointment_id: '8ww'
    },
    {
      title: 'Спортивна надія України з боксу серед учнів',
      start: new Date(2021, 10, 23),
      finish: new Date(2021, 10, 26),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Луганська обл.',
        town: 'Кремінна',
        sportHall: 'спортивний зал ЗОШ № 8',
        address: 'вул. Весняна 12'
      },
      organiser: 'КФВС МОН',
      appointment_id: '9ww'
    },
    {
      title: 'Спортивна надія України з боротьби вільної серед учнів',
      start: new Date(2021, 10, 23),
      finish: new Date(2021, 10, 26),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Луганська обл.',
        town: 'Кремінна',
        sportHall: 'спортивний зал ЗОШ № 8',
        address: 'вул. Весняна 12'
      },
      organiser: 'КФВС МОН',
      appointment_id: '10ww'
    },
    {
      title: 'Чемпіонат України з козацького двобою серед учнів',
      start: new Date(2021, 2, 3),
      finish: new Date(2021, 2, 5),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Сумська обл.',
        town: 'Суми',
        sportHall: 'легкоатлетичний манеж СумДУ',
        address: 'вул. Студентська 52'
      },
      organiser: 'КФВС МОН',
      appointment_id: '11ww'
    },
    {
      title: 'Чемпіонат України з козацького двобою серед студентів',
      start: new Date(2021, 2, 6),
      finish: new Date(2021, 2, 8),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'students',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Сумська обл.',
        town: 'Суми',
        sportHall: 'легкоатлетичний манеж СумДУ',
        address: 'вул. Студентська 52'
      },
      organiser: 'КФВС МОН',
      appointment_id: '12ww'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з волейболу (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      start: new Date(2021, 8, 11),
      finish: new Date(2021, 8, 19),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'international',
      place: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHall: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww1'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з дзюдо (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      start: new Date(2021, 8, 11),
      finish: new Date(2021, 8, 19),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'international',
      place: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHall: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww2'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з карате (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      start: new Date(2021, 8, 11),
      finish: new Date(2021, 8, 19),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'international',
      place: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHall: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww3'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з легкої атлетики (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      start: new Date(2021, 8, 11),
      finish: new Date(2021, 8, 19),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'international',
      place: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHall: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww4'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з плавання (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      start: new Date(2021, 8, 11),
      finish: new Date(2021, 8, 19),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'international',
      place: {
        country: 'Сербія',
        region: '',
        town: 'Белград',
        sportHall: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww5'
    },
    {
      title: 'Літня Гімназіада України з волейболу (відбіркові)',
      start: new Date(2021, 3, 12),
      finish: new Date(2021, 2, 15),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'regional',
      place: {
        country: 'Україна',
        region: 'Волинська обл.',
        town: 'Луцьк',
        sportHall: 'Спорткомплекс "Атлет"',
        address: 'вул. Мохова, 23'
      },
      organiser: 'УФУС',
      appointment_id: '1ww6'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      start: new Date(2021, 3, 17),
      finish: new Date(2021, 3, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'physical culture',
      status: 'regional',
      place: {
        country: 'Україна',
        region: 'Вінницька обл.',
        town: 'Ладижин',
        sportHall: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww7'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      start: new Date(2021, 3, 17),
      finish: new Date(2021, 3, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'physical culture',
      status: 'regional',
      place: {
        country: 'Україна',
        region: 'Дніпропетровська обл.',
        town: 'Дніпро',
        sportHall: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww8'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      start: new Date(2021, 3, 17),
      finish: new Date(2021, 3, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'physical culture',
      status: 'regional',
      place: {
        country: 'Україна',
        region: 'Івано-Франківська обл.',
        town: 'Долина',
        sportHall: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww9'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      start: new Date(2021, 3, 17),
      finish: new Date(2021, 3, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'physical culture',
      status: 'regional',
      place: {
        country: 'Україна',
        region: 'Запорізька обл.',
        town: 'Запоріжжа',
        sportHall: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww10'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      start: new Date(2021, 3, 17),
      finish: new Date(2021, 3, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'physical culture',
      status: 'regional',
      place: {
        country: 'Україна',
        region: 'Донецька обл.',
        town: 'Славянск',
        sportHall: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww19'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games',
      start: new Date(2021, 4, 27),
      finish: new Date(2021, 4, 30),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'physical culture',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHall: 'Меридіан-Венето',
        address: 'бул. Героїв Севастополя, 11В'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww20'
    },
    {
      title: 'Літня Універсіада України з веслування академічного',
      start: new Date(2021, 4, 20),
      finish: new Date(2021, 4, 22),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'students',
      direction: 'sport',
      status: 'regional',
      place: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHall: 'Гребний канал',
        address: 'Труханів острів'
      },
      organiser: 'СССУ',
      appointment_id: '1ww21'
    },
    {
      title: 'Літня Гімназіада України з тхеквондо ВТФ (відбіркові)',
      start: new Date(2021, 0, 20),
      finish: new Date(2021, 0, 23),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'regional',
      place: {
        country: 'Україна',
        region: 'Івано-Франківська обл.',
        town: 'Івано-Франківськ',
        sportHall: 'Спорткомплекс Прикарпатського національного уніврситету',
        address: 'вул. Прикарпатська 90'
      },
      organiser: 'УФУС',
      appointment_id: '1ww223'
    },
    {
      title: 'Всесвітня літня Гімназіада з велоспорту',
      start: new Date(2021, 9, 14),
      finish: new Date(2021, 9, 21),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'international',
      place: {
        country: 'КНР',
        region: '',
        town: 'Ченду',
        sportHall: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww331'
    },
    {
      title: 'Літня Універсіада України з гандболу',
      start: new Date(2021, 5, 19),
      finish: new Date(2021, 5, 21),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'students',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Дніпропетровська обл.',
        town: 'Дніпропетровськ',
        sportHall: 'спорткомплекс НУХТУ',
        address: 'Дніпровська набережна 25'
      },
      organiser: 'СССУ',
      appointment_id: '1ww334'
    },
    {
      title: 'Всеукраїнські Combat Games з карате',
      start: new Date(2021, 11, 13),
      finish: new Date(2021, 11, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHall: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww40'
    },
    {
      title: 'Всеукраїнські Combat Games з боротьби греко-римської',
      start: new Date(2021, 11, 13),
      finish: new Date(2021, 11, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHall: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww41'
    },
    {
      title: 'Всеукраїнські Combat Games з тхеквондо ВТФ',
      start: new Date(2021, 11, 13),
      finish: new Date(2021, 11, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHall: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww42'
    },
    {
      title: 'Всеукраїнські Combat Games з боротьби вільної',
      start: new Date(2021, 11, 13),
      finish: new Date(2021, 11, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHall: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww43'
    },
    {
      title: 'Всеукраїнські Combat Games з дзюдо',
      start: new Date(2021, 11, 13),
      finish: new Date(2021, 11, 18),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Київ',
        town: 'Київ',
        sportHall: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww44'
    },
    {
      title: 'Шкільна баскетбольна ліга',
      start: new Date(2021, 8, 26),
      finish: new Date(2021, 8, 30),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Запорізька обл.',
        town: 'Запоріжжа',
        sportHall: 'Юність',
        address: 'Центральний бульвар 96'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww45'
    },
    {
      title: 'Чемпіонат України з фрі-файту серед учнів',
      start: new Date(2021, 10, 9),
      finish: new Date(2021, 10, 10),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'schoolchild',
      direction: 'sport',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Тернопільска обл.',
        town: 'Збараж',
        sportHall: 'Палац Спорту',
        address: 'вул. Б. Хмельницького, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww46'
    },
    {
      title: 'Міжнародний день студентського спорту',
      start: new Date(2021, 8, 20),
      finish: new Date(2021, 8, 20),
      duration: 3,
      organizationsParticipants: 'збірні областей і міста Київ',
      kpkv: 2201310,
      character: 'О',
      participants: 'students',
      direction: 'physical culture',
      status: 'ukrainian',
      place: {
        country: 'Україна',
        region: 'Вінницька обл.',
        town: 'Вінниця',
        sportHall: 'Стадіон ДЮСШ № 5',
        address: 'Центральний Парк'
      },
      organiser: 'СССУ',
      appointment_id: '1ww47'
    }];

  static mockResultsDataBase: Array<Result> = [
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Сергій',
        surname: 'Антропов',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        participant_id: 'СергійАнтропов19900213'
      },
      eduentity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 1,
      ratingPoints: 25,
      result_id: 'dfwvrvwververg'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Сергій',
        surname: 'Антропов',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        participant_id: 'СергійАнтропов19900213'
      },
      eduentity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 1,
      ratingPoints: 25,
      result_id: 'sdfsdgldpbfmp'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Дмитро',
        surname: 'Леонтович',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        participant_id: 'ДмитроЛеонтович19900213'
      },
      eduentity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 3,
      ratingPoints: 20,
      result_id: 'івавпапваіпвап'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Дмитро',
        surname: 'Леонтович',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        participant_id: 'ДмитроЛеонтович19900213'
      },
      eduentity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 2,
      ratingPoints: 22,
      result_id: 'dsvsldsdbsd'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Станіслав',
        surname: 'Михайлов',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        participant_id: 'СтаніславМихайлов19900213'
      },
      eduentity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 2,
      ratingPoints: 22,
      result_id: 'оілваіва'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Станіслав',
        surname: 'Михайлов',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        participant_id: 'СтаніславМихайлов19900213'
      },
      eduentity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 3,
      ratingPoints: 20,
      result_id: 'оілваіва'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Станіслав',
        surname: 'Михайлов',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        participant_id: 'СтаніславМихайлов19900213'
      },
      eduentity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стояння',
      place: 1,
      ratingPoints: 25,
      result_id: 'оілваіва'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Ганна',
        surname: 'Смолякова',
        DoB: new Date(2000, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        participant_id: 'ГаннаСмолякова20000213'
      },
      eduentity: {
        name: 'Київський національний університет імені Т. Г. Шевченка',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 1,
      ratingPoints: 25,
      result_id: 'vdfbdfbdfbdb'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Ганна',
        surname: 'Смолякова',
        DoB: new Date(2000, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        participant_id: 'ГаннаСмолякова20000213'
      },
      eduentity: {
        name: 'Київський національний університет імені Т. Г. Шевченка',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 1,
      ratingPoints: 25,
      result_id: 'sdfsdgldpbfmp'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Наталія',
        surname: 'Макаревич',
        DoB: new Date(2005, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        participant_id: 'НаталіяМакаревич20050213'
      },
      eduentity: {
        name: 'Національний університет фізичного виховання та спорту України',
        category: 1,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 3,
      ratingPoints: 20,
      result_id: 'сукпіи'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Наталія',
        surname: 'Макаревич',
        DoB: new Date(2005, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        participant_id: 'НаталіяМакаревич20050213'
      },
      eduentity: {
        name: 'Національний університет фізичного виховання та спорту України',
        category: 1,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 2,
      ratingPoints: 22,
      result_id: 'двіпівп'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Лілія',
        surname: 'Підкопаєва',
        DoB: new Date(2010, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        participant_id: 'ЛіліяПідкопаєва20120213'
      },
      eduentity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 2,
      ratingPoints: 22,
      result_id: 'іваіп'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHall: 'Стадіон ДЮСШ № 5',
          address: 'Центральний Парк'
        },
        organiser: 'СССУ', appointment_id: '1ww47'
      },
      participant: {
        name: 'Лілія',
        surname: 'Підкопаєва',
        DoB: new Date(1990, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        participant_id: 'ЛіліяПідкопаєва20120213'
      },
      eduentity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 3,
      ratingPoints: 20,
      result_id: 'івмівп'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        start: new Date(2021, 8, 26),
        finish: new Date(2021, 8, 30),
        duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ',
        kpkv: 2201310,
        character: 'О',
        participants: 'schoolchild',
        direction: 'sport',
        status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Запорізька обл.',
          town: 'Запоріжжа',
          sportHall: 'Юність',
          address: 'Центральний бульвар 96'
        },
        organiser: 'КФВС МОН',
        appointment_id: '1ww45'
      },
      participant: {
        name: 'Міла',
        surname: 'Йойович',
        DoB: new Date(2009, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'schoolchild',
        participant_id: 'МілаЙойович20090213'
      },
      eduentity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'дівчата',
      place: 1,
      ratingPoints: 25,
      result_id: 'івпщуикь'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        start: new Date(2021, 8, 26),
        finish: new Date(2021, 8, 30),
        duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ',
        kpkv: 2201310,
        character: 'О',
        participants: 'schoolchild',
        direction: 'sport',
        status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Запорізька обл.',
          town: 'Запоріжжа',
          sportHall: 'Юність',
          address: 'Центральний бульвар 96'
        },
        organiser: 'КФВС МОН',
        appointment_id: '1ww45'
      },
      participant: {
        name: 'Ірина',
        surname: 'Максимова',
        DoB: new Date(2009, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'schoolchild',
        participant_id: 'ІринаМаксимко20090213'
      },
      eduentity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'дівчата',
      place: 1,
      ratingPoints: 25,
      result_id: 'іваіаіва'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        start: new Date(2021, 8, 26),
        finish: new Date(2021, 8, 30),
        duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ',
        kpkv: 2201310,
        character: 'О',
        participants: 'schoolchild',
        direction: 'sport',
        status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Запорізька обл.',
          town: 'Запоріжжа',
          sportHall: 'Юність',
          address: 'Центральний бульвар 96'
        },
        organiser: 'КФВС МОН',
        appointment_id: '1ww45'
      },
      participant: {
        name: 'Людмила',
        surname: 'Попович',
        DoB: new Date(2009, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'schoolchild',
        participant_id: 'ЛюдмилаПопович20090213'
      },
      eduentity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'дівчата',
      place: 1,
      ratingPoints: 25,
      result_id: 'івпщуикь'
    },
    {
      appointment: {
        title: 'ІІІ Всеукраїнські Cool Games',
        start: new Date(2021, 4, 27),
        finish: new Date(2021, 4, 30),
        duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ',
        kpkv: 2201310,
        character: 'О',
        participants: 'schoolchild',
        direction: 'physical culture',
        status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Київ',
          town: 'Київ',
          sportHall: 'Меридіан-Венето',
          address: 'бул. Героїв Севастополя, 11В'
        },
        organiser: 'КФВС МОН',
        appointment_id: '1ww20'
      },
      participant: {
        name: 'Людмила',
        surname: 'Попович',
        DoB: new Date(2009, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'schoolchild',
        participant_id: 'ЛюдмилаПопович20090213'
      },
      eduentity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'ІІІ віковий дивізіон',
      place: 1,
      ratingPoints: 25,
      result_id: 'іваівпмуеик'
    },
    {
      appointment: {
        title: 'ІІІ Всеукраїнські Cool Games',
        start: new Date(2021, 4, 27),
        finish: new Date(2021, 4, 30),
        duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ',
        kpkv: 2201310,
        character: 'О',
        participants: 'schoolchild',
        direction: 'physical culture',
        status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Київ',
          town: 'Київ',
          sportHall: 'Меридіан-Венето',
          address: 'бул. Героїв Севастополя, 11В'
        },
        organiser: 'КФВС МОН',
        appointment_id: '1ww20'
      },
      participant: {
        name: 'Олександр',
        surname: 'Попович',
        DoB: new Date(2009, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'schoolchild',
        participant_id: 'ОлександрПопович20090213'
      },
      eduentity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'ІІІ віковий дивізіон',
      place: 1,
      ratingPoints: 25,
      result_id: 'іваівпмуеик'
    },
    {
      appointment: {
        title: 'ІІІ Всеукраїнські Cool Games',
        start: new Date(2021, 4, 27),
        finish: new Date(2021, 4, 30),
        duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ',
        kpkv: 2201310,
        character: 'О',
        participants: 'schoolchild',
        direction: 'physical culture',
        status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Київ',
          town: 'Київ',
          sportHall: 'Меридіан-Венето',
          address: 'бул. Героїв Севастополя, 11В'
        },
        organiser: 'КФВС МОН',
        appointment_id: '1ww20'
      },
      participant: {
        name: 'Олексій',
        surname: 'Попович',
        DoB: new Date(2009, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'schoolchild',
        participant_id: 'ЛюдмилаПопович20090213'
      },
      eduentity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'ІІІ віковий дивізіон',
      place: 1,
      ratingPoints: 25,
      result_id: 'іваівпмуеик'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        start: new Date(2021, 8, 26),
        finish: new Date(2021, 8, 30),
        duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ',
        kpkv: 2201310,
        character: 'О',
        participants: 'schoolchild',
        direction: 'sport',
        status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Запорізька обл.',
          town: 'Запоріжжа',
          sportHall: 'Юність',
          address: 'Центральний бульвар 96'
        },
        organiser: 'КФВС МОН',
        appointment_id: '1ww45'
      },
      participant: {
        name: 'Андрій',
        surname: 'Максимов',
        DoB: new Date(2009, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'schoolchild',
        participant_id: 'АндрійМаксимов20090213'
      },
      eduentity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'хлопці',
      place: 1,
      ratingPoints: 25,
      result_id: 'іваіаіва'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        start: new Date(2021, 8, 26),
        finish: new Date(2021, 8, 30),
        duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ',
        kpkv: 2201310,
        character: 'О',
        participants: 'schoolchild',
        direction: 'sport',
        status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Запорізька обл.',
          town: 'Запоріжжа',
          sportHall: 'Юність',
          address: 'Центральний бульвар 96'
        },
        organiser: 'КФВС МОН',
        appointment_id: '1ww45'
      },
      participant: {
        name: 'Констянтин',
        surname: 'Смирнов',
        DoB: new Date(2009, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'schoolchild',
        participant_id: 'КОнтантинСмирнов20090213'
      },
      eduentity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'хлопці',
      place: 1,
      ratingPoints: 25,
      result_id: 'іваіаіва'
    }
  ];
}
