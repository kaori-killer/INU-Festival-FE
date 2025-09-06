import { useFetch } from 'usehooks-ts';

import Notice from '../types/Notice';

const url = `${process.env.REACT_APP_URL}/notice`;

type Notices = {
    notices: Notice[];
}

export default function useFetchNotices() {
  const { data } = useFetch<Notices>(url);
  if (!data) {
    return [];
  }
  return data.notices;
}
