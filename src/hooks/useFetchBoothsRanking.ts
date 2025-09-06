import { useFetch } from 'usehooks-ts';

import Booth from '../types/Booth';

const url = `${process.env.REACT_APP_URL}/booth/ranking`;

type Booths = {
    booths: Booth[];
}

export default function useFetchBoothsRanking() {
  return useFetch<Booths>(url);
}
