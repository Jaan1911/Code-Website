import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16rem;
  margin-bottom: 19rem;

  @media (max-width: 1100px) {
    display: none;
   }


  span:first-child {
    text-transform: uppercase;
    color: var(--blue-dark);
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2rem;
    padding: 0 7rem;
  }

  span + span {
    font-size: 4.6rem;
    line-height: 4.6rem;
    font-weight: bolder;
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 6rem;
    padding: 0 7rem;
  }
`
export const Content = styled.div`
  height: 50rem;
  background: var(--blue-dark);
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 5rem 3rem 0;
`

export const Testemunials = styled.div`
  position: relative;
  margin-top: 5rem;
  border-radius: 2.5rem;
  background: linear-gradient(90deg, rgba(103,103,103,.4) 0%, rgba(222,222,222,.2) 32%);
  width: 70rem;
  height: 80%;
  border: 3px solid rgba(0, 0, 0, 0.3);
  padding: 3rem;

  p {
    margin-top: 8rem;
    color: white;
    text-align: center;
    margin-bottom: 4rem;
  }

  .bg {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 2.5rem;
  }
  span:nth-of-type(1){
    display: block;
    color: white;
    font-size: 2.4rem;
    margin: 0;
    padding: 0;
  }
  span:nth-of-type(2){
    display: block;
    color: white;
    padding: 0;
    font-size: 1.8rem;
    margin: 0;
  }

  div {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 3rem;

    img {
      transform: translateY(-10rem);
    }
  }
`