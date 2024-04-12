import { useEffect, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer';

import { About } from './components/AboutVetic'
import { BookingAppointment } from './components/BookingAppointment'
import { ClientReviews } from './components/ClientReviews'
import { Footer } from './components/Footer'
import { Galery } from './components/Galery'
import { Grooming } from './components/GroomingService'
import { Header } from './components/Header'
import { OurServices } from './components/OurServices'
import { GlobalStyle } from './styles/globals'


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BookingAppointment />
      <OurServices/>
      <About />
      <Galery />
      <ClientReviews />
    
      <Footer />
    </>
  )
}

export default App
