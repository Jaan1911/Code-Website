import { HeaderNavegation, NavegationMobile, } from "./style"
import { Main } from "../Main"


import openIMG from '../../assets/menu.svg'
import closeIMG from '../../assets/close.svg'
import logoimg from '../../assets/logo.svg'
import { useState } from "react"
import anicarelogo from '../../assets/logoanicare.jpeg'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [menuIMG, setMenuIMG] = useState(openIMG)
  const [animation, setAnimation] = useState('')

  function handleOpenMenu() {
    if (isOpen) {
      setAnimation('animate__animated animate__fadeOutUp')
      setIsOpen(false)
      setMenuIMG(openIMG)
    } else {
      setAnimation('animate__animated animate__fadeInDown')
      setIsOpen(true)
      setMenuIMG(closeIMG)
    }
  }

  return (
    <>

      <NavegationMobile
        isOpen={isOpen}
      >
        <div className="logo">
          <a href="">fadeOut
            <img src={logoimg} alt="logo" /> hi
          </a>
          <button onClick={handleOpenMenu}>
            <img src={menuIMG} alt="menu" />
          </button>
        </div>

          <nav className={animation}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#galery">Gallery</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#book">Book Appointment</a></li>
            </ul>
          </nav>

      </NavegationMobile>

      <HeaderNavegation>
        <nav>
          <a href="">
            <img src={anicarelogo} alt="logo" />
         
          </a>


          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#galery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#book">Book Appointment</a></li>
          </ul>
        </nav>
        <Main />
      </HeaderNavegation>
    </>
  )
} 
