import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${url}?token=${token}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("something went wrong here.");
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setIspending(false);
        setError(null);
      })
      .catch((err) => {
        setIspending(false);
        setError(err.message);
      });
  }, [url]);
  return { data, ispending, error };
};

export default useFetch;
