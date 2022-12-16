import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Header() {
  return (
    <>
      <img className={styles.header__logo} src="/Logo.svg" alt="logo"/>
      <nav className='hidden md:flex'>
        <ul>
          <li>
          <Link href="#">About us</Link>
          </li>
          <li>
          <Link href="#">About us</Link>
          </li>
          <li>
          <Link href="#">Our work</Link>
          </li>
          <li>
          <Link href="#">Blog</Link>
          </li>
          <li>
          <Link href="#">Say hi</Link>
          </li>
        </ul>
      </nav>
      <button>
      <img className={styles.header__menuBar} src="/three_line_header.svg" alt="menuStick" />
      </button>
       
    </>
  )
}