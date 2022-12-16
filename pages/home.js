import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <nav className={styles.header__nav}>NAVBAR</nav>
      </header>

      <main className={styles.main}>
        <section className={styles.main__hero}>Hero Section</section>
        <section className={styles.main__aboutUs}>About Us</section>
        <section className={styles.main__fanFact}>Fan Fact</section>
        <section className={styles.main__solition}>Our Solition</section>
        <section className={styles.main__services}>Our Services</section>
        <section className={styles.main__projects}>Our Projects</section>
        <section className={styles.main__clientComment}>What say happy clients</section>
        <section className={styles.main__blog}>blog</section>
        <section className={styles.main__catagories}>Categories</section>
      </main> 

      <footer className={styles.footer}>
        footer
      </footer>

    </div>
  )
}
