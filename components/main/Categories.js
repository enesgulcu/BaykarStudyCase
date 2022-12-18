import styles from '../../styles/Categories.module.css'
export default function Categories() {
  return (
    <div>
      <div className={styles.catagories} >
        <div className={styles.catagories__topbar} >
          <h2>Categories</h2>
        </div>
        <div>
        <div className={styles.catagories__underbar} >
          <div className={styles.catagories__underbar__details}>
            <div>
              <img src="/catagoriOfGames.png" alt="catagoriOfGames" />
            </div>
            <div>
              <h4>Games</h4>
            </div>
            <img className={styles.catagories__underbar__leftArrow} src="/categoriesArrowLeft.svg" alt="categoriesArrowLeft" />
          </div>
          <div className={styles.catagories__underbar__details}>
            <div>
              <img src="/catagoriOfSports.png" alt="catagoriOfSports" />
            </div>
            <div>
              <h4>Sports</h4>
            </div>
          </div>
          <div className={styles.catagories__underbar__details}>
            <div>
              <img src="/catagoriOfMetaverse.png" alt="catagoriOfMetaverse" />
            </div>
            <div>
              <h4>Metaverse</h4>
            </div>
          </div>
          <div className={styles.catagories__underbar__details}>
            <div>
              <img src="/catagoriOfArt.png" alt="catagoriOfArt" />
            </div>
            <div>
              <h4>Art</h4>
            </div>
            <img className={styles.catagories__underbar__rightArrow} src="/categoriesArrowRight.svg" alt="categoriesArrowRight" />
          </div>
        </div>
      </div>
      </div>
      <div className={styles.catagories} >
        <div>
        <div className={styles.catagories__underbar} >
          <div className={styles.catagories__underbar__details}>
            <div>
              <img src="/catagoriOfGames.png" alt="catagoriOfGames" />
            </div>
            <div>
              <h4>Games</h4>
            </div>
            <img className={styles.catagories__underbar__leftArrow} src="/categoriesArrowLeft.svg" alt="categoriesArrowLeft" />
          </div>
          <div className={styles.catagories__underbar__details}>
            <div>
              <img src="/catagoriOfSports.png" alt="catagoriOfSports" />
            </div>
            <div>
              <h4>Sports</h4>
            </div>
          </div>
          <div className={styles.catagories__underbar__details}>
            <div>
              <img src="/catagoriOfMetaverse.png" alt="catagoriOfMetaverse" />
            </div>
            <div>
              <h4>Metaverse</h4>
            </div>
          </div>
          <div className={styles.catagories__underbar__details}>
            <div>
              <img src="/catagoriOfArt.png" alt="catagoriOfArt" />
            </div>
            <div>
              <h4>Art</h4>
            </div>
            <img className={styles.catagories__underbar__rightArrow} src="/categoriesArrowRight.svg" alt="categoriesArrowRight" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}