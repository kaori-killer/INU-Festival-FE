import { http, HttpResponse } from 'msw';

const booths = [
  {
    id: '1',
    name: '제3회 인영천화 영화제 (소극장)',
    category: '비주점',
    department: '',
    description: '중앙 동아리 인영천화에서 3번째 영화제를 개최합니다. 소극장에 모여 다양한 영화들을 인천대 학우들과 함께 관람할 수 있는 기회! 다양한 이벤트가 준비되어 있으니 많은 참여바랍니다!',
    liked: 0,
    markerImage: 'markerBlue',
    boothImgs: [],
  },
  {
    id: '2',
    name: '즐거운 보인다랜드',
    category: '비주점',
    department: '',
    description: '나 인천대생인데 내 동년배들 다 보인다한다.\r\n  ㄴ나 인천대생인데 이 말 맞다.',
    liked: 0,
    markerImage: 'markerBlue',
    boothImgs: [],
  },
  {
    id: '3',
    name: 'V.D.E STORE',
    category: '비주점',
    department: '',
    description: '현수막 전용 문구: 이걸 안사? 진짜 안사? 정말 안사? 이쁜데? 멋진데? 부스 홍보 내용 : 커스텀 의류, 키링, 머리띠, 악세서리 등 자체 제작한 개성 있는 패션 아이템 판매 부스.',
    liked: 0,
    markerImage: 'markerBlue',
    boothImgs: [],
  },
];

const boothRankingHandler = [
  http.get('https://13.125.142.74.nip.io/booth/ranking', () => HttpResponse.json({ booths })),
];

export default boothRankingHandler;
