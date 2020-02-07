import React,{ useState, useEffect } from "react";


const EditTripForm = props => {
  const [trip, setTrip] = useState(props.currentUser)

    useEffect(() => {
        setTrip(props.currentUser)
    }, [props])

    
    const handleInputChange = event => {
        const {name, value} = event.target

        setTrip({...trip, [name]: value})
    }
    return (

        <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(trip.id, trip)
      }}
    >
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
      
      <button>Update Trip</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
      </div>
    </form>
    )
}

export default EditTripForm;