import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

const useFetch = (url: string, options: AxiosRequestConfig = {}) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      await axios(url, options)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err: AxiosError) => setError(err.message));
      setFetching(false);
    };
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { response, error, fetching };
};

export default useFetch;
