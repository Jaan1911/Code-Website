import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 8rem;
  margin-top: 17rem;
  gap: 7rem;
  
   @media (max-width: 780px) {
    grid-template-columns: 1fr;
    margin-top: 4rem;
   }
  
  h3 {
    font-size: 4.6rem;
    line-height: 4.6rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--blue-dark);
    font-size: 1.6rem;
    line-height: 2.3rem;
    margin-bottom: 35px;
  }
`

interface AboutProps {
  itemID: string;
}

interface AboutPropsButton {
  itemID: string;
}
export const InfoDropDawn = styled.div<AboutProps>`

@keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}
  &:nth-of-type(${(props) => props.itemID}) p {
    display: block;
    animation: fadeIn 2s ;
  }

  &:nth-of-type(${(props) => props.itemID}) img {
        transform: rotate(180deg);
        transition: all 0.3s;
      }
  &:nth-of-type(${(props) => props.itemID}) span {
        color: var(--blue-dark);
      }

  margin-top: 2rem;
  border-bottom:  1px solid #EBE5F7;
  padding-bottom: 2rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span {
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: bold;
  }
  p {
    margin-top: 1rem;
    margin-bottom: 0 ;
    display: none;
    transition: all 2s;
  }
`



export const BtnShow = styled.button<AboutPropsButton>`
      border: none;
      background: var(--blue-dark);
      border-radius: 0.8rem;
      cursor: pointer;
      display: flex;
      width: 40px;
      height: 40px;
      padding: 1rem;

      img {
        transition: all 0.3s;
      }
`

export const Pets = styled.div`
  position: relative;
  img:first-child {
    width: 83%;
  }
  img + img {
    position: absolute;
    width: 90%;
    top: -4rem;
    z-index: -1;
    transform: translateX(-65%);
  }
`