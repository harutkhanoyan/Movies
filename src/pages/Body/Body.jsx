import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";


import styles from "./Body.module.css";

function Body() {
  const [data, setData] = useState([]);
  


  useEffect(() => {
    
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7a8799fbd79bed2bf23b7c9a880561ee&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${1}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        setData(data.results);
      })
      .catch((error) => {
        console.log("Get Tasks Request Error", error);
      });
  }, []);

  return (
    <div>
      <div className={styles.card_wrapper}>
        {data.map(({ id, ...items }) => (
          <Card key={id} {...items} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Body;
