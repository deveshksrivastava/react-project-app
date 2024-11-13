import React from 'react'
import { Link, redirect } from "react-router-dom";
export default function Nav() {
  return (
    <div className='w-full'>
        <div className='flex gap-4 justify-between m-2'>
            <div className='flex gap-4 bg-red-300'>
                <div>Image</div>
                <div><Link to={'/aboutssdsd'}>Home</Link></div>
                <div><Link to={'/excercise'}>Excercise</Link></div>
                <div><Link to={'/service'}>Service</Link></div>
            </div>
            <div className='flex gap-4 bg-green-200'>
                <div>Signup</div>
                <div>Logo</div>
            </div>

        </div>
      
    </div>
  )
}
