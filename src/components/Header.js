import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MenuToggle from "./MenuToggle"
import MobileMenu from "./MobileMenu"
import styles from './Header.module.scss'

const Header = ({children}) => (
    <header className={styles.header}>
        <h1 className={styles.header__logo}><Link to="/">Grace Yang</Link></h1>
        <ul className={styles.header__navlinks}>
            <li> <Link to="/projects/"><h4>Projects </h4></Link></li>
            <li> <Link to="/diary"><h4>Diary</h4></Link> </li>
            <li> <Link to=""><h4>Contact</h4></Link> </li>
            <li> <Link to="/about"><h4>About</h4></Link> </li>
        </ul>
        {children}
        {/* <MenuToggle></MenuToggle>
        <MobileMenu></MobileMenu> */}
        <div className={styles.header__email}></div>
        
    </header>
)

export default Header; 