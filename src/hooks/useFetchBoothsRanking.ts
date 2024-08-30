import { useFetch } from 'usehooks-ts';

import Booth from '../types/Booth';

// const url = `${process.env.REACT_APP_URL}/booth/ranking`;
// console.log(`${process.env.REACT_APP_URL}/booth/ranking`);
const url = 'http://localhost:8080/booth/ranking';

type Booths = {
    booths: Booth[];
}

export default function useFetchBoothsRanking() {
  return useFetch<Booths>(url);
}
