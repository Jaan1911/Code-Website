import { Container } from "./style";

import petGroomingIMG from '../../assets/petgrooming.png'

export function Grooming() {
  return(
    <Container>
      <img src={petGroomingIMG} alt="dog" />

      <div>
        <span>Pet Grooming Service</span>
        <p>Bathing – wash and fluff dry</p>
        <p>Pawdicure – nail trimming and filing</p>
        <p>Breed specific styling, cutting and stripping</p>
        <p>De-matting and detangling</p>

        <button>Our Services</button>
      </div>
    </Container>
  );
}