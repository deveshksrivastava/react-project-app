import React from 'react'
import SubHeder from './SubHeder';
import Footer from '../Footer';

export default function Heder({myname, city}) {
  return (
    <div className="bg-black h-20 flex justify-between">
      <div className=' flex gap-4'>
          <div className='text-white'>Logo</div>
          <div className='text-white'>Search</div>
          <div className='text-white'>Profile</div>
      </div>
      <div>
        <div className='text-white'>Logout</div>
      </div>
      <Footer city={city} />
    </div>
  )
}
