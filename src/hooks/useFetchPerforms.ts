import { useFetch } from 'usehooks-ts';

import Perform from '../types/Perform';

const url = `${process.env.REACT_APP_URL}/timetable`;

type Performs = {
  performs: Perform[];
}

export default function useFetchPerforms() {
  return useFetch<Performs>(url);
}
