# props

1. Props drilling - top to bottom
2. Prop lifting - bottom to top
3. Context API
4. Redux

# Props vs State

# Use Effect
```
import React, {useEffect, useState} from 'react'

export default function MainContent() {
  const [count, setCount] = useState(110)
  const [name, setName] = useState('React')

  useEffect(()=>{
    console.log('useEffect - every time calling')
  },)

  useEffect(()=>{
    console.log('useEffect - one time calling')
  },[])


  useEffect(()=>{
    console.log('useEffect - calling  on change of count or name')
  },[count, name])

  return (
    <div>
      count is : {count}

      name is : {name}
      <button onClick={()=>setCount(count+1)} className='bg-red-500 w-24 h-12'>Increment</button>
      <button onClick={()=>setName('rohit')} className='bg-red-500 w-24 h-12'>Change name</button>
    </div>
  )
}
```
# Life cycle hooks in class

# Style

# Conditional Rendering

