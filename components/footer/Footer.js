import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__topbar}>
          <div className={styles.footer__topbar_leftSide}>
            <div className='max-w-[45vw]'>
              <h4>Sign Up to Receive Product Updates and More</h4>
              <span className='relative '>
                <img className="absolute bottom-3 right-0 cursor-pointer" src='footerMailArrow.svg'></img>
                <input type="email" id="mail" rows="1" className="w-full px-0 text-[1.6rem] h-12  border-b border-first placeholder-first text-first bg-transparent" placeholder="youremail@gmail.com" required></input>
              </span>
            </div>
          </div>

          <div className={styles.footer__topbar_rightSide}>
            <div className='flex flex-col gap-5 justify-center items-center'>
              <h5>Office</h5>
              <p>545, Street 11, Block F</p>
              <p>California, U.S.A</p> 
            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>
              <h5>Contact</h5>
              <p>+92 302 300 3215</p>
              <p>ouraddress@email.com</p> 
            </div> 
          </div>
        </div>


        <div className={styles.footer__underbar}>
          <div>
            <p className='hidden lg:block'>2022. All Rights Reserved</p>
            <p className='lg:hidden block'>Copyright 2022. All Rights Reserved</p>
          </div>
          <div className='flex gap-10'>
            <a href="#">Terms & Conditions</a> 
            <a href="#">Privacy</a>
          </div>
          <div className={styles.footer__underbar__socialIcons}>
            <img src="/logo-twitter.svg" alt="logo-twitter" />
            <img src="/logo-facebook.svg" alt="logo-facebook" />
            <img src="/logo-dribbble.svg" alt="logo-dribbble" />
            <img src="/logo-github.svg" alt="logo-github" />
          </div>
        </div>
    </div>
  )
}