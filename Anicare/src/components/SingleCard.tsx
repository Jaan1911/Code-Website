import React from "react"
import "../styles/card.css"

interface Doctor {
  name: string;
  image: string;
  experience: string;
  specialist: string;
  subject: string;
  charge: string;
}

function SingleCard({ doctor }: { doctor: Doctor }) {



  return (
    <div>
      <div className="card">
        <div className="image-container">
          <img src={doctor.image} alt={doctor.name} />
        </div>

        <div className="card-body">
          <h2>{doctor.name}</h2>
          <p>
            <span className="my-subject">Experience:</span> {doctor.experience}
          </p>
          <p>
            <span className="my-subject">Specialist:</span> {doctor.specialist}
          </p>
          <p>
            <span className="my-subject">Subject:</span> {doctor.subject}
          </p>
          <p>
            <span className="my-subject">Charge:</span> {doctor.charge}
          </p>
          <div className="button">
            <button >Book Your Appointment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
