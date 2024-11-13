import React from 'react'
import {useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
    const hanldeNavigation = () => {
        // navigate('/');
        // navigate(-1); ///-1 means go to previous page
        navigate('/contacts/1');
    }
  return (
    <div>
      <h1>About</h1>
      <button onClick={hanldeNavigation} className='bg-red-600 '>Go to Home</button>
    </div>
  )
}
