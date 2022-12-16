import styles from '../../styles/HeroSection.module.css'

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.banner__card}>
        <img src="/Heading1.svg" alt="banner"/>
        <div className={styles.banner__info}>
          <p>Full-service design support that growing B2B companies need. World leading agency.</p>
          <button>
            Our Projects
          </button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="/HeroImage.png" alt="HeroImage" />
      </div>
      <div className={styles.heroSideImage}>
      <img src="/HeroSideImage.png" alt="HeroSideImage" />
      </div>

    </div>
  )
}