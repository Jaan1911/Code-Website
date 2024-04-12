import { Card, Container } from "./style"
import { InView, useInView } from 'react-intersection-observer';

import consultationIMG from '../../assets/consultation.svg'
import petgroomingIMG from '../../assets/petgrooming.svg'
import vacinnaIMG from '../../assets/vacinna.svg'
import surgeriesIMG from '../../assets/surgeries.svg'
import boneIMG from '../../assets/bone.svg'
import emergencyIMG from '../../assets/emergency.svg'
import { RefObject, useEffect, useState } from "react"



export function OurServices() {
  
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <Container id="services" ref={ref}>
      <span>OUR SERVICES</span>
      <h2>All Pet Care Services</h2>

      <div
        className={
          inView
            ? "cardwrapper animate__animated animate__fadeInLeft"
            : "cardwrapper"
        }
      >
        <Card>
          <div>
            <img src={consultationIMG} alt="consultation" />
            <span>Health Monitoring</span>
          </div>

          <p>
            Follow the Anicare Band Health Index, sleep score and hourly view to
            monitor existing medical issues or get alerted to early sign of
            illness
          </p>

          <a href="#">
            Get Service
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.90625 2.14062C8.4375 2.60938 8.48438 3.3125 8.90625 3.78125L14.5781 9.125H1.125C0.46875 9.125 0 9.64062 0 10.25V11.75C0 12.4062 0.46875 12.875 1.125 12.875H14.5781L8.90625 18.2656C8.48438 18.7344 8.48438 19.4375 8.90625 19.9062L9.9375 20.9375C10.4062 21.3594 11.1094 21.3594 11.5312 20.9375L20.6719 11.7969C21.0938 11.375 21.0938 10.6719 20.6719 10.2031L11.5312 1.10938C11.1094 0.6875 10.4062 0.6875 9.9375 1.10938L8.90625 2.14062Z"
                fill=" #193A6A"
              />
            </svg>
          </a>
        </Card>

        <Card>
          <div>
            <img src={petgroomingIMG} alt="grooming" />
            <span>Tracking</span>
          </div>

          <p>
            Integrated Sensors to track sleep quality, calories burned, overall
            health and behaviour. Set fitness goals and track minute by minute
            activity
          </p>

          <a href="#">
            Get Service
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.90625 2.14062C8.4375 2.60938 8.48438 3.3125 8.90625 3.78125L14.5781 9.125H1.125C0.46875 9.125 0 9.64062 0 10.25V11.75C0 12.4062 0.46875 12.875 1.125 12.875H14.5781L8.90625 18.2656C8.48438 18.7344 8.48438 19.4375 8.90625 19.9062L9.9375 20.9375C10.4062 21.3594 11.1094 21.3594 11.5312 20.9375L20.6719 11.7969C21.0938 11.375 21.0938 10.6719 20.6719 10.2031L11.5312 1.10938C11.1094 0.6875 10.4062 0.6875 9.9375 1.10938L8.90625 2.14062Z"
                fill=" #193A6A"
              />
            </svg>
          </a>
        </Card>

        <Card>
          <div>
            <img src={surgeriesIMG} alt="sugeries" />
            <span>Integrated Training Modules</span>
          </div>

          <p>
            Get Additional Peace of mind by training your Pet according to
            AniCare Band Modules. Pet parenting with training is more fun
          </p>

          <a href="#">
            Get Service
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.90625 2.14062C8.4375 2.60938 8.48438 3.3125 8.90625 3.78125L14.5781 9.125H1.125C0.46875 9.125 0 9.64062 0 10.25V11.75C0 12.4062 0.46875 12.875 1.125 12.875H14.5781L8.90625 18.2656C8.48438 18.7344 8.48438 19.4375 8.90625 19.9062L9.9375 20.9375C10.4062 21.3594 11.1094 21.3594 11.5312 20.9375L20.6719 11.7969C21.0938 11.375 21.0938 10.6719 20.6719 10.2031L11.5312 1.10938C11.1094 0.6875 10.4062 0.6875 9.9375 1.10938L8.90625 2.14062Z"
                fill=" #193A6A"
              />
            </svg>
          </a>
        </Card>

        <Card>
          <div>
            <img src={boneIMG} alt="bone" />
            <span>Pet Food</span>
          </div>

          <p>
            Every pet is unique and has different taste buds, and we’ll help you
            zero in on the foods that works best for their growth and health.
          </p>

          <a href="#">
            Get Service
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.90625 2.14062C8.4375 2.60938 8.48438 3.3125 8.90625 3.78125L14.5781 9.125H1.125C0.46875 9.125 0 9.64062 0 10.25V11.75C0 12.4062 0.46875 12.875 1.125 12.875H14.5781L8.90625 18.2656C8.48438 18.7344 8.48438 19.4375 8.90625 19.9062L9.9375 20.9375C10.4062 21.3594 11.1094 21.3594 11.5312 20.9375L20.6719 11.7969C21.0938 11.375 21.0938 10.6719 20.6719 10.2031L11.5312 1.10938C11.1094 0.6875 10.4062 0.6875 9.9375 1.10938L8.90625 2.14062Z"
                fill=" #193A6A"
              />
            </svg>
          </a>
        </Card>

        <Card>
          <div>
            <img src={emergencyIMG} alt="emergency" />
            <span>Emergency Care</span>
          </div>

          <p>
            If your pet has urgent medical need like a serious injury, or a
            life-threatening illness, we’ll be there for his needs.
          </p>

          <a href="#">
            Get Service
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.90625 2.14062C8.4375 2.60938 8.48438 3.3125 8.90625 3.78125L14.5781 9.125H1.125C0.46875 9.125 0 9.64062 0 10.25V11.75C0 12.4062 0.46875 12.875 1.125 12.875H14.5781L8.90625 18.2656C8.48438 18.7344 8.48438 19.4375 8.90625 19.9062L9.9375 20.9375C10.4062 21.3594 11.1094 21.3594 11.5312 20.9375L20.6719 11.7969C21.0938 11.375 21.0938 10.6719 20.6719 10.2031L11.5312 1.10938C11.1094 0.6875 10.4062 0.6875 9.9375 1.10938L8.90625 2.14062Z"
                fill=" #193A6A"
              />
            </svg>
          </a>
        </Card>

        <Card>
          <div>
            <img src={vacinnaIMG} alt="Vaccinations" />
            <span>Vaccinations</span>
          </div>

          <p>
            We’ll keep your pet safe from parvo, distemper, leptospirosis,
            rabies, corona, kennel cough and more — and send reminders when
            they’re due for a vaccine.
          </p>

          <a href="#">
            Get Service
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.90625 2.14062C8.4375 2.60938 8.48438 3.3125 8.90625 3.78125L14.5781 9.125H1.125C0.46875 9.125 0 9.64062 0 10.25V11.75C0 12.4062 0.46875 12.875 1.125 12.875H14.5781L8.90625 18.2656C8.48438 18.7344 8.48438 19.4375 8.90625 19.9062L9.9375 20.9375C10.4062 21.3594 11.1094 21.3594 11.5312 20.9375L20.6719 11.7969C21.0938 11.375 21.0938 10.6719 20.6719 10.2031L11.5312 1.10938C11.1094 0.6875 10.4062 0.6875 9.9375 1.10938L8.90625 2.14062Z"
                fill=" #193A6A"
              />
            </svg>
          </a>
        </Card>
      </div>
    </Container>
  )
}