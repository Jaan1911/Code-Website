import styled from "styled-components";

import BgImage from '../../assets/bg-services.png'

export const Container = styled.div`
 @media (max-width: 780px) {
    display: none;
   }
  position :relative ;
  display: flex;
  height: 70rem;
  gap: 8.5rem;
  background: url(${BgImage});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  padding:1rem 7rem;
  margin-bottom: 17rem;

  img {
    width: 360px;
    height: 360px;
    border-radius: 0.8rem;
    margin-top: 17rem;
  }

  div {
    span {
      font-size: 4.6rem;
      font-weight: bolder;
      line-height: 4.6rem;
      display: block;
      margin-bottom: 2rem;
      margin-top: 17rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.6rem;
      color: var(--blue-dark);
      margin-left: 2rem;
    }

    p + p {
      margin-top: 2rem;
    }

    button {
      color: #fff;
      font-weight: bold;
      border: none;
      background-color: var(--blue-dark);
      padding: 2rem 3rem;
      border-radius: 0.8rem;
      cursor: pointer;
      margin-top: 3.5rem;
    }
  }
`