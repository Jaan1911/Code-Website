import styled from "styled-components";

import bgcardIMG from '../../assets/bg-card.svg'

export const Container = styled.section`
  text-align: center;
  margin-top: 15rem;
  padding: 1rem 8rem;

  @media (max-width: 1114px) {
    padding: 1rem 0 1rem 1rem;
    margin-top: 4rem;
   }

  span {
    color: var(--blue-dark);
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: uppercase;
  }
   h2 {
    font-size: 4.6rem;
    font-weight: bold;
    line-height: 4.6rem;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
   }

   .cardwrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;

    @media (max-width: 1114px) {
    grid-template-columns: 1fr 1fr;
   }

   @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
   }
  }
`

export const Card = styled.div`
  background-image: url(${bgcardIMG});
  background-repeat: no-repeat;
  background-size: 200px 170px;
  background-position: right bottom;
  border: 1px solid var(--blue-dark);
  border-radius: 0.8rem;
  padding: 4rem 4rem 2rem 4rem;
  max-width: 44rem;
  text-align: left;
  transition: background 0.6s ease-in;

 

  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      font-weight: bolder;
      font-size: 2.4rem;
      line-height: 3rem;
    }
  }

  p {
    color: var(--card-text);
    font-size: 1.8rem;
    line-height: 2.6rem;
    margin-top: 1.6rem;
    margin-bottom: 5.5rem;
  }

  a {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bolder;
    color: var(--blue-dark);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &:hover {
    background: url(${bgcardIMG}),var(--blue-dark);
    background-repeat: no-repeat;
    background-position: bottom right;

    p {
      color: #FFF;
    }

    a {
      color: #FFDA47;
    }

    svg path {
      fill: #FFDA47;
    }

    span {
      color: #FFF;
    }
  }

`