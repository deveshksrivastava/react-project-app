import React, {useState, useEffect} from 'react'

export default function UseStatePage() {
    // const [myname, setMyname] = useState('React');
  const [count, setCount] = useState(1000);

  useEffect(()=>{
    setCount(400)
  })

  useEffect(()=>{
    setCount(400)
  },[])

  useEffect(()=>{
    setCount(400)
  },[count])

  let myname = 'React';
  return (
    <div>UseState - {myname}<br/>
    count - {count}
    </div>
  )
}
