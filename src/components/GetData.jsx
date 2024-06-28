import PropTypes from "prop-types";
import useAxios from "../hook/useAxios";
import { useEffect, useMemo } from "react";

function GetData({ query }) {
  const memoizedQuery = useMemo(() => ({ q: query }), [query]);
  const { loading, data, error, refetch } = useAxios("https://images-api.nasa.gov/search", memoizedQuery);

  useEffect(() => {
    refetch();
  }, [query, refetch]);

  if (loading) return <div><p>Loading...</p></div>;
  if (error) return <div><p>Error: {error.message}</p></div>;

  return (
    <div>
      <h1>NASA Astronomy Picture of the Day</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.data[0]?.title}</h2>
          <p>{item.data[0]?.date_created}</p>
          <img src={item.links ? item.links[0]?.href : ""} alt={item.data[0]?.title} />
          <p>{item.data[0]?.description}</p>
        </div>
      ))}
    </div>
  );
}

GetData.propTypes = {
  query: PropTypes.string.isRequired,
};

export default GetData;

// import PropTypes from "prop-types";
// import useAxios from "../hook/useAxios";
// import { useMemo } from "react";

// GetData.propTypes = {
//   query: PropTypes.string.isRequired,
// };

// function GetData({ query }) {
//   const memoizedQuery = useMemo(() => ({ q: query }), [query]);
//   const { loading, data, error } = useAxios("https://images-api.nasa.gov/search", memoizedQuery);

//   if (loading) return <div><p>Loading...</p></div>;
//   if (error) return <div><p>Error: {error.message}</p></div>;

//   return (
//     <div>
//       <h1>NASA Astronomy Picture of the Day</h1>
//       {data.map((item, index) => (
//         <div key={index}>
//           <h2>{item.data[0]?.title}</h2>
//           <p>{item.data[0]?.date_created}</p>
//           <img src={item.links ? item.links[0]?.href : ""} alt={item.data[0]?.title} />
//           <p>{item.data[0]?.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GetData;

// import { useEffect, useState } from "react";
// import axios from "axios";

// function GetData() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     axios.get("https://images-api.nasa.gov/search?q=apollo")
//       .then(res => {
//         console.log(res.data.collection.items);
//         setData(res.data.collection.items);
//       })
//       .catch(err => {
//         console.error(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div><p>Loading...</p></div>;
  
//   return (
//     <div>
//       <h1>NASA Astronomy Picture of the Day</h1>
//       {data.map((item, index) => (
//         <div key={index}>
//           <h2>{item.data[0]?.title}</h2>
//           <p>{item.data[0]?.date_created}</p>
//           <img src={item.links ? item.links[0]?.href : ""} alt={item.data[0]?.title} />
//           <p>{item.data[0]?.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GetData;
