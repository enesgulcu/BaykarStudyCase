import styles from "../styles/Dashboard.module.css";
import CsvDownloadButton from 'react-json-to-csv'

import { useEffect, useState } from "react";
import axios from "axios";
export default function Dashboard() {
  const [allData, setAllData] = useState();
  const [filterData, setFilterData] = useState();
  const [paginationStart, setPaginationStart] = useState(0);
  const [paginationEned, setPaginationEned] = useState(10);
  const [search, setSearch] = useState('');

  const pagination = (purecess) => {
    if (purecess === "next" && paginationEned < filterData.length) {
      setPaginationStart(paginationStart + 10);
      setPaginationEned(paginationEned + 10);
    } else if (purecess === "prev" && paginationStart > 0) {
      setPaginationStart(paginationStart - 10);
      setPaginationEned(paginationEned - 10);
    }
  };

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = allData.filter((item) => {
        return item.name.common.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilterData(results);
      setPaginationStart(0);
      setPaginationEned(10);
    } else {
      setFilterData(allData);
    }

    setSearch(keyword);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/countries").then((response) => {
      setAllData(response.data);
      setFilterData(response.data);
    });
  }, []);

  return (
    <div className={styles.main}>
    <CsvDownloadButton data={filterData} className='p-0 m-4 w-40 h-10 text-[1.2rem] rounded' 
    filename='data.csv'
     >CSV Download</CsvDownloadButton>
    <div className={styles.table}>
      <div className={styles.table__head}>
      <span>Gurup Seçimi</span>
        <span>Sıralama</span>
        <span>Ülke İsmi</span>
        <span>Bayrak</span>
        <span>Başkent</span>
      </div>
      <div className="container">
      
      </div>
      {
        filterData?.map((item, index) => index+1 > 
          paginationStart && index+1 < paginationEned &&
            <div className={styles.table__body} key={index+1}
              onClick={() => {
                const details = document.getElementById(`x${index+1}`);
                if (details.style.display === "none") {
                  details.style.display = "grid";
                }                   
                else {
                  details.style.display = "none";
                }
                

              }}
              
            >
              <div className={styles.table__body__title}               
              >
              <input value={item.name.common} type="checkbox" onChange={e => console.log(e.target.value)}/>
                <span>{index+1}</span>
                <span>{item.name.common}</span>
                <span><img width={50} src={item.flags.png} alt="flag"/></span>
                <span>{item.capital}</span>
              </div>
              <div className={styles.table__body__details} id={`x${index+1}`}>
                <p>{`-`}</p>
                <p>{`Nüfus: ${item.population}`}</p>
                <p>{`Kıta: ${item.region}`}</p>
                <p><a href={item.maps.googleMaps} className='text-first text-[1.4rem] p-2 rounded-xl bg-white font-bold cursor-help'>Konum</a></p>
                <p>Sınırlar: 
                {item.borders?.map((border, index) => (
                  <span key={index}> {border} - </span>
                ))}
                </p>
                
              </div>
            </div>          
        )        
      }      
      <div className={styles.table__body}>
      </div>
      <input
        type="search"
        value={search}
        onChange={filter}
        className="w-full px-4 py-4 mt-4 bg-second text-xl border rounded-md shadow-sm ring-white focus:outline-none ring-1 focus:ring-2 focus:ring-third focus:border-transparent"
        placeholder="Ülke İsmine Göre Arayınız..."
      />
      <div className={styles.underbar}>
      
        <button onClick={() => pagination("prev")}>Önceki</button>
        <button onClick={() => pagination("next")}>Sonraki</button>
      </div>
    </div>
    </div>
  );
}
