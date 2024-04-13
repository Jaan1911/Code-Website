import React, { useEffect, useState } from "react"
import { GlobalStyle } from "../styles/globals"
import SingleCard from "./SingleCard"


function BooksAppointment() {
  const [doctors,setDoctors] = useState([])

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Jaan19867/900646f13627a07c899df6f41faf50d4/raw/696c92c42618205a7c75eb1ac2fa9ff099be9949/abc.json"
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setDoctors(data)
      })
  }, [])

  return (
    <div>
      <GlobalStyle />
     
     
     {
      doctors.map((doctor)=>{
        return <SingleCard   doctor={doctor} />

      })
     }
    </div>
  )
}

export default BooksAppointment
