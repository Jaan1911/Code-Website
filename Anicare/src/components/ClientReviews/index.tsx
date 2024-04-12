import { Container, Content, Testemunials } from "./style";

import aspasIMG from '../../assets/aspas.svg'
import people1IMG from '../../assets/people1.png';
import people2IMG from '../../assets/people2.png';
import starsIMG from '../../assets/stars.png';

export function ClientReviews() {
  return (
    <Container>
      <span>OUR REVIEWS</span>
      <span>What People Say about our Idea !</span>

      <Content>
        <Testemunials>
          <div>
            <img src={people1IMG} alt="profile" />
            <img src={starsIMG} alt="profile" />
          </div>
          <p>
            "As a first time pet parent, I was very nervous before getting the
            neutering done for my dog. Team at Anicare solution helped me soothe
            my nerves by guiding me through the procedure of required care .
            Their idea to connect nearby veterinarian is amazing "
          </p>

          <img className="bg" src={aspasIMG} alt="aspas" />

          <span>Arya Bhushan </span>
          <span>UX/UI Designer</span>
        </Testemunials>

        <Testemunials>
          <div>
            <img src={people2IMG} alt="profile" />
            <img src={starsIMG} alt="profile" />
          </div>
          <p>
            "Care Maps and their integrated training module is quiet amazing as
            the pet parent I always want such solution . Apart from that the
            services of connecting with veterinarian  is quiet amazing "
          </p>
          <img className="bg" src={aspasIMG} alt="aspas" />
          <span>Yeshika </span>
          <span>Human Resource</span>
        </Testemunials>
      </Content>
    </Container>
  ) 
}