import React from 'react'
import './UserForm.css'
const UserData = (props) => {
    // const data=JSON.parse(localStorage.getItem("values"))
    //console.log(localStorage.getItem("values"))
    const value=props.location.state?.inputValue
    return (
        <div className="contactform">
        {console.log(value)}
           <h1>User Data</h1>
           <ul style={{color:'white', width:'100%'}}>
               <li>Name: {value?.name}</li>
               <li>Email: {value?.email}</li>
               <li>Phone: {value?.phone}</li>
               <li>City: {value?.city}</li>
           </ul>
        </div>
    )
}
export default UserData;