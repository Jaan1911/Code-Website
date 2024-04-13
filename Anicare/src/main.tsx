import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from './components/Layout';
import App from './App';
import Abouts from './components/Abouts';
import Services from './components/Services';
import BooksAppointment from './components/BooksAppointment';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="about" element={<Abouts />} />
      <Route path="services" element={<Services />} />
      <Route path="bookappointment" element={<BooksAppointment />} />
     
    </Route>
  )
)
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)

