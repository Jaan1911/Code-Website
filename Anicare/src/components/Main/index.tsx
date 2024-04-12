import { MainContent } from "./style";
import { Cards } from "../Servicesprev";

import imgdog from '../../assets/dog1.png'
import imgcat from '../../assets/cat1.png'
import yellowpawimg from '../../assets/paw-btn.svg'
import bgleft from '../../assets/bg-left.png'
import bgheaderimg from '../../assets/bg-main.png'
import { useState } from "react";

export function Main() {

  const [animation, setAnimation] = useState('')
  return (
    <MainContent
      onLoad={() => {
        setAnimation("animate__animated")
      }}
    >
      <div className={`dog ${animation} animate__backInLeft`}>
        <img className="bg-image" src={bgleft} alt="background" />
        <img src={imgdog} alt="dog" />
      </div>

      <div
        className={`apresentation ${animation} animate__zoomIn animate__delay-1s`}
      >
        <h1>The India's first Team for Pet Care Services</h1>
        <p>
          Anicare is India’s first tech-integrated one stop solution to cater to
          all your pet needs such as health-tracking ,integrated training model
          ,wellness, consultations, grooming and nutrition.
        </p>

        <button>
          <img src={yellowpawimg} alt="paw" />
          Our Services
        </button>

        <Cards />
      </div>

      <div className={`cat ${animation} animate__backInRight`}>
        <img src={imgcat} alt="cat" />
      </div>
    </MainContent>
  )
}