import styled from "styled-components";

export const Servicescard = styled.div`
  display: flex;
  margin-top: 7rem;
  gap: 3rem;

  @keyframes bord {
  0% {
    border-top: 2px solid var(--blue-dark);
  }

  50% {
    border-top: 2px solid var(--blue-dark);
    border-bottom: 2px solid var(--blue-dark);
  }

  80% {
    border-top: 2px solid var(--blue-dark);
    border-bottom: 2px solid var(--blue-dark);
    border-left: 2px solid var(--blue-dark);
  }

  100% {
    border-top: 2px solid var(--blue-dark);
    border-bottom: 2px solid var(--blue-dark);
    border-left: 2px solid var(--blue-dark);
    border-right: 2px solid var(--blue-dark);
  }
}
  
  div {

    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #EBF1FA;
    border-radius: 0.8rem;
    width: 23rem;
    height:15rem;
    padding: 5.5rem 5,5rem 3rem 5.5rem;
    text-align: center;
    transition: all .3s ease-in;

    &:hover {
      border-color: var(--blue-dark);


      img {
        border: 2px solid transparent;
        animation-name: bord;
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        animation-duration: .8s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        border-radius: 100%
      }
    }

    img {
      margin-top:-4rem;
      margin-bottom: 5rem;
      width: 7rem;
    }
  }

  span {
    color: var(--blue-dark);
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 3rem;
  }
`