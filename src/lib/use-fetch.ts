import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

const useFetch = (url: string, options: AxiosRequestConfig = {}) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = () => {
      axios(url, options)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err: AxiosError) => setError(err.message));
    };
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { response, error };
};

export default useFetch;
