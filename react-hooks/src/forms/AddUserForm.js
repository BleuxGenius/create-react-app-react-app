import React, { useState } from "react";

const AddTripForm = props => {
    const initalFormState = {id: null, AirPort: '', AirLine: '', Flight: ''}
    const [trip, setTrip] = useState(initalFormState)

    const handleInputChange = event => {
        const { name, value} = event.target

        setTrip({...trip, [name]: value})
    }

    return(
        <form
        onSubmit={event => {
            event.preventDefault()
            if (!trip.AirPort || !trip.AirLine || !trip.Flight) return
            props.addTrip(trip)
            setTrip(initalFormState)
        }}>
          <div class="inner-wrap">
      <label>AirPort</label>
      <input type="text" name="AirPort" value={trip.AirPort} onChange={handleInputChange} />
      <label>AirLine</label>
      <input type="text" name="AirLine" value={trip.AirLine} onChange={handleInputChange} />
      <label>Fight</label>
      <input type="text" name="Flight" value={trip.Flight} onChange={handleInputChange} />
      <label>DepartureTime</label>
      <input type="text" name="DepartureTime" value={trip.DepartureTime} onChange={handleInputChange} />
      <label>Children</label>
      <input type="text" name="Children" value={trip.Children} onChange={handleInputChange} />
      <label>Arrived</label>
      <input type="text" name="Arrived" value={trip.Arrived} onChange={handleInputChange} />
      <label>Additional_Request</label>
      <input type="text" name="Additional_Request" value={trip.Additional_Request} onChange={handleInputChange} />
        <button>Add Trip</button>
        </div>
      </form>
    )
  }

  export default AddTripForm;