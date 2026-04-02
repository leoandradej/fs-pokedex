import axios from 'axios';
import { useEffect, useState } from 'react';

const useApi = (url, mapResults = (result) => result) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => setData(mapResults(response.data)))
      .catch(setError)
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, isLoading, error };
};

export { useApi };
