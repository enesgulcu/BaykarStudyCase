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
  const [groupData, setGroupData] = useState([]);
  const [editIndex, setEditIndex] = useState([]);

  const pagination = (purecess) => {
    if (purecess === "next" && paginationEned < filterData.length) {
      setPaginationStart(paginationStart + 10);
      setPaginationEned(paginationEned + 10);
    } else if (purecess === "prev" && paginationStart > 0) {
      setPaginationStart(paginationStart - 10);
      setPaginationEned(paginationEned - 10);
    }
  };

  const edit = (e, selectIndex) => {
    filterData?.map((item, index) => {
      if (index === selectIndex) {
        setEditIndex({
          name: item.name.common,
          capital: item.capital,
          flags: item.flags.png,
          population: item.population,
          region: item.region,
          borders: item.borders,
          maps:item.maps.googleMaps

        })
      }
    });
    
  }


  const group = () => {
    let selectedCheckBox = [...document.querySelectorAll('input[type="checkbox"]:checked')].map((item) => item.value);
    setGroupData(selectedCheckBox);

    const results = allData.filter((item) => {
      return selectedCheckBox.includes(item.name.common);
    });
    setFilterData(results);
    setPaginationStart(0);
    setPaginationEned(10);

  }

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
       <span className="tex-fourth p-2 m-2 bg-red-600 mx-auto rounded-xl font-bold  text-fourth">
        <p className="text-[1.3rem]">1- Tüm verileri API den çekmek istiyorsanız lütfen sayfayı yenileyin.</p>
        <p className="text-[1.3rem]">2- Arama- guruplama - sayfalamaya göre csv alınmaktadır.</p>
        <p className="text-[1.3rem]">3- Listelenen verilerin üzerine tıkladığınızda detaylar gözükmektedir.</p>
        <p className="text-[1.3rem]">4- Düzenle butonuna basarak düzenleme penceresine ulaşabilir ve verileri güncelleyebilirsiniz.</p>
        <p className="text-[1.3rem]">5- Güncelleme yaptıktan sonra arama bölümünden ülke ismine göre aratarak güncel veriye ulaşabilirsiniz. </p>
        </span>
      
      <div className="w-full flex justify-center gap-10 items-center m-4 flex-wrap">
      <button className='mt-2 p-0 w-80 h-10 text-[1.2rem] rounded' onClick={
        () => {
          setFilterData(allData);
          setSearch('');
          setGroupData([]);        
          setPaginationStart(0);
          setPaginationEned(10);
        }
      }>
        Tabloyu Sıfırla
      </button>
        <button onClick={
          () => pagination("prev")
        } className='mt-2 p-0 w-40 h-10 text-[1.2rem] rounded'>{`önceki sayfa`}</button>
        <button onClick={
          () => pagination("next")
        } className='mt-2 p-0 w-40 h-10 text-[1.2rem] rounded'>{`sonraki sayfa`
        }</button>
    <button className='mt-2 p-0 w-80 h-10 text-[1.2rem] rounded' onClick={
      () => group()
    }
    >Seçilmiş gurup elemanlarını listele</button>
    <CsvDownloadButton data={filterData} className='mt-2 p-0  w-40 h-10 text-[1.2rem] rounded' 
    filename='data.csv'
     >CSV Download</CsvDownloadButton>
     </div>
    <input
        type="search"
        value={search}
        onChange={filter}
        className="w-[60vw] px-4 py-4 mx-auto my-4 bg-fourt text-xl border rounded-md shadow-sm ring-white focus:outline-none ring-1 focus:ring-2 focus:ring-third focus:border-transparent"
        placeholder="Ülke İsmine Göre Arayınız..."
      />
      <div id="editable" style={{display:"none"}} className="gap-4 justify-center items-center m-2 p-2 bg-third rounded-xl w-full flex-wrap mx-auto">
        <input  id="editable_name" type="text" className=" px-4 py-4 mx-auto my-4 bg-second text-xl border rounded-md shadow-sm ring-white focus:outline-none ring-1 focus:ring-2 focus:ring-third focus:border-transparent"
        placeholder={editIndex.name} />
        <input id="editable_capital" type="text" className=" px-4 py-4 mx-auto my-4 bg-second text-xl border rounded-md shadow-sm ring-white focus:outline-none ring-1 focus:ring-2 focus:ring-third focus:border-transparent"
        placeholder={editIndex.capital}/>
        <input id="editable_population" type="text" className=" px-4 py-4 mx-auto my-4 bg-second text-xl border rounded-md shadow-sm ring-white focus:outline-none ring-1 focus:ring-2 focus:ring-third focus:border-transparent"
        placeholder={editIndex.population}/>
        <input id="editable_region" type="text" className=" px-4 py-4 mx-auto my-4 bg-second text-xl border rounded-md shadow-sm ring-white focus:outline-none ring-1 focus:ring-2 focus:ring-third focus:border-transparent"
        placeholder={editIndex.region}/>
        <input id="editable_borders" type="text" className=" px-4 py-4 mx-auto my-4 bg-second text-xl border rounded-md shadow-sm ring-white focus:outline-none ring-1 focus:ring-2 focus:ring-third focus:border-transparent"
        placeholder={editIndex.borders}/>
        
        <button className="my-2 p-0 w-40 h-20 text-[1.4rem] rounded bg-black text-fourth" onClick={
          () =>{ 
            
              const editable = document.getElementById("editable");
              editable.style.display = "none";
              
              const name = document.getElementById("editable_name").value;
              const capital = document.getElementById("editable_capital").value;
              const population = document.getElementById("editable_population").value;
              const region = document.getElementById("editable_region").value;
              const borders = document.getElementById("editable_borders").value;
              const flags = editIndex.flags;
              const maps = editIndex.maps;
              
              const data = {
                name: {
                  common: name
                },
                flags:{
                  png: flags
                },
                maps:{
                  googleMaps: maps
                },
                capital: [capital],
                population: population,
                region: region,
                borders: [borders]
              }
              if(name != "" && name != null && name != undefined){

            setAllData((current) =>
                  current.filter(
                    (item) => item.name.common != editIndex.name
                  )
                );
                    console.log(allData)
                    setAllData((current) => [...current, data]);
                    setFilterData((current) =>
                  current.filter(
                    (item) => item.name.common != editIndex.name
                  )
                );
              }
              else{
                alert("Ülke İsmi Boş Bırakılamaz!")
              }                
            }

            
          }>Güncelle</button>
          <button className="my-2 p-0 w-40 h-20 text-[1.4rem] rounded bg-black text-fourth" onClick={
          () =>{ 
            
              const editable = document.getElementById("editable");
              editable.style.display = "none";
              
            setAllData((current) =>
                  current.filter(
                    (item) => item.name.common != editIndex.name
                  )
                );
                  setFilterData((current) =>
                  current.filter(
                    (item) => item.name.common != editIndex.name
                  )
                );

                              
            }

            
          }>Seçili Veriyi Sil</button>
      </div>
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
              <div className="flex gap-10 justify-center items-center">
              <input value={item.name.common} type="checkbox" onChange={(e)=> setGroupData([...groupData, e.target.value])}/>
              <button  style={{display:"block"}} className="mt-2 p-0 w-20 h-10 text-[1.2rem] text-third bg-first rounded cursor-help" 
              onClick={(e)=>{
                edit(e, index);
                document.getElementById("editable").style.display = "flex";

              }}
              >Düzenle</button>
              </div>
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
    </div>
    </div>
  );
}
