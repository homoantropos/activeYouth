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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'СССУ'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'СССУ'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'СССУ EUSA'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'СССУ EUSA'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС ISF'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС ISF'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС ISF'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС ISF'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС ISF'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'СССУ'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'УФУС ISF'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'СССУ'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'КФВС МОН'
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
      appointmentPlace: {
        appointmentPlaceName: '',
        country: {countryName: 'Україна'},
        region: {regionName: 'Львівська обл.', regionGroup: 2},
        town: {townName: 'Сколе'},
        address: ''
      },
      organiser: 'СССУ'
    }];

  static mockResultsDataBase: Array<Result> = [
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Сергій',
        surname: 'Антропов',
        fathersName: 'Анатолійович',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        id: 101
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'біг',
      place: 1,
      ratingPoints: 25,
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Сергій',
        surname: 'Антропов',
        fathersName: 'Анатолійович',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        id: 102
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 1,
      ratingPoints: 25
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Дмитро',
        surname: 'Леонтович',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        id: 103
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'біг',
      place: 3,
      ratingPoints: 20
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Дмитро',
        surname: 'Леонтович',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        id: 104
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Київський інститут інженерів цивільної авіації',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 2,
      ratingPoints: 22
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Станіслав',
        surname: 'Михайлов',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        id: 105
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Сумський державний університет',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'біг',
      place: 2,
      ratingPoints: 22
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Станіслав',
        surname: 'Михайлов',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        id: 106
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Сумський державний університет',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 3,
      ratingPoints: 20
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Станіслав',
        surname: 'Михайлов',
        DoB: new Date(1990, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'students',
        id: 107
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Сумський державний університет',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'стояння',
      place: 1,
      ratingPoints: 25
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Ганна',
        surname: 'Смолякова',
        DoB: new Date(2000, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        id: 108
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Київський національний університет імені Т. Г. Шевченка',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'біг',
      place: 1,
      ratingPoints: 25
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Ганна',
        surname: 'Смолякова',
        DoB: new Date(2000, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        id: 109
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Київський національний університет імені Т. Г. Шевченка',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 1,
      ratingPoints: 25
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Наталія',
        surname: 'Макаревич',
        DoB: new Date(2005, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        id: 110
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Національний університет фізичного виховання та спорту України',
        category: 1,
        eduEntityType: 'ЗВО'
      },
      discipline: 'біг',
      place: 3,
      ratingPoints: 20
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Наталія',
        surname: 'Макаревич',
        DoB: new Date(2005, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        id: 111
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Національний університет фізичного виховання та спорту України',
        category: 1,
        eduEntityType: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 2,
      ratingPoints: 22
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Лілія',
        surname: 'Підкопаєва',
        DoB: new Date(2010, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        id: 112
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Сумський державний університет',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'біг',
      place: 2,
      ratingPoints: 22
    },
    {
      appointment: {
        title: 'Міжнародний день студентського спорту',
        start: new Date(2021, 8, 20), finish: new Date(2021, 8, 20), duration: 3,
        organizationsParticipants: 'збірні областей і міста Київ', kpkv: 2201310, character: 'О', participants: 'students',
        direction: 'physical culture', status: 'ukrainian',
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'СССУ'
      },
      participant: {
        name: 'Лілія',
        surname: 'Підкопаєва',
        DoB: new Date(1990, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'students',
        id: 113
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Сумський державний університет',
        category: 2,
        eduEntityType: 'ЗВО'
      },
      discipline: 'стрибки',
      place: 3,
      ratingPoints: 20
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
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'КФВС МОН'
      },
      participant: {
        name: 'Міла',
        surname: 'Йойович',
        DoB: new Date(2009, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'schoolchild',
        id: 114
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        eduEntityType: 'ЗЗСО'
      },
      discipline: 'дівчата',
      place: 1,
      ratingPoints: 25
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
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'КФВС МОН'
      },
      participant: {
        name: 'Ірина',
        surname: 'Максимова',
        DoB: new Date(2009, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'schoolchild',
        id: 115
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        eduEntityType: 'ЗЗСО'
      },
      discipline: 'дівчата',
      place: 1,
      ratingPoints: 25
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
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'КФВС МОН'
      },
      participant: {
        name: 'Людмила',
        surname: 'Попович',
        DoB: new Date(2009, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'schoolchild',
        id: 116
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        eduEntityType: 'ЗЗСО'
      },
      discipline: 'дівчата',
      place: 1,
      ratingPoints: 25
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
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'КФВС МОН'
      },
      participant: {
        name: 'Людмила',
        surname: 'Попович',
        DoB: new Date(2009, 2, 13),
        gender: 'female',
        schoolchildOrStudent: 'schoolchild',
        id: 117
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        eduEntityType: 'ЗЗСО'
      },
      discipline: 'ІІІ віковий дивізіон',
      place: 1,
      ratingPoints: 25
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
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'КФВС МОН'
      },
      participant: {
        name: 'Олександр',
        surname: 'Попович',
        DoB: new Date(2009, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'schoolchild',
        id: 118
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        eduEntityType: 'ЗЗСО'
      },
      discipline: 'ІІІ віковий дивізіон',
      place: 1,
      ratingPoints: 25
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
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'КФВС МОН'
      },
      participant: {
        name: 'Олексій',
        surname: 'Попович',
        DoB: new Date(2009, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'schoolchild',
        id: 119
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        eduEntityType: 'ЗЗСО'
      },
      discipline: 'ІІІ віковий дивізіон',
      place: 1,
      ratingPoints: 25
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
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'КФВС МОН'
      },
      participant: {
        name: 'Андрій',
        surname: 'Максимов',
        DoB: new Date(2009, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'schoolchild',
        id: 120
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        eduEntityType: 'ЗЗСО'
      },
      discipline: 'хлопці',
      place: 1,
      ratingPoints: 25
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
        appointmentPlace: {
          appointmentPlaceName: '',
          country: {countryName: 'Україна'},
          region: {regionName: 'Львівська обл.', regionGroup: 2},
          town: {townName: 'Сколе'},
          address: ''
        },
        organiser: 'КФВС МОН'
      },
      participant: {
        name: 'Констянтин',
        surname: 'Смирнов',
        DoB: new Date(2009, 2, 13),
        gender: 'male',
        schoolchildOrStudent: 'schoolchild',
        id: 121
      },
      coach: {
        name: 'Старовойт',
        surname: 'Андрій',
        fathersName: 'Петрович'
      },
      region: {
        regionName: 'Київ', regionGroup: 1
      },
      completed: true,
      educationEntity: {
        name: 'Загальноосвітня школа №4 міста Запоріжжа',
        eduEntityType: 'ЗЗСО'
      },
      discipline: 'хлопці',
      place: 1,
      ratingPoints: 25
    }
  ];
}
