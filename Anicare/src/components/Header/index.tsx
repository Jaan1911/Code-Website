import { HeaderNavegation, NavegationMobile } from "./style"
import { Main } from "../Main"

import openIMG from "../../assets/menu.svg"
import closeIMG from "../../assets/close.svg"
import logoimg from "../../assets/logo.svg"
import { useState } from "react"
import anicarelogo from "../../assets/logoanicare.jpeg"
import bandimage from "../../assets/bandimage.jpg"
import "../../styles/header.css"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [menuIMG, setMenuIMG] = useState(openIMG)
  const [animation, setAnimation] = useState("")

  function handleOpenMenu() {
    if (isOpen) {
      setAnimation("animate__animated animate__fadeOutUp")
      setIsOpen(false)
      setMenuIMG(openIMG)
    } else {
      setAnimation("animate__animated animate__fadeInDown")
      setIsOpen(true)
      setMenuIMG(closeIMG)
    }
  }

  return (
    <>
      <NavegationMobile isOpen={isOpen}>
        <div className="logo">
          <a href="">
            <img src={anicarelogo} alt="logo" />
          </a>
          <button onClick={handleOpenMenu}>
            <img src={menuIMG} alt="menu" />
          </button>
        </div>

        <nav className={animation}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/bookappointment">Book Appointment</a>
            </li>
            <li>
              <a href="https://vihaan007.vercel.app/maps.html">Anicare Maps</a>
            </li>
          </ul>
          <div className="bandimage">
            <img src={bandimage} alt="" />
          </div>
        </nav>
      </NavegationMobile>

      <HeaderNavegation>
        <nav>
          <a href="">
            <img src={anicarelogo} alt="logo" />
          </a>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/bookappointment">Book Appointment</a>
            </li>
            <li>
              <a href="https://vihaan007.vercel.app/maps.html">Anicare Maps</a>
            </li>
          </ul>
          <div className="bandimage">
            <img src={bandimage} alt="" />
          </div>
        </nav>
      </HeaderNavegation>
    </>
  )
}
