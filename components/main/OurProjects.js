import styles from '../../styles/OurProjects.module.css'
import pagination from '../functions/pagination';
import { useState} from 'react';

export default function OurProjects() {

  const [paginationValue, setPaginationValue] = useState(0)



  return (
    <div className={styles.ourprojects}>
      <div className={styles.ourprojects__topbar}>
      <div className={styles.ourprojects__topbar__label}>
        <h2>Our latest Projects</h2>
        <button>See All</button>
      </div>        
        <ul>
          <li>All</li>
          <li>UX</li>
          <li>web Design </li>
          <li>Branding</li>
          <li>Interaction</li>
        </ul>
      </div>
      <div className={styles.ourprojects__underbar}>
        <div style={{transform: `translateX(-${paginationValue}px)`}} className={styles.ourprojects__underbar_card}>
          <img src="/project1.png" alt="project1" />
          <h4>Talent.com - Logo, Full Redesign and Branding</h4>
          <p>
            Talent.com a new brand identity using their core values of optimism, transparency and approachability as inspiration. As a result, we were 
            able to create the most streamlined
          </p>
        </div>
        <div style={{transform: `translateX(-${paginationValue}px)`}} className={styles.ourprojects__underbar_card}>
        <img src="/project2.png" alt="project2" />
          <h4>Bonfire - Landing Page Design Webby Awards Nomination</h4>
          <p>
            Pretty excited to announce that we just got nominated at the Webby Awards! easy to understand and to use should be essential for every business owner who uses their website.
          </p>
        </div>      
      </div>
      <div className="pagination md:hidden">
      
          <div
          style={{backgroundColor: `${paginationValue==575*0 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=575*0 && setPaginationValue(()=> pagination('project', 0))} 
          className="pagination__button" >
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
      <button className='mt-20 hidden lg:flex'>Load More
      <img className='hidden lg:inline-block' src="/Vector.svg" alt="button_arrow" />
      </button>

    </div>
  )
}