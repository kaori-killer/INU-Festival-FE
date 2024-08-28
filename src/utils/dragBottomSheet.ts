export default function dragBottomSheet() {
  const bottomSheet = document.querySelector('.bottom-sheet') as HTMLElement;
  const handle = document.querySelector('.handle');

  if (!bottomSheet) {
    return;
  }

  let startY: number;
  let startHeight: number;
  let isDragging = false;
  document.body.style.cursor = 'grab';

  // 스냅 포인트 정의
  const snapPoints = [150, 400, window.innerHeight];

  const onDragStart = (clientY: number) => {
    isDragging = true;
    startY = clientY;
    startHeight = bottomSheet.getBoundingClientRect().height;
    document.body.style.cursor = 'grabbing';

    // 드래그 중에는 transition을 비활성화하여 부드러운 이동 방지
    bottomSheet.style.transition = 'none';
  };

  const onDragMove = (clientY: number) => {
    if (!isDragging) return;
    const deltaY = startY - clientY;
    let newHeight = startHeight + deltaY;

    // 새로운 높이가 스냅 포인트 범위를 벗어나지 않도록 제한
    if (newHeight < snapPoints[0]) newHeight = snapPoints[0];
    if (newHeight > snapPoints[2]) newHeight = snapPoints[2];

    bottomSheet.style.height = `${newHeight}px`;
  };

  const onDragEnd = () => {
    isDragging = false;
    document.body.style.cursor = 'grab';

    // 드래그가 끝나면 transition을 다시 활성화
    bottomSheet.style.transition = 'height 0.3s ease';

    const currentHeight = bottomSheet.getBoundingClientRect().height;
    let targetSnapPoint;

    // 슬라이드를 아래로 내렸을 경우
    if (currentHeight < startHeight) {
      targetSnapPoint = [...snapPoints].reverse().find(
        (point) => point <= currentHeight,
      ) || snapPoints[0];
    }
    // 슬라이드를 위로 올렸을 경우
    else {
      targetSnapPoint = snapPoints.find(
        (point) => point >= currentHeight,
      ) || snapPoints[snapPoints.length - 1];
    }

    // 가장 가까운 스냅 포인트로 height 설정
    bottomSheet.style.height = `${targetSnapPoint}px`;
  };

  // 마우스 이벤트 핸들러
  handle?.addEventListener('mousedown', (e) => onDragStart(e.clientY));
  document.addEventListener('mousemove', (e) => onDragMove(e.clientY));
  document.addEventListener('mouseup', onDragEnd);

  // 터치 이벤트 핸들러 (모바일 지원)
  handle?.addEventListener('touchstart', (e) => onDragStart(e.touches[0].clientY));
  document.addEventListener('touchmove', (e) => onDragMove(e.touches[0].clientY));
  document.addEventListener('touchend', onDragEnd);
}
