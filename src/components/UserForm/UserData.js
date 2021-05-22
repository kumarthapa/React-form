import React from 'react'
import './UserForm.css'
const UserData = () => {
    const data=JSON.parse(localStorage.getItem("values"))
    console.log(localStorage.getItem("values"))
    return (
        <div className="contactform">
           <h1>User Data</h1>
           <ul style={{color:'white', width:'100%'}}>
               <li>Name: {data?.name}</li>
               <li>Email: {data?.email}</li>
               <li>Phone: {data?.phone}</li>
               <li>City: {data?.city}</li>
           </ul>
        </div>
    )
}
export default UserData;