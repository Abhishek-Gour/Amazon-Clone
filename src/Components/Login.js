/**
 * This is a React component for a login page that allows users to sign in or register using Firebase
 * authentication.
 * @returns The Login component is being returned, which contains the HTML and logic for the login page
 * of an Amazon clone website.
 */
import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

function Login() {


  const navigate = useNavigate();
  const [email ,setEmail] = useState();
  const [password,setPassword] = useState();

  const signIn = e => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password).then(auth => {
      alert('You are sign-In succesfully 🎉😎')
      navigate('/')
    })
    .catch(error => alert(error.message));
    //some fancy firebase login  shitttt happpend here.......
  }
  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth) => {
      // Succefully created a new user 
      alert("Ammazing You are register 🎉🌟",auth);
      if(auth) {
        navigate('/')
      }
    })
    .catch(error => alert(error.message));
    //do some fancy firebase register
  }
  return (
    <div className='login'>
      <Link to='/'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IafszyEkRKd4sa2GrkS7nwHSak7RKmeEjn1HhoOn&s" className='cp hover headerLogo' alt="amazon logo" className='amazonLogo' />
      </Link >
      <div className="loginContainer">
        <h1>Sign-In</h1>
        <form action="#">
          <h5>Email</h5>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className='loginSignInBtn' type='submit' onClick={signIn}>Sing-In</button>
        </form>
        <p>
          Before signing-in you have to read all the amazon term's and condition's of Use & and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. But 😉😁 it's your choice read our not because it looks like a amazon is not a Amazon. Happy coding 😎😎🫠
        </p>

        <button className='crateAccoutBtn' type='submit' onClick={register}>Create Your Amazon account</button>
      </div>
    </div>
 
  )
}

export default Login
