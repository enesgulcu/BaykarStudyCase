import styles from '../../styles/AboutUs.module.css'

export default function AboutUs() {
  return (
    <div className={styles.aboutUs} >
      <div className={styles.aboutUs__leftSide}>
        <h2>We are a creative digital agency</h2>
        <p>Dalio started with a vision for building an agency to solve the business problems of the future, and that requires a different model. We are not a branding agency that dabbles in tech, and we are not a development shop that leaves you hanging when it is time to go to market.</p>
        <p>We start with human experience and layer in technology and marketing to deliver truly integrated digital solutions. This unique set of capabilities sets us apart from other agencies and positions DIG to help you attack your goals.</p>
        <button>Contact us
        <img  src="/Vector.svg" alt="button_arrow"/>
        </button>
      </div>
      <div className={styles.aboutUs__rightSide}>
        <img src="/aboutUs.png" alt="aboutUs"/>
      </div>
    </div>
  )
}