import styles from '../../styles/FanFact.module.css'

export default function FanFact() {
  return (
    <div className={styles.fanFact}>
      <div className={styles.fanFact__one}>
        <h2>4.8k</h2>
        <p>Job Completed</p>
      </div>
      <div className={styles.fanFact__two}>
        <h2>12+</h2>
        <p>Industry Experience</p>
      </div>
      <div className={styles.fanFact__three}>
        <h2>2.5k+</h2>
        <p>World wide clients</p>
      </div>
      <div className={styles.fanFact__four}>
        <h2>120+</h2>
        <p>Won Awards</p>
      </div>

    </div>
  )
}