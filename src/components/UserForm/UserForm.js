import React,{useState,useEffect} from 'react'
//import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import './UserForm.css'
const UserForm = () => {
    const [InputValue, setInputvaue] = useState({
        name:'',
        email:'',
        phone:'',
        city:''
    })
    const history=useHistory();
    const onChangeHandler=name=>event=>{
        setInputvaue({
            ...InputValue,
            [name]:event.target.value
        })
    }
    const submitHandler=(event)=>{
    event.preventDefault();
    // localStorage.setItem("values",JSON.stringify(InputValue))

    if(InputValue.name==''||InputValue.email==''||InputValue.phone==''||InputValue.city==''){
      alert('Please fill all the fields')
    }else{
        history.push({
            pathname:'/userdata',
            state:{
                inputValue:InputValue
            }
        })
    }
    }
    return (
       <>
       <div >
           <form onSubmit={submitHandler}>
           <div className="contactform">
           <h1>React Form 2021</h1>
               <label>
               <input type="text" name="name" onChange={onChangeHandler('name')} value={InputValue.name} placeholder="name..." />
               </label>
               <label>
               <input type="text" name="email" onChange={onChangeHandler('email')} value={InputValue.email} placeholder="email..."/>
               </label>
               <label>
               <input type="text" name="phone" onChange={onChangeHandler('phone')} value={InputValue.phone} placeholder="phone..."/>
               </label>
               <label>
               <input type="text" name="city" onChange={onChangeHandler('city')} value={InputValue.city} placeholder="city..."/>
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
