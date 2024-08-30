import { http, HttpResponse } from 'msw';

const booths = [
  {
    id: 1,
    name: '제3회 인영천화 영화제 (소극장)',
    category: '비주점',
    department: '',
    description: '중앙 동아리 인영천화에서 3번째 영화제를 개최합니다. 소극장에 모여 다양한 영화들을 인천대 학우들과 함께 관람할 수 있는 기회! 다양한 이벤트가 준비되어 있으니 많은 참여바랍니다!',
    time: '10:00 - 16:00',
    location: '',
    x: '33.47318353',
    y: '124.850051',
    liked: null,
    markerImage: 'markerBlue',
    boothDays: [
      {
        boothid: 31,
        id: 1,
        day: '화',
      },
    ],
    boothImgs: [],
  },
  {
    id: 2,
    name: '즐거운 보인다랜드',
    category: '비주점',
    department: '',
    description: '나 인천대생인데 내 동년배들 다 보인다한다.\r\n  ㄴ나 인천대생인데 이 말 맞다.',
    time: '10:00 - 16:00',
    location: '',
    x: '33.47378533',
    y: '124.851666',
    liked: null,
    markerImage: 'markerBlue',
    boothDays: [
      {
        boothid: 31,
        id: 2,
        day: '화',
      },
      {
        id: 99,
        day: '수',
      },
      {
        id: 196,
        day: '목',
      },
    ],
    boothImgs: [],
  },
  {
    id: 3,
    name: 'V.D.E STORE',
    category: '비주점',
    department: '',
    description: '현수막 전용 문구: 이걸 안사? 진짜 안사? 정말 안사? 이쁜데? 멋진데? 부스 홍보 내용 : 커스텀 의류, 키링, 머리띠, 악세서리 등 자체 제작한 개성 있는 패션 아이템 판매 부스.',
    time: '10:00 - 16:00',
    location: '',
    x: '33.47298015',
    y: '124.8506122',
    liked: null,
    markerImage: 'markerBlue',
    boothDays: [
      {
        id: 3,
        day: '화',
      },
      {
        id: 100,
        day: '수',
      },
      {
        id: 197,
        day: '목',
      },
    ],
    boothImgs: [],
  },
  {
    id: 4,
    name: 'T express',
    category: '비주점',
    department: '',
    description: '스프레이로 커스텀 티셔츠를 만들며 색다른 경험을 할 수 있는 패션산업학과의 부스',
    time: '10:00 - 16:00',
    location: '',
    x: '33.47389552',
    y: '124.850539',
    liked: null,
    markerImage: 'markerBlue',
    boothDays: [
      {
        id: 4,
        day: '화',
      },
      {
        id: 101,
        day: '수',
      },
    ],
    boothImgs: [],
  },
];

const boothRankingHandler = [
  http.get('http://localhost:8080/booth/ranking', () => HttpResponse.json({ booths })),
  http.get('http://localhost:8080/booth/all', () => HttpResponse.json({ booths })),
];

export default boothRankingHandler;
