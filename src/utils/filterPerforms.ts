import Perform from '../types/Perform';

export default function filterPerforms(
  performs: Perform[],
  filterCategory: string,
) {
  const filteredPerforms = performs.filter((perform) => (
    perform.day === filterCategory
  ));

  filteredPerforms.sort((a: Perform, b: Perform) => {
    const firstTime = Number(a.startTime.split(':').join(''));
    const secondTime = Number(b.startTime.split(':').join(''));
    if (firstTime > secondTime) { return 1; }
    if (firstTime < secondTime) { return -1; }
    return 0;
  });

  return filteredPerforms;
}
