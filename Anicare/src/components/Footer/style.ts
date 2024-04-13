import styled from "styled-components";

export const Container = styled.footer`
@media (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 10rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
 @media (max-width: 780px) {
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-top: 10rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  padding: 1rem 7rem;

  span {
    color: var(--blue-light);
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: bolder;
    display: block;
    margin-bottom: 3.3rem;
    margin-top: 0;
  }
`

export const Contact = styled.div`

  p {
    
    color: var(--blue-light);
    line-height: 2.3rem;
    margin-top: 2rem;
    margin-bottom: 2.4rem;
    max-width: 300px;
  }

  div {
    display: flex;

    div {
      display: block;
      margin-left: 2rem;

      span {
        margin: 0 0 1rem 0;
      }
      p {
        margin: 0;
      }
    }
  }
`
export const WorkingHours = styled.div`
padding: 2rem;
span {
  margin-top: -2rem;
}
  table {
    background-color: #F6FAFF;
    border-radius: 0.8rem;
    padding: 3rem;

    tr {
      margin-top: 2.3rem;

      td {
        display: inline-block;
        margin-left: 5rem;
        font-style: italic;
      }
    }
  }
`
export const UsefulLinks = styled.div`
 div {
  display: flex;
  gap: 3rem;

  ul {
    list-style: none;
  }

  li::after {
    content: '';
    width: 5px;
    height: 5px;
    background-color: var(--blue-dark);
    display: block;
    transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  li:hover::after {
    content: '';
    width: 5rem;
  }

  li + li {
    margin-top: 2.3rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }
 }
`
export const NewsLetter = styled.div`
  p {
    color: var(--blue-light);
    margin: 3rem 0 1.9rem 0;
  }

  form {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;

    input {
      border: 2px solid #ddd;
      border-radius: 0.8rem;
      padding: 1rem;
    }

    button {
      background-color: var(--blue-dark);
      border: none;
      border-radius: 0.8rem;
      padding: 1rem ;
      display: flex;
      cursor: pointer;
    }
  }

  a + a {
    margin-left: 2rem;
  }
`