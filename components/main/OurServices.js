import styles from '../../styles/OurServices.module.css'
import pagination from '../functions/pagination';
import { useState} from 'react';

export default function OurServices() {

  const [paginationValue, setPaginationValue] = useState(0)



  return (
    <div className={styles.ourservices}>
      <div className={styles.ourservices__topbar}>
      <div>
        <h2>Service we can</h2>
        <h2>help  you</h2>
      </div>        
        <button className='whiteButton' >See All
        <img className='hidden lg:inline-block' src="/VectorWhite.svg" alt="button_arrow" />
        </button>
      </div>
      <div className={styles.ourservices__underbar}>
        <div style={{transform: `translateX(-${paginationValue}px)`}} className={`${styles.ourservices__underbar_card} xl:rounded-tl-[5rem]`}>
          <img src="/cardIcon1.svg" alt="cardIcon1" />
          <h4>Content Writing</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus.
          </p>
          <button className='whiteButton'>
          Read More
          <img  src="/VectorWhite.svg" alt="button_arrow" />
          </button>
        </div>
        <div id='rightSide' style={{transform: `translateX(-${paginationValue}px)`}} className={`${styles.ourservices__underbar_card} xl:rounded-tr-[5rem] lg:top-20`}>
          <img src="/cardIcon2.svg" alt="cardIcon2" />
          <h4>UX Research</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus.
          </p>
          <button>
          Read More
          <img  src="/Vector.svg" alt="button_arrow" />
          </button>
        </div>
        <div style={{transform: `translateX(-${paginationValue}px)`}} className={`${styles.ourservices__underbar_card} xl:rounded-bl-[5rem]`}>
          <img src="/cardIcon3.svg" alt="cardIcon3" />
          <h4>Branding</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus.
          </p>
          <button className='whiteButton'>
          Read More
          <img  src="/VectorWhite.svg" alt="button_arrow" />
          </button>
        </div>
        <div style={{transform: `translateX(-${paginationValue}px)`}}  className={`${styles.ourservices__underbar_card} xl:rounded-br-[5rem] lg:top-20`}>
          <img src="/cardIcon4.svg" alt="cardIcon4" />
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus.
          </p>
          <button className='whiteButton'>
          Read More
          <img  src="/VectorWhite.svg" alt="button_arrow" />
          </button>
        </div>        
      </div>
      <div className="pagination md:hidden">
      
          <div
          style={{backgroundColor: `${paginationValue==360*0 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=360*0 && setPaginationValue(()=> pagination('service', 0))} 
          className="pagination__button" >
          </div>

          <div
          style={{backgroundColor: `${paginationValue==360*1 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=360*1 &&setPaginationValue(()=> pagination('service', 1))} 
          className="pagination__button" >
          </div>

          <div 
          style={{backgroundColor: `${paginationValue==360*2 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=360*2 && setPaginationValue(()=> pagination('service', 2))} 
          className="pagination__button" >
          </div>

          <div 
          style={{backgroundColor: `${paginationValue==360*3 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=360*3 && setPaginationValue(()=> pagination('service', 3))} 
          className="pagination__button"></div>
        </div>

    </div>
  )
}