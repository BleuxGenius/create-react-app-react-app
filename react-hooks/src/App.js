import React, { useState } from 'react';
import '../src/index.js';
import Usertable from './tables/Usertable';
import AddUserForm from './forms/AddUserForm'
import EditUserForm from "./forms/EditTripForm";


const App = () => {
  // fake data passed through app.
    const userData = [
      {id: 1, AirPort: 'George Bush Intl', AirLine: 'Spirit', Flight: 'YHG67J'},
      {id: 2, AirPort: 'Ohare Intl', AirLine: 'American Airlines', Flight: 'KY659L'},
      {id: 3, AirPort: 'Hobby', AirLine: 'Delta' ,Flight: 'Fk960'},
      {id: 3, AirPort: 'Laguardia', AirLine: 'Delta' ,Flight: 'Fk960'}
      
    ]

    // set state of users 
    const [users, setUsers,] = useState(userData)
    const [editing , setEditing] = useState(false)
    const initalFormState = {id: null, AirPort: '', AirLine: '', Flight: ''}
    const [currentUser, setCurrentUser] = useState(initalFormState)
    
    const editRow = user => {
      setEditing(true)

      setCurrentUser({ id: user.id, name: user.name, username: user.username, AirLine: user.AirLine})
    }

    const addUser = user => {
      user.id = users.length + 1
      setUsers([...users, user])

    }

    const deleteuser = id => {
      setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updateUser) => {
      setEditing(false)

      setUsers(users.map(user => (user.id === id ? updateUser : user)))
    }

  return (
    <div className="container">
      <h1>New Trip</h1>
      <div className="flex-row">
      <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            />
            </div>
        ) : (
      <div>
      <h2> Add Trip</h2>
      <AddUserForm addUser={addUser} />
      </div>
      )}
      <div className="flex-large">
        
        <h2>View Upcoming Trips </h2>
        {/* pass in data */}
        <Usertable users={users} editRow={editRow} deleteuser={deleteuser} />
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
