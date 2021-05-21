import React from 'react'
import './UserForm.css'
const UserData = () => {
    return (
        <div className="contactform">
           <h1>User Data</h1>
           <ul style={{color:'white', width:'100%'}}>
               <li>Name: </li>
               <li>Email: </li>
               <li>Phone: </li>
               <li>City: </li>
           </ul>
        </div>
    )
}
export default UserData;