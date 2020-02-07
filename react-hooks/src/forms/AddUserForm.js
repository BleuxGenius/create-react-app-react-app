import React, { useState } from "react";

const AddUserForm = props => {
    const initalFormState = {id: null, AirPort: '', AirLine: '', Flight: ''}
    const [user, setUser] = useState(initalFormState)

    const handleInputChange = event => {
        const { name, value} = event.target

        setUser({...user, [name]: value})
    }

    return(
        <form
        onSubmit={event => {
            event.preventDefault()
            if (!user.AirPort || !user.AirLine || !user.Flight) return
            props.addUser(user)
            setUser(initalFormState)
        }}>
        <label>AirPort</label>
        <input type="text" name="AirPort" value={user.AirPort} onChange={handleInputChange} />
        <label>AirLine</label>
        <input type="text" name="AirLine" value={user.AirLine} onChange={handleInputChange} />
        <label>Flight</label>
        <input type="text" name="Flight" value={user.Flight} onChange={handleInputChange} />
        <button>Add Trip</button>
      </form>
    )
  }

  export default AddUserForm;