import styles from '../styles/Home.module.css'

import Header from '../components/header/Header'

import HeroSection from '../components/main/HeroSection'
import AboutUs from '../components/main/AboutUs'
import FanFact from '../components/main/FanFact'
import OurSolition from '../components/main/OurSolition'
import OurServices from '../components/main/OurServices'
import OurProjects from '../components/main/OurProjects'
import ClientsComments from '../components/main/ClientsComments'
import Blog from '../components/main/Blog'
import Categories from '../components/main/Categories'

import Footer from '../components/footer/Footer'



export default function Home() {
  return (
    <div className={styles.home}>
      
      <header className={styles.header}>
        <Header />
      </header>

      <div className={styles.topEllipse}>
        <div>
          <img src="/Ellipse1.png" alt="Ellipse"/>
          <img className={styles.leftSideGrid} src="/Ornament69.svg" alt="Ornament69"/>
        </div>
        
        <img src="/Ellipse2.png" alt="Ellipse"/>
      </div>

      <main className={styles.main}>
        <section className={styles.main__hero}><HeroSection/></section>
        <section className={styles.main__aboutUs}><AboutUs /></section>
        <section className={styles.main__fanFact}><FanFact /></section>
        <section className={styles.main__solition}><OurSolition /></section>
        <section className={styles.main__services}><OurServices /></section>
        <section className={styles.main__projects}><OurProjects /></section>
        <section className={styles.main__clientComment}><ClientsComments /></section>
        <section className={styles.main__blog}><Blog /></section>
        <section className={styles.main__catagories}><Categories /></section>
      </main> 

      <footer className={styles.footer}>
        <Footer />
      </footer>

    </div>
  )
}
