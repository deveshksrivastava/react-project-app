import React, {useState, useEffect}  from 'react'

export default function MainContent() {
  const [count, setCount] = useState(100);
  const [myname, setMyname] = useState('React');

  const handleChangeCount = () => {
    setCount(count+1);
  }

  const handleChangeName = (country) => {
    console.log(country);
    if (country === 'IND') {
      setMyname('Rohit is from India')
    }else{
      setMyname('Rohit is not from India')
    }
  }

  return (
    <div>
      count is - {count}<br/>
      my name  is - {myname}<br/>
      {/* <button onClick={()=>setCount(count+1)} className='bg-red-500 w-24 h-12' >Increment</button><br/><br/>
      <button onClick={()=>setMyname('Rohit')} className='bg-red-500 w-24 h-12' >Change Name</button> */}

      <button onClick={handleChangeCount} className='bg-red-500 w-24 h-12' >Increment</button><br/><br/>
      {/* <button onClick={handleChangeName} className='bg-red-500 w-24 h-12' >Change Name</button> */}
      <button onClick={()=>handleChangeName('UK')} className='bg-red-500 w-24 h-12' >Change Name</button>
    </div>
  )
}
