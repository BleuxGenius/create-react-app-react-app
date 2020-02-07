import React,{ useState, useEffect } from "react";


const EditUserForm = props => {
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }
    return (

        <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.AirLine} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.AirLine} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
    )
}

export default EditUserForm;