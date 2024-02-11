export default function Kakao() {
  const { kakao } = window;

  const plan = (x: number, y: number, z: number) => {
    y = -y - 1;
    const limit = Math.ceil(3 / 2 ** z);
    const path = 'split_map/';

    if (y >= 0 && y < limit && x >= 0 && x < limit) {
      return `${path}planh${
        z}_${y}_${x}.png`;
    }
    return 'https://i1.daumcdn.net/dmaps/apis/white.png';
  };

  kakao.maps.Tileset.add(
    'PLAN',
    new kakao.maps.Tileset(512, 512, plan, '', false, 0, 2),
  );

  const node = document.getElementById('map');
  const map = new kakao.maps.Map(node, {
    projectionId: null,
    mapTypeId: kakao.maps.MapTypeId.PLAN,
    $scale: false,
    // 지도의 중심 좌표 (x, y)
    center: new kakao.maps.Coords(750, -400),
    level: 0,
  });
  const center = map.getCenter();
  const marker = new kakao.maps.Marker({
    position: center,
  });
  marker.setMap(map);

  // // 커스텀 오버레이에 표시할 내용입니다
  // // HTML 문자열 또는 Dom Element 입니다
  // const content = '<div class ="label"><span class="left"></span><button class="center">안녕</button><span class="right"></span></div>';

  // // 커스텀 오버레이가 표시될 위치입니다
  // const position = new kakao.maps.Coords(700, -700);

  // // 커스텀 오버레이를 생성합니다
  // const customOverlay = new kakao.maps.CustomOverlay({
  //   position,
  //   content,
  // });

  // // console.log(customOverlay);

  // // 커스텀 오버레이를 지도에 표시합니다
  // customOverlay.setMap(map);

  // const infowindow = new kakao.maps.InfoWindow({
  //   content: '커스텀 타일셋?',
  // });
  // infowindow.open(map, marker);
}
