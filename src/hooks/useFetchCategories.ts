import { useFetch } from 'usehooks-ts';

const url = `${process.env.REACT_APP_URL}/booth/category`;

interface Categories {
    categories: {
        days: string[];
        filters: string[];
    }
}

export default function useFetchCategories() {
  const { data } = useFetch<Categories>(url);
  if (!data) {
    return [];
  }

  return data.categories;
}
