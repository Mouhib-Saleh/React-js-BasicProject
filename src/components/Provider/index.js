import React from 'react'
import Form from './ProviderForm'
import { useSelector } from 'react-redux';
export default function Index() {
  const providers = useSelector(state => state.providers.providers);
  console.log("from index ",providers);

  return (
    
    <Form/>
  )
}
