import styled from "styled-components";

export const Booking = styled.div`

@media (max-width: 1080px) {
  display: none;
}
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  .container {
    position: relative;
    background: rgba(84, 115, 158, 0.06);
    border-radius: 2.6rem;
    height: 24rem;
    padding: 20px;

    .dog, .cat {
      position: absolute;
      z-index: -1;
    }
    .dog {
      left: 0;
      bottom: -30px;
    }
    .cat {
      right: 0;
      bottom: 0;
    }
  }
  form {
    display: flex;
    justify-content: center;
    gap: 5rem;

    .inputwrapper {
      label {
        display: block;
        font-size: 2rem;
        color: var(--blue-dark);
        font-weight: 700;
        margin-bottom: 2rem;
      }

      input, select {
        width: 20rem;
        border: 1px solid #cccc;
        background-color: #fffb;
        padding: 1.2rem;
        border-radius: 0.5rem;

        &:focus {
          outline: 1px solid var(--blue-dark);
        }
      }
    }

  }


  button {
      background-color: var(--blue-dark);
      color: white;
      font-weight: bold;
      border-radius: 0.8rem;
      padding: 20px;
      border: none;
      width: 20.5rem;
      cursor: pointer;
      transition: all .3s ease-in;

      &:hover {
        background-color: var(--blue-light);
      }
    }

    .button {
      text-align: center;
      margin-top: 4rem;
    }
`