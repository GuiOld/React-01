import React from 'react'
import Logo from '../assets/fatecColorido.png'
import './Header.css'

const Header = () => {
  return (
    <header>
        <img src={Logo} className='logo' alt="Logo Fatec Colorido"/>
        <h1>Exercício 2 - React</h1>
    </header>
  )
}

export default Header