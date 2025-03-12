import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not retrieve the data");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setisLoading(false);
        setError(null);
      })
      .catch(() => {
        setisLoading(false);
        setError("Could not load data, Please refresh the page or check your internet connection");
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
