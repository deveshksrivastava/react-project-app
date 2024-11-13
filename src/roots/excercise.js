import React from 'react'
import { useParams } from 'react-router-dom'

export default function Excercise() {
  const {id} = useParams();
  console.log('id', id);
  return (
    <div>Excercise {id}</div>
  )
}
