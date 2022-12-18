import styles from '../../styles/ClientsComments.module.css'
import pagination from '../functions/pagination';
import { useState} from 'react';

export default function ClientsComments() {

  const [paginationValue, setPaginationValue] = useState(0)



  return (
    <div className={styles.clientscomments}>
      <div className={styles.clientscomments__topbar}>
      <div className={styles.clientscomments__topbar__label}>
      <h2>What say happy clients</h2>
        <button>See All</button>
      </div>        
      </div>
      <div className={styles.clientscomments__underbar}>
        <div style={{transform: `translateX(-${paginationValue}px)`}} className={styles.clientscomments__underbar_card}>
          <img className={styles.clientscomments__icon} src="/commentIcon.png" alt="commentIcon" />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.
          </p>
          <div className={styles.underbar__userInfo}>
            <div className={styles.userInfo__leftSide}>
              <img src="/Client1.png" alt="client1" />
              <div>
                <h5>Brooklyn Simmons</h5>
                <h6>Pendron.Inc, CEO</h6>
              </div>
            </div>            
            <div className={styles.userInfo__rightSide}>
              <img src="commentStar.svg" alt="star" />
              <img src="commentStar.svg" alt="star" />
              <img src="commentStar.svg" alt="star" />
              <img src="commentStar.svg" alt="star" />
              <img src="commentStar.svg" alt="star" />
            </div>
            <img className='hidden xl:inline-block absolute left-[-2.3rem] top-[40%]' src="/commenSlideArrow.svg" alt="commenSlideArrow" />
          </div>
        </div> 
        <div style={{transform: `translateX(-${paginationValue}px)`}} className={styles.clientscomments__underbar_card}>
          <img className={styles.clientscomments__icon} src="/commentIcon.png" alt="commentIcon" />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.
          </p>
          <div className={styles.underbar__userInfo}>
            <div className={styles.userInfo__leftSide}>
              <img src="/Client2.png" alt="client1" />
              <div>
                <h5>Jenny Wilson</h5>
                <h6>Bettero.Inc, CEO</h6>
              </div>
            </div>            
            <div className={styles.userInfo__rightSide}>
              <img src="commentStar.svg" alt="star" />
              <img src="commentStar.svg" alt="star" />
              <img src="commentStar.svg" alt="star" />
              <img src="commentStar.svg" alt="star" />
              <img src="commentStar.svg" alt="star" />
            </div>
          </div>
        </div>      
      </div>
      <div className="pagination md:hidden">
      
          <div
          style={{backgroundColor: `${paginationValue==575*0 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=575*0 && setPaginationValue(()=> pagination('comment', 0))} 
          className="pagination__button" >
          </div>

          <div
          style={{backgroundColor: `${paginationValue==575*1 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=575*1 &&setPaginationValue(()=> pagination('comment', 1))} 
          className="pagination__button" >
          </div>

          <div
          style={{backgroundColor: `${paginationValue==575*2 ? "#FFC93E" : "white"}`}}
          onClick={()=> paginationValue!=575*2 &&setPaginationValue(()=> pagination('comment', 2))} 
          className="pagination__button" >
          </div>

      </div>
    </div>
  )
}