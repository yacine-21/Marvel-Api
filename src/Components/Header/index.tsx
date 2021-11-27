import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import styles from "./index.module.css"


function Header() {
    return (
        <header className={styles.header}>
            <img src='/images/marvel.png' className={styles.logo} alt="logo" />
            <nav className={styles.nav}>
                <Link to='/'>
                <Button variant="contained">Home</Button>
                </Link>
                <Link to='/about'>
                <Button variant="contained">About</Button>
                </Link>
                <Link to='/contact'>
                <Button variant="contained">Contact</Button>
                </Link>
            </nav>
        </header>
    )
}

export default Header
