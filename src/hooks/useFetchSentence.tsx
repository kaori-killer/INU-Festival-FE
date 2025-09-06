import { useFetch } from 'usehooks-ts';

import Shouts from '../types/Shouts';

const url = `${process.env.REACT_APP_URL}/sentence`;

type Sentences = {
  shouts : Shouts[];
}

export default function useFetchSentence() {
  const accessToken = localStorage.getItem('accessToken') || '';

  return useFetch<Sentences>(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
