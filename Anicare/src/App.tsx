import { useEffect, useState } from "react"
import { InView, useInView } from "react-intersection-observer"

import { About } from "./components/Aboutt"
import { BookingAppointment } from "./components/BookingAppointment"
import { ClientReviews } from "./components/ClientReviews"
import { Footer } from "./components/Footer"
import { Galery } from "./components/Galery"

import { Header } from "./components/Header"
import { OurServices } from "./components/OurServices"
import { GlobalStyle } from "./styles/globals"
import { Main } from "./components/Main"

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <BookingAppointment />
      <OurServices />
      <About />
      <Galery />
      <ClientReviews />
    </>
  )
}

export default App
