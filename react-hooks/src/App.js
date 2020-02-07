import React, { useState } from 'react';
import '../src/index.js';
import Usertable from './tables/Usertable';
import AddUserForm from './forms/AddUserForm'
import EditUserForm from "./forms/EditUserForm";


const App = () => {
  // fake data passed through app.
    const userData = [
      {id: 1, name: 'Dani', username: 'Bleuxgenius'},
      {id: 2, name: 'Nina', username: 'Sarrphina'},
      {id: 3, name: 'Lionel', username: 'Black'}
    ]

    // set state of users 
    const [users, setUsers,] = useState(userData)
    const [editing , setEditing] = useState(false)
    const initalFormState = {id: null, name: '', username: ''}
    const [currentUser, setCurrentUser] = useState(initalFormState)
    
    const editRow = user => {
      setEditing(true)

      setCurrentUser({ id: user.id, name: user.name, username: user.username})
    }

    const addUser = user => {
      user.id = users.length + 1
      setUsers([...users, user])
    }

    const deleteuser = id => {
      setUsers(users.filiter(user => user.id !== id))
    }

    const updateUser = (id, updateUser) => {
      setEditing(false)

      setUsers(users.map(user => (user.id === id ? updateUser : user)))
    }

  return (
    <div className="container">
      <h1>CRUD App with hooks</h1>
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
      <h2> Add User</h2>
      <AddUserForm addUser={addUser} />
      </div>
      )}
      <div className="flex-large">
        
        <h2>View Users </h2>
        {/* pass in data */}
        <Usertable users={users} editRow={editRow} deleteuser={deleteuser} />
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
