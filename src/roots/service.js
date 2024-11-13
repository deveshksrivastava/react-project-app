import React from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

export default function Service() {
  const {id} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q')

  console.log('id', id, searchParams, query);
  return (
    <div>Service {id}</div>
  )
}
