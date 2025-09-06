import { useFetch } from 'usehooks-ts';

import BoothComments from '../types/BoothComment';

type BoothCommentType = {
    boothComments: BoothComments;
  };

export default function useFetchBoothComment(id: string) {
  const url = `${process.env.REACT_APP_URL}/booth/${id}/comment`;

  const { data } = useFetch<BoothCommentType>(url);

  if (!data) {
    return [];
  }

  return data.boothComments;
}
