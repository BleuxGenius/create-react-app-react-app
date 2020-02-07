import React, { useState } from 'react';
import '../src/index.js';
import Usertable from './tables/Usertable';
import AddUserForm from './forms/AddUserForm'
import EditUserForm from "./forms/EditTripForm";
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';


const App = () => {
  // fake data passed through app.
    const userData = [
      {id: 1, AirPort: 'George Bush Intl', AirLine: 'Spirit', Flight: 'YHG67J', DepartureTime: '7:00A', Children: '3', Arrived: 'No', Additional_Request: 'car seat, stroller, on time driver'},
      {id: 2, AirPort: 'Ohare Intl', AirLine: 'American Airlines', Flight: 'KY659L', DepartureTime: '12:45P', Children: '6', Arrived: 'Yes',  Additional_Request: 'stroller '},
      {id: 3, AirPort: 'Hobby', AirLine: 'Delta' ,Flight: 'FY870', DepartureTime: '1:45P', Children: '4', Arrived: 'No', Additional_Request: 'Luggage carrier'},
      {id: 4, AirPort: 'Laguardia', AirLine: 'Delta' ,Flight: 'Fk960', DepartureTime: '2:55P', Children: '1', Arrived: 'Yes', Additional_Request: 'car seat'},
      {id: 5, AirPort: 'Kenner', AirLine: 'oceanair', Flight: '6yuku', DepartureTime: '10:45A', Children: '0 I have a pet', Arrived: 'No', Additional_Request: 'Dog Carrier'}
      
    ]

    // set state of users 
    const [users, setUsers,] = useState(userData)
    const [editing , setEditing] = useState(false)
    const initalFormState = {id: null, AirPort: '', AirLine: '', Flight: '', DepartureTime: '', Children: '', Arrived :'', Additional_Request: ''}
    const [currentTrip, setCurentTrip] = useState(initalFormState)
    
    const editRow = user => {
      setEditing(true)
      setCurentTrip({ id: user.id, AirPort: user.AirPort, AirLine: user.AirLine, Flight: user.Flight, DepartureTime: user.DepartureTime, Children: user.Children, Arrived: user.Arrived, Additional_Request: user.Additional_Request })
    }

    const addTrip = user => {
      user.id = users.length + 1
      setUsers([...users, user])

    }

    const deleteTrip = id => {
      setUsers(users.filter(user => user.id !== id))
    }

    const updateTrip = (id, updateTrip) => {
      setEditing(false)

      setUsers(users.map(user => (user.id === id ? updateTrip : user)))
    }

  return (
    <div className="container">
      <Navbar />
      <h1>New Trip</h1>
      <div className="flex-row">
      <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentTrip}
            updateUser={updateTrip}
            />
            </div>
        ) : (
      <div>
      <h2> Add Trip</h2>
      <AddUserForm addTrip={addTrip} />
      </div>
      )}
      <div className="flex-large">
        <div class='inner-wrap'>
        <h2>View Upcoming Trips </h2>
        {/* pass in data */}
        <Usertable users={users} editRow={editRow} deleteTrip={deleteTrip} />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
