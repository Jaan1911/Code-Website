import { Contact, Container, NewsLetter, UsefulLinks, WorkingHours } from "./style";

import logoIMG from '../../assets/logo.svg'
import phoneIMg from '../../assets/phone.svg'
import facebookIMG from '../../assets/facebook.svg'
import instagramIMG from '../../assets/instagram.svg'
import twitterIMG from '../../assets/twitter.svg'
import whatsappIMG from '../../assets/whatsapp.svg'
import arrowIMG from '../../assets/arrow-right.svg'
import anicarelogos from "../../assets/logoanicare.jpeg"
import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import "../../styles/footer.css"
export function Footer() {


     //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target)
    const EmailValue = e.target.querySelector('input[type="text"]').value
    

    axios({
      method: "post",

      url: " https://saathi-xttb.onrender.com/api/userpost",
      data: {
        email: EmailValue,
      },
    }).then(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
    toast("Thanks for subscribing our newsletter")
  }

  return (
    <Container className="footer-container">
      <Contact>
        <img src={anicarelogos} alt="logo" />

        <p>
          Anicare is India’s first tech-integrated one stop solution to cater to
          all your pet needs such as health-tracking ,integrated training model
          ,wellness, consultations, grooming and nutrition.
        </p>
      </Contact>
      <div></div>
      <NewsLetter>
        <span>Newsletter</span>
        <p>
          Be first in the queue! Get our latest news straight to your inbox.
        </p>

        <ToastContainer className="my-toast-container" autoClose={2000} />
        <div className=" top-item top-footer-fourth-div">
          <h4>Join Our Newsletter</h4>
          <form onSubmit={handleSubmit} className="example">
            <input
              className="form-class"
              type="text"
              placeholder="Your email"
              name="search"
            />
            <button>
              <img src={arrowIMG} alt="arrow" />
            </button>
          </form>
          <a href="#">
            <img src={facebookIMG} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagramIMG} alt="instagram" />
          </a>
          <a href="#">
            <img src={twitterIMG} alt="twitter" />
          </a>
          <a href="#">
            <img src={whatsappIMG} alt="whatsapp" />
          </a>
        </div>
        <div>
         
          <div>
            <span>(+91) 8529009898</span>
            <p>Facing any problem ? Call us 24/7</p>
          </div>
        </div>
      </NewsLetter>
    </Container>
  )
}