import { Container, InfoDropDawn,BtnShow, Pets} from "./style";

import arrowIMG from '../../assets/angle-down.svg'
import bgyellowIMG from '../../assets/bgyellow.png'
import petsIMG from '../../assets/pets.png'
import { useState } from "react";

export function About() {
const [activeDropdownId, setActiveDropdownId] = useState('1')

  return (
    <Container id="about">
      <div>
        <h3>Welcome To Anicare family</h3>
        <p>
          Anicare is India’s first tech-integrated one stop solution to cater to
          all your pet needs such as health-tracking ,integrated training model
          ,wellness, consultations, grooming and nutrition.
        </p>

        <InfoDropDawn itemID={activeDropdownId}>
          <div>
            <span>Motivation behind Anicare Idea </span>
            <BtnShow
              onClick={() => {
                setActiveDropdownId(activeDropdownId == "0" ? "1" : "0"),
                  console.log(activeDropdownId)
              }}
              itemID={activeDropdownId}
            >
              <img src={arrowIMG} alt="arrow" />
            </BtnShow>
          </div>
          <p>
            We are hostellers in DTU. We noticed the condition of dogs on our
            campus and how theyy were badly affected due to absence of proper
            diagnosis of disease in the initial stages. This forced us to think
            of a way that could help in providing motherly care to the animals
          </p>
        </InfoDropDawn>

        <InfoDropDawn itemID={activeDropdownId}>
          <div>
            <span>Mission Statement</span>
            <BtnShow
              onClick={() => {
                setActiveDropdownId(activeDropdownId == "0" ? "2" : "0"),
                  console.log(activeDropdownId)
              }}
              itemID={activeDropdownId}
            >
              <img src={arrowIMG} alt="arrow" />
            </BtnShow>
          </div>
          <p>
            Creating ecosystem for pets in healthcare domain .Where our aim is
            to Integrating motherly care from all across the globe .
          </p>
        </InfoDropDawn>

        <InfoDropDawn itemID={activeDropdownId}>
          <div>
            <span>Value Added Services</span>
            <BtnShow
              onClick={() => {
                setActiveDropdownId(activeDropdownId == "0" ? "3" : "0"),
                  console.log(activeDropdownId)
              }}
              itemID={activeDropdownId}
            >
              <img src={arrowIMG} alt="arrow" />
            </BtnShow>
          </div>
          <p>
            Create a platform that provides best in class knowledge to fill the
            information gap for pet parents and provide exceptional pet care
            through integrated training model ,wellness, consultations,
            grooming and nutrition..
          </p>
        </InfoDropDawn>

        <InfoDropDawn itemID={activeDropdownId}>
          <div>
            <span>Social Responsability</span>
            <BtnShow
              onClick={() => {
                setActiveDropdownId(activeDropdownId == "0" ? "4" : "0"),
                  console.log(activeDropdownId)
              }}
              itemID={activeDropdownId}
            >
              <img src={arrowIMG} alt="arrow" />
            </BtnShow>
          </div>
          <p>
            Create a platform that provides best in class knowledge to fill the
            information gap for pet parents and  vetererians . 
          </p>
        </InfoDropDawn>
      </div>

      <Pets>
        <img src={petsIMG} alt="cats and dogs" />
        <img src={bgyellowIMG} alt="background" />
      </Pets>
    </Container>
  )
}
