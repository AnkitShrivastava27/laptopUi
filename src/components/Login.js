import React, { useEffect, useState } from 'react'
import { Button, Card,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import  '../style.css'
import Logout from './Logout'
import { useDispatch, useSelector } from 'react-redux'
import { addAuth } from './Actions'
const Login = () => {
  const [userName, setUserName ] = useState('')
  const [userPass, setUserPass] = useState('')
  const [token , setToken ] = useState('')
  const users = JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   setToken(JSON.parse(localStorage.getItem('token')))
  // },[token])
  
  const storeToken = useSelector(state=>state.AuthReducer)
   
console.log("users >>",users)
console.log("token >>",token)

const handleLogin = ()=>{
  let count = 0
  users.forEach((x)=>{
    console.log('x ',x.uname)
   // console.log(x.uname == userName && x.password == userPass)
      if(x.uname == userName && x.password == userPass) {
        count = count + 1
      }
      console.log("count",count)
      setToken(count)
      dispatch(addAuth({'token':count}))
     localStorage.setItem('token',count)
})
}
 console.log("store Login",storeToken)
  return (
    <Container >
      { storeToken.length>0 ? <Logout /> : 
          <form  >
            <label>User Name :</label><br/>
            <input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName} /><br/><br/>
            <label>Password :</label><br/>
            <input type="password" placeholder="password"onChange={(e)=>setUserPass(e.target.value)} value={userPass} /><br/><br/>
            <label>If not registered? <Link to="/register">Register</Link></label><br/>
            <Button variant="primary" onClick={handleLogin}>Login</Button>
          </form>
}
    </Container>
  )
}

export default Login