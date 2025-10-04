import { useFetch } from "usehooks-ts";

import Perform from "../types/Perform";

const url = `${process.env.REACT_APP_URL}/timetable`;

type Performs = {
  perform: Perform[];
};

export default function useFetchPerforms() {
  const result = useFetch<Performs>(url);
  return result;
}
