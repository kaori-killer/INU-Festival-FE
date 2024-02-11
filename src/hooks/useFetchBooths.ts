import { useFetch } from 'usehooks-ts';
import Booth from '../types/Booth';

const url = `${process.env.REACT_APP_URL}/booth/all`;

type Booths = {
    booths: Booth[];
}

export default function useFetchBooths() {
  const { data } = useFetch<Booths>(url);
  if (!data) {
    return [];
  }

  return data.booths;
}
