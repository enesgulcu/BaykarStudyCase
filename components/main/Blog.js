import styles from '../../styles/Blog.module.css'
import pagination from '../functions/pagination';
import { useState} from 'react';

export default function Blog() {

  const [paginationValue, setPaginationValue] = useState(0)



  return (
    <div className={styles.blog}>
      <div className={styles.blog__topbar}>
      <div className={styles.blog__topbar__label}>
        <h2>Blog from insights</h2>
        <button>See All</button>
      </div>               
      </div>
      <div className={styles.blog__underbar}>
        <div style={{transform: `translateX(-${paginationValue}px)`}} className={styles.blog__underbar_card}>
          <img  src="/blog1.png" alt="project1" />
          <span className={styles.blog__ticket}>TECHNOLOGY</span>
          <p>
            John Doe • 19 Jan 2022
          </p>
          <h4>A small business is only as good as its tools and it is totally true.</h4>
          <button className='whiteButton'>Read More
          <img src="VectorWhite.svg" alt="blogArrow" />
          </button>
        </div>

        <div style={{transform: `translateX(-${paginationValue}px)`}} className={styles.blog__underbar_card}>
        <img src="/blog2.png" alt="project2" />
        <span className={styles.blog__ticket} >WEBINER</span>
          <p>
            John Doe • 19 Jan 2022
          </p>
          <h4>Colaboration with team members that will be grow to business.</h4>
          <button className='whiteButton'>Read More
          <img src="VectorWhite.svg" alt="blogArrow" />
          </button>
        </div>      
      </div>
      <div className="pagination md:hidden">
      
          <div
          style={{backgroundColor: `${paginationValue==575*0 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=575*0 && setPaginationValue(()=> pagination('project', 0))} 
          className="pagination__button">
          </div>

          <div
          style={{backgroundColor: `${paginationValue==575*1 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=575*1 &&setPaginationValue(()=> pagination('project', 1))} 
          className="pagination__button" >
          </div>

          <div
          style={{backgroundColor: `${paginationValue==575*2 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=575*2 &&setPaginationValue(()=> pagination('project', 2))} 
          className="pagination__button" >
          </div>

      </div>

    </div>
  )
}