import { useFetch } from 'usehooks-ts';

import Perform from '../types/Perform';

const url = `${process.env.REACT_APP_URL}/timetable`;

type Performs = {
  performs: Perform[];
}

export default function useFetchPerforms() {
  const { data } = useFetch<Performs>(url);

  if (!data) {
    return [];
  }

  return data.performs;
}
