import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Login from './Login'
import { useSelector } from 'react-redux'

const Logout = () => {
//     const [userName, setUserName ] = useState('')
//   const [userPass, setUserPass] = useState('')
    const users = JSON.parse(localStorage.getItem('user'))
    const token = JSON.parse(localStorage.getItem('token'))
    const storeLogin = useSelector(state=>state.AuthReducer)
    const navigate = useNavigate()
    console.log("users from logout ",users)
    
  return (
    <div>
        {storeLogin ? 
        <div>
         <h3>User Details</h3>
         <ul>
             {
                 users.map((user)=>{
                     return (<div>
                                 <li>
                                     {user.uname}
                                 </li>
                                 <li> {user.gender}</li>
                         </div>)
                 })
             }
         </ul>
         </div>
    :
           <Login />
            }
         
       
    </div>
  )
}

export default Logout