import React from 'react'

const Usertable = props => (
    <table>
        <thead>
            <tr>
                <th>AirPort</th>
                <th>AirLine</th>
                <th>Flight</th>
                <th>Edit</th>
            </tr>
</thead>
    <tbody>
        {/* map through user data sent through  */}
        {props.users.length > 0 ? (
            props.users.map(user => (
// display the properties for users 
        <tr key ={user.id}>
                <td>{user.AirPort}</td>
                <td> {user.AirLine}</td>
                <td> {user.Flight}</td>
                    <td>
                <button onClick={()=> {props.editRow(user)}} className="button muted-button">Edit</button>
                <button onClick={() => props.deleteuser(user.id)} className="buton muted-button">Delete</button>
                </td>
           </tr>
            ))
            // create if and statment if there are not any users 
        ):(
            <tr>
                
                <td colSpan={4}> No users</td>
            </tr>
             )}
        </tbody>
    </table>
)

export default Usertable;