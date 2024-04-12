import styled from "styled-components";

export const MainContent = styled.main`
  margin-top: 6.5rem;
  display: flex;
  justify-content: center;

  .dog {
    @media (max-width: 780px) {
      display: none;
}
    width: 400px;
    padding: 5px;

    .bg-image {
      position: absolute;
      z-index: -1;
      width: 350px;
    }
    img {
      width: 40rem;
      margin-top: 1rem;
      transition: all .5s ease-in;
        &:hover {
          transform: scale(1.1);
        }
    }
  }

 .apresentation {
  @media (max-width: 780px) {
    width: 90%;
}
    text-align: center;
    width: 45%;
    padding: 5px;

    h1 {
      color: var(--blue-dark);
      font-size: clamp(2rem,2.0rem + 2vw, 6.8rem);
      line-height: 7rem;
      font-weight: 800;
    }

    p {
      color: var(--blue-light);
      font-size: 1.8rem;
      line-height: 2.5rem;
      margin: 1.2rem 0 4.5rem 0;
      text-align: center;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding:20px;
      margin: 0 auto;
      background-color: var(--blue-dark);
      color: white;
      font-weight:bold;
      border: none;
      border-radius: 0.8rem;
      cursor:pointer;
      transition: all 0.3s ease-in;

      &:hover {
        background-color: var(--blue-light);
      }
    }
  }
  .cat {
    @media (max-width: 1100px) {
      display: none;
}
    width: 350px;
    background-color: #FDF1E9;

    img {
      width: 100%;
      margin-top: 7rem;
      margin-left: -3rem;
      transition: all .5s ease-in;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

`