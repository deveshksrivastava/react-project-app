import React, {useState, useEffect}  from 'react'

export default function MainContent() {
  const [count, setCount] = useState(1);
  const [myname, setMyname] = useState('React');
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);

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

  //everytime
  useEffect(()=>{
    console.log('everytime')
  })

  //1 time
  useEffect(()=>{
    console.log('1 time')
    
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(data => data.json())
    .then(result =>{
      console.log('my user result - ',result)
      setData(result)
    })
 
  },[])

  //when change is there 
  useEffect(()=>{
    console.log('when change is there ')
    // fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    // .then(data => data.json())
    // .then(result =>{
    //   console.log('my result - ',result)
    //   setTitle(result.title)
    // })
  },[count, myname])




  return (
    <div>
      count is - {count}<br/>
      my name  is - {myname}<br/>
      this is title - {title}<br/>
      {/* <button onClick={()=>setCount(count+1)} className='bg-red-500 w-24 h-12' >Increment</button><br/><br/>
      <button onClick={()=>setMyname('Rohit')} className='bg-red-500 w-24 h-12' >Change Name</button> */}

      <button onClick={handleChangeCount} className='bg-red-500 w-24 h-12' >Increment</button><br/><br/>
      {/* <button onClick={handleChangeName} className='bg-red-500 w-24 h-12' >Change Name</button> */}
      <button onClick={()=>handleChangeName('UK')} className='bg-red-500 w-24 h-12' >Change Name</button><br/>

      <h1>Api Content</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
      {
        data.map((item, index)=>{
          // return <h1>{item.name} , {item.phone}, {item.email}</h1>
          return (
            <tr>
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>@ {item.email}</td>
            </tr>
          )
        })
      }
 </tbody>
 </table>

       >
       
    </div>
  )
}
