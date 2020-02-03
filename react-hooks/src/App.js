import React, { useState } from 'react';
import '../src/index.js';
import Usertable from './tables/Usertable';


const App = () => {
  // fake data passed through app.
    const userData = [
      {id: 1, name: 'Dani', username: 'Bleuxgenius'},
      {id: 2, name: 'Nina', username: 'Sarrphina'},
      {id: 3, name: 'Lionel', username: 'Black'}
    ]


    // set state of users 
    const [users, setUsers] = useState(userData)

  return (
    <div className="container">
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">
      <div className="flex-large">
      <h2> Add User</h2>
      </div>
      <div className="flex-large">
        <h2>View Users </h2>
        {/* pass in data */}
        <Usertable users={users} />
      </div>
      </div>
    </div>
  );
}

export default App;
