import React,{useState,useEffect} from 'react'
import './UserForm.css'
const UserForm = () => {
    const [InputValue, setInputvaue] = useState({
        name:'kumar',
        email:'kum123@.com',
        phone:'12345678',
        city:'Roing'
    })
    const onChangeHandler = (e) =>{
        setInputvaue({[e.target.name]:e.target.value})
    }
    return (
       <>
       <div >
           <form>
           <div className="contactform">
           <h1>React Form 2021</h1>
               <label>
               <input type="text" name="name" onChange={onChangeHandler} Name="InputField" value={InputValue.name} placeholder="name..." />
               </label>
               <label>
               <input type="email" name="email" onChange={onChangeHandler} value={InputValue.email} placeholder="email..."/>
               </label>
               <label>
               <input type="text" name="phone" onChange={onChangeHandler} value={InputValue.phone} placeholder="phone..."/>
               </label>
               <label>
               <input type="text" name="city" onChange={onChangeHandler} value={InputValue.city} placeholder="city..."/>
               </label>
               <label> 
               <button type="submit" className="sumbmitBtn" name="name">SEND ME</button>
               </label>
           </div>
           </form>
       </div>
       </>
    )
}

export default UserForm
