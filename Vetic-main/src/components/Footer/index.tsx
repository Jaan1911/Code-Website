import { Contact, Container, NewsLetter, UsefulLinks, WorkingHours } from "./style";

import logoIMG from '../../assets/logo.svg'
import phoneIMg from '../../assets/phone.svg'
import facebookIMG from '../../assets/facebook.svg'
import instagramIMG from '../../assets/instagram.svg'
import twitterIMG from '../../assets/twitter.svg'
import whatsappIMG from '../../assets/whatsapp.svg'
import arrowIMG from '../../assets/arrow-right.svg'
import anicarelogos from "../../assets/logoanicare.jpeg"

export function Footer() {
  return (
    <Container>
      <Contact>
        <img src={anicarelogos} alt="logo" />

        <p>
          Anicare is India’s first tech-integrated one stop solution to cater to
          all your pet needs such as health-tracking ,integrated training model
          ,wellness, consultations, grooming and nutrition.
        </p>

        <div>
          <img src={phoneIMg} alt="phone" />
          <div>
            <span>(+91) 8529009898</span>
            <p>Facing  any problem ? Call us 24/7</p>
          </div>
        </div>
      </Contact>

     
    

      <NewsLetter>
        <span>Newsletter</span>
        <p>
          Be first in the queue! Get our latest news straight to your inbox.
        </p>

        <form>
          <input
            type="email"
            name="newsletter"
            id="newsletter"
            placeholder="Email"
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
      </NewsLetter>
    </Container>
  )
}