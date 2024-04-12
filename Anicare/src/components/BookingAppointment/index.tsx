import { Booking } from "./style";

import dogtwoimg from '../../assets/dog2.png'
import cattwoimg from '../../assets/cat2.png'

export function BookingAppointment() {
  return (
    <Booking id="book">
      <div className="container">

        <img src={dogtwoimg} alt="dog" className="dog" />

        <form action="">
          <div className="inputwrapper">
            <label htmlFor="petname">Select Pet</label>
            <select name="pet" id="petname" placeholder="Example Cat">
              <option value="dog">dog</option>
              <option value="cat">cat</option>
            </select>
          </div>

          <div className="inputwrapper">
            <label htmlFor="service">I’m looking for</label>
            <select name="service" id="service">
              <option value="DogBoarding">Dog Boarding</option>
              <option value="CatBoarding">Cat Boarding</option>
              <option value="PetGrooming">Pet Grooming</option>
              <option value="PetTaxi">Pet Taxi</option>
            </select>
          </div>

          <div className="inputwrapper">
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" placeholder="Example Rosewood City"/>
          </div>

          <div className="inputwrapper">
            <label htmlFor="DateTime">Date & Time</label>
            <input type="datetime-local" name="DateTime" id="DateTime" />
          </div>

          <img src={cattwoimg} alt="cat" className="cat" />
        </form>

        <div className="button">
          <button>Book Now</button>
        </div>
      </div>
    </Booking>
  )
}