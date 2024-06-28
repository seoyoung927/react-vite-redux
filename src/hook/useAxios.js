import { useState, useCallback } from "react";
import axios from "axios";

function useAxios(url, params = {}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    axios
      .get(url, { params })
      .then((res) => {
        setData(res.data.collection.items);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, params]);

  return { loading, data, error, refetch: fetchData };
}

export default useAxios;

// import { useState, useEffect } from "react";
// import axios from "axios";

// function useAxios(url, params = {}) {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(url, { params })
//       .then((res) => {
//         setData(res.data.collection.items);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [url, params]);

//   return { loading, data, error };
// }

// export default useAxios;
