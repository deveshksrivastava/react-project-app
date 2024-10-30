import React from 'react'

export const SecondComponet = ({age , getName}) => {
  const getNameHandler = () => {
    getName('INDIA');
  }
  return (
    <div>
      SecondComponet-{age}
      <button onClick={getNameHandler} className='bg-red-500 w-24 h-12'>Get Name</button>
    </div>
  )
}
