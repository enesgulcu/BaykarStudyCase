import styles from '../../styles/OurSolution.module.css'

export default function OurSolition() {
  return (
    <div className={styles.ourSolution}>
    
        <div className={styles.ourSolution__leftSide}>
          <img src="/ourSolitionImage.png" alt="ourSolution"/>
        </div>
        <div className={styles.ourSolution__rightSide}>
          <div className={styles.rightSide_info}>
          <div className='flex w-full justify-start max-w-[100%] lg:max-w-[100%]'>
            <h2>Our Solution Approach</h2>
          </div>
            
            <div className={styles.rightSide_info__details}>              
              <img src="/correctIcon.svg"  alt="correct"/>             
              <div>
                <h4>Data Analysis with problem factor</h4>              
                <p>
                  Delivering the spatial expertise of the largest, most sophisticated performance marketing agencies, while providing intimate, boutique-like support.
                </p>
              </div>              
            </div>
            <div className={styles.rightSide_info__details}>              
              <img src="/correctIcon.svg" alt="correct"/>             
              <div>
                <h4>Functionality solution for users</h4>              
                <p>
                  Delivering the spatial expertise of the largest, most sophisticated performance marketing agencies.
                </p>
              </div>              
            </div>
            <div className={styles.rightSide_info__details}>              
              <img src="/correctIcon.svg" alt="correct"/>             
              <div>
                <h4>Latest technology enabled</h4>              
                <p>
                  Technology the spatial expertise of the largest, most sophisticated performance marketing agencies, while providing intimate, boutique-like support.
                </p>
              </div>              
            </div>
          </div>
        </div>
    </div>
  )
}