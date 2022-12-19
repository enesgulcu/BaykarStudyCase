import styles from "../styles/Dashboard.module.css";

import { useEffect, useState } from "react";
import axios from "axios";
export default function Dashboard() {
  const [allData, setAllData] = useState();
  const [paginationStart, setPaginationStart] = useState(0);
  const [paginationEned, setPaginationEned] = useState(10);

  const pagination = (purecess) => {
    if (purecess === "next" && paginationEned < allData.length) {
      setPaginationStart(paginationStart + 10);
      setPaginationEned(paginationEned + 10);
    } else if (purecess === "prev" && paginationStart > 0) {
      setPaginationStart(paginationStart - 10);
      setPaginationEned(paginationEned - 10);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/countries").then((response) => {
      console.log(response.data);
      setAllData(response.data);
    });
  }, []);

  return (
    <div className={styles.table}>
      <div className={styles.table__details}>
      <div className={styles.table__title}>
        <ul className={styles.table__title__row}>
          <li>Sıralama</li>
          <li>Ülke</li>
          <li>Başkent</li>
          <li>Bayrak</li>
          <li>Nüfus</li>
        </ul>
      </div>
        {allData &&
          allData.map(
            (data, index) =>
              index > paginationStart &&
              index < paginationEned && (
                <ul key={index} className={styles.table__details__row}>
                  <li>{index}</li>
                  <li>
                    {data.name.common.slice(0, 15)}
                    {data.name.common.length > 15 && "..."}{" "}
                  </li>
                  <li>{data.capital}</li>
                  <li>
                    <img width={30} src={data.flags.png} alt="flag" />
                  </li>
                  <li>{data.population}</li>
                </ul>
              )
        )}
      </div>

      <div className={styles.underbar}>
        <button onClick={() => pagination("prev")}>Önceki</button>
        <button onClick={() => pagination("next")}>Sonraki</button>
      </div>
    </div>
  );
}
