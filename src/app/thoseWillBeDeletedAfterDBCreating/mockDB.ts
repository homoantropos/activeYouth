import {Appointment, AppointmentFinancing, Result, Report} from '../shared/interfases';

export class MockDataBase {

  constructor() {
  }

  static statistics: Array<Report> = [];

  static balance: Array<AppointmentFinancing> = [];

  static schedule: Array<Appointment> = [
    {
      title: 'Зимова Гімназіада України з лижних гонок',
      startDate: new Date(2021, 2, 16),
      finishDate: new Date(2021, 2, 28),
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
        sportHallName: 'база Тисовець',
        address: ''
      },
      organiser: 'УФУС',
      appointment_id: '1ww'
    },
    {
      title: 'Зимова Універсіада України з біатлону',
      startDate: new Date(2021, 2, 9),
      finishDate: new Date(2021, 2, 11),
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
        sportHallName: 'база Тисовець',
        address: ''
      },
      organiser: 'СССУ',
      appointment_id: '2ww'
    },
    {
      title: 'Зимова Гімназіада України з біатлону',
      startDate: new Date(2021, 2, 28),
      finishDate: new Date(2021, 2, 30),
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
        sportHallName: 'база Тисовець',
        address: ''
      },
      organiser: 'УФУС',
      appointment_id: '3ww'
    },
    {
      title: 'Зимова Універсіада України з лижних гонок',
      startDate: new Date(2021, 2, 18),
      finishDate: new Date(2021, 2, 21),
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
        sportHallName: 'база Тисовець',
        address: ''
      },
      organiser: 'СССУ',
      appointment_id: '4ww'
    },
    {
      title: 'Європейські університетські ігри з волейболу',
      startDate: new Date(2021, 6, 14),
      finishDate: new Date(2021, 6, 21),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'СССУ EUSA',
      appointment_id: '5ww'
    },
    {
      title: 'Європейські університетські ігри з регбі-7',
      startDate: new Date(2021, 6, 14),
      finishDate: new Date(2021, 6, 21),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'СССУ EUSA',
      appointment_id: '6ww'
    },
    {
      title: 'Чемпіонат України з волейболу серед учнів',
      startDate: new Date(2021, 1, 23),
      finishDate: new Date(2021, 1, 26),
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
        sportHallName: 'Олімп',
        address: 'вул. Паркова 12'
      },
      organiser: 'КФВС МОН',
      appointment_id: '7ww'
    },
    {
      title: 'Спортивна надія України з волейболу серед учнів',
      startDate: new Date(2021, 10, 23),
      finishDate: new Date(2021, 10, 26),
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
        sportHallName: 'спортивний зал ЗОШ № 8',
        address: 'вул. Весняна 12'
      },
      organiser: 'КФВС МОН',
      appointment_id: '8ww'
    },
    {
      title: 'Спортивна надія України з боксу серед учнів',
      startDate: new Date(2021, 10, 23),
      finishDate: new Date(2021, 10, 26),
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
        sportHallName: 'спортивний зал ЗОШ № 8',
        address: 'вул. Весняна 12'
      },
      organiser: 'КФВС МОН',
      appointment_id: '9ww'
    },
    {
      title: 'Спортивна надія України з боротьби вільної серед учнів',
      startDate: new Date(2021, 10, 23),
      finishDate: new Date(2021, 10, 26),
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
        sportHallName: 'спортивний зал ЗОШ № 8',
        address: 'вул. Весняна 12'
      },
      organiser: 'КФВС МОН',
      appointment_id: '10ww'
    },
    {
      title: 'Чемпіонат України з козацького двобою серед учнів',
      startDate: new Date(2021, 2, 3),
      finishDate: new Date(2021, 2, 5),
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
        sportHallName: 'легкоатлетичний манеж СумДУ',
        address: 'вул. Студентська 52'
      },
      organiser: 'КФВС МОН',
      appointment_id: '11ww'
    },
    {
      title: 'Чемпіонат України з козацького двобою серед студентів',
      startDate: new Date(2021, 2, 6),
      finishDate: new Date(2021, 2, 8),
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
        sportHallName: 'легкоатлетичний манеж СумДУ',
        address: 'вул. Студентська 52'
      },
      organiser: 'КФВС МОН',
      appointment_id: '12ww'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з волейболу (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww1'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з дзюдо (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww2'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з карате (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww3'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з легкої атлетики (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww4'
    },
    {
      title: 'Всесвітні учнівські спортивні ігри з плавання (ISF U15 World School Sport Games) (дівчата) (ІІ ранг)',
      startDate: new Date(2021, 8, 11),
      finishDate: new Date(2021, 8, 19),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww5'
    },
    {
      title: 'Літня Гімназіада України з волейболу (відбіркові)',
      startDate: new Date(2021, 3, 12),
      finishDate: new Date(2021, 2, 15),
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
        sportHallName: 'Спорткомплекс "Атлет"',
        address: 'вул. Мохова, 23'
      },
      organiser: 'УФУС',
      appointment_id: '1ww6'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww7'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww8'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww9'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww10'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games (відбіркові)',
      startDate: new Date(2021, 3, 17),
      finishDate: new Date(2021, 3, 18),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww19'
    },
    {
      title: 'ІІІ Всеукраїнські Cool Games',
      startDate: new Date(2021, 4, 27),
      finishDate: new Date(2021, 4, 30),
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
        sportHallName: 'Меридіан-Венето',
        address: 'бул. Героїв Севастополя, 11В'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww20'
    },
    {
      title: 'Літня Універсіада України з веслування академічного',
      startDate: new Date(2021, 4, 20),
      finishDate: new Date(2021, 4, 22),
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
        sportHallName: 'Гребний канал',
        address: 'Труханів острів'
      },
      organiser: 'СССУ',
      appointment_id: '1ww21'
    },
    {
      title: 'Літня Гімназіада України з тхеквондо ВТФ (відбіркові)',
      startDate: new Date(2021, 0, 20),
      finishDate: new Date(2021, 0, 23),
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
        sportHallName: 'Спорткомплекс Прикарпатського національного уніврситету',
        address: 'вул. Прикарпатська 90'
      },
      organiser: 'УФУС',
      appointment_id: '1ww223'
    },
    {
      title: 'Всесвітня літня Гімназіада з велоспорту',
      startDate: new Date(2021, 9, 14),
      finishDate: new Date(2021, 9, 21),
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
        sportHallName: '',
        address: ''
      },
      organiser: 'УФУС ISF',
      appointment_id: '1ww331'
    },
    {
      title: 'Літня Універсіада України з гандболу',
      startDate: new Date(2021, 5, 19),
      finishDate: new Date(2021, 5, 21),
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
        sportHallName: 'спорткомплекс НУХТУ',
        address: 'Дніпровська набережна 25'
      },
      organiser: 'СССУ',
      appointment_id: '1ww334'
    },
    {
      title: 'Всеукраїнські Combat Games з карате',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
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
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww40'
    },
    {
      title: 'Всеукраїнські Combat Games з боротьби греко-римської',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
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
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww41'
    },
    {
      title: 'Всеукраїнські Combat Games з тхеквондо ВТФ',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
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
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww42'
    },
    {
      title: 'Всеукраїнські Combat Games з боротьби вільної',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
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
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww43'
    },
    {
      title: 'Всеукраїнські Combat Games з дзюдо',
      startDate: new Date(2021, 11, 13),
      finishDate: new Date(2021, 11, 18),
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
        sportHallName: 'Палац Спорту',
        address: 'пл. Спортивна, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww44'
    },
    {
      title: 'Шкільна баскетбольна ліга',
      startDate: new Date(2021, 8, 26),
      finishDate: new Date(2021, 8, 30),
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
        sportHallName: 'Юність',
        address: 'Центральний бульвар 96'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww45'
    },
    {
      title: 'Чемпіонат України з фрі-файту серед учнів',
      startDate: new Date(2021, 10, 9),
      finishDate: new Date(2021, 10, 10),
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
        sportHallName: 'Палац Спорту',
        address: 'вул. Б. Хмельницького, 1'
      },
      organiser: 'КФВС МОН',
      appointment_id: '1ww46'
    },
    {
      title: 'Міжнародний день студентського спорту',
      startDate: new Date(2021, 8, 20),
      finishDate: new Date(2021, 8, 20),
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
        sportHallName: 'Стадіон ДЮСШ № 5',
        address: 'Центральний Парк'
      },
      organiser: 'СССУ',
      appointment_id: '1ww47'
    }];

  static mockResultsDataBase: Array<Result> = [
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'СергійАнтропов19900213'
      },
      eduEntity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 1,
      ratingPoints: 25,
      _id: 'dfwvrvwververg'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'СергійАнтропов19900213'
      },
      eduEntity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 1,
      ratingPoints: 25,
      _id: 'sdfsdgldpbfmp'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'ДмитроЛеонтович19900213'
      },
      eduEntity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 3,
      ratingPoints: 20,
      _id: 'івавпапваіпвап'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'ДмитроЛеонтович19900213'
      },
      eduEntity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 2,
      ratingPoints: 22,
      _id: 'dsvsldsdbsd'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'СтаніславМихайлов19900213'
      },
      eduEntity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 2,
      ratingPoints: 22,
      _id: 'оілваіва'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'СтаніславМихайлов19900213'
      },
      eduEntity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 3,
      ratingPoints: 20,
      _id: 'оілваіва'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'СтаніславМихайлов19900213'
      },
      eduEntity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стояння',
      place: 1,
      ratingPoints: 25,
      _id: 'оілваіва'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'ГаннаСмолякова20000213'
      },
      eduEntity: {
        name: 'Київський національний університет імені Т. Г. Шевченка',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 1,
      ratingPoints: 25,
      _id: 'vdfbdfbdfbdb'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'ГаннаСмолякова20000213'
      },
      eduEntity: {
        name: 'Київський національний університет імені Т. Г. Шевченка',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 1,
      ratingPoints: 25,
      _id: 'sdfsdgldpbfmp'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'НаталіяМакаревич20050213'
      },
      eduEntity: {
        name: 'Національний університет фізичного виховання та спорту України',
        category: 1,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 3,
      ratingPoints: 20,
      _id: 'сукпіи'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'НаталіяМакаревич20050213'
      },
      eduEntity: {
        name: 'Національний університет фізичного виховання та спорту України',
        category: 1,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 2,
      ratingPoints: 22,
      _id: 'двіпівп'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'ЛіліяПідкопаєва20120213'
      },
      eduEntity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'біг',
      place: 2,
      ratingPoints: 22,
      _id: 'іваіп'
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        startDate: new Date(2021, 8, 20), finishDate: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        place: {
          country: 'Україна',
          region: 'Вінницька обл.',
          town: 'Вінниця',
          sportHallName: 'Стадіон ДЮСШ № 5',
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
        _id: 'ЛіліяПідкопаєва20120213'
      },
      eduEntity: {
        name: 'Сумський державний університет',
        category: 2,
        type: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 3,
      ratingPoints: 20,
      _id: 'івмівп'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        startDate: new Date(2021, 8, 26),
        finishDate: new Date(2021, 8, 30),
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
          sportHallName: 'Юність',
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
        _id: 'МілаЙойович20090213'
      },
      eduEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'дівчата',
      place: 1,
      ratingPoints: 25,
      _id: 'івпщуикь'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        startDate: new Date(2021, 8, 26),
        finishDate: new Date(2021, 8, 30),
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
          sportHallName: 'Юність',
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
        _id: 'ІринаМаксимко20090213'
      },
      eduEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'дівчата',
      place: 1,
      ratingPoints: 25,
      _id: 'іваіаіва'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        startDate: new Date(2021, 8, 26),
        finishDate: new Date(2021, 8, 30),
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
          sportHallName: 'Юність',
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
        _id: 'ЛюдмилаПопович20090213'
      },
      eduEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'дівчата',
      place: 1,
      ratingPoints: 25,
      _id: 'івпщуикь'
    },
    {
      appointment: {
        title: 'ІІІ Всеукраїнські Cool Games',
        startDate: new Date(2021, 4, 27),
        finishDate: new Date(2021, 4, 30),
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
          sportHallName: 'Меридіан-Венето',
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
        _id: 'ЛюдмилаПопович20090213'
      },
      eduEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'ІІІ віковий дивізіон',
      place: 1,
      ratingPoints: 25,
      _id: 'іваівпмуеик'
    },
    {
      appointment: {
        title: 'ІІІ Всеукраїнські Cool Games',
        startDate: new Date(2021, 4, 27),
        finishDate: new Date(2021, 4, 30),
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
          sportHallName: 'Меридіан-Венето',
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
        _id: 'ОлександрПопович20090213'
      },
      eduEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'ІІІ віковий дивізіон',
      place: 1,
      ratingPoints: 25,
      _id: 'іваівпмуеик'
    },
    {
      appointment: {
        title: 'ІІІ Всеукраїнські Cool Games',
        startDate: new Date(2021, 4, 27),
        finishDate: new Date(2021, 4, 30),
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
          sportHallName: 'Меридіан-Венето',
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
        _id: 'ЛюдмилаПопович20090213'
      },
      eduEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'ІІІ віковий дивізіон',
      place: 1,
      ratingPoints: 25,
      _id: 'іваівпмуеик'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        startDate: new Date(2021, 8, 26),
        finishDate: new Date(2021, 8, 30),
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
          sportHallName: 'Юність',
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
        _id: 'АндрійМаксимов20090213'
      },
      eduEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'хлопці',
      place: 1,
      ratingPoints: 25,
      _id: 'іваіаіва'
    },
    {
      appointment: {
        title: 'Шкільна баскетбольна ліга',
        startDate: new Date(2021, 8, 26),
        finishDate: new Date(2021, 8, 30),
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
          sportHallName: 'Юність',
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
        _id: 'КОнтантинСмирнов20090213'
      },
      eduEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        type: 'ЗЗСО'
      },
      discipline: 'хлопці',
      place: 1,
      ratingPoints: 25,
      _id: 'іваіаіва'
    }
  ];
}
