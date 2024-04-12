import styled from "styled-components";

export const Container = styled.section`
   @media (max-width: 780px) {
    margin-top: 6rem;
   }
  padding: 1rem 8rem;
  margin-top: 17rem;
  text-align: center;

  span {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--blue-dark);
    text-transform: uppercase;
  }

  h4 {
    font-weight: 800;
    font-size: 46px;
    line-height: 46px;
    margin: 1.5rem;
  }

  p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #1C103B;
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 3rem;

    img {
      width: 30%;
      transition: all 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);

      @media (max-width: 780px) {
        width: 40%;
   }

      &:hover {
        transform: scale(1.04);
      }
    }
  }
`

export const BG = styled.img`
  position: absolute;
  z-index: -1;
  left: 0;
  transform: translateX(4rem);
`

