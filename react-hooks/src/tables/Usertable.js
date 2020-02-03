import React from 'react'

const Usertable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
</thead>
    <tbody>
        {/* map through user data sent through  */}
        {props.users.length > 0 ? (
            props.users.map(user => (
// display the properties for users 
        <tr key ={user.id}>
                <td>{user.name}</td>
                <td> {user.username}</td>
                <td>
                <button className="button muted-button">Edit</button>
                <button className="buton muted-button">Delete</button>
                </td>
           </tr>
            ))
            // creat if and statment if there are not any users 
        ):(
            <tr>
                {/* display message  */}
                <td colSpan={3}> No users</td>
            </tr>
             )}
        </tbody>
    </table>
)

export default Usertable;