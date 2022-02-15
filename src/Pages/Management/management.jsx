import React, { useEffect, useState } from 'react'
import CardView from '../../Common/cardview';
import { getUserList } from  './service'


export default function Management() {
  const [result, setResult] = useState([])  

  useEffect(() => {
    fetchUserList();
  }, [])
//  <ModelComponent />
  const fetchUserList = async() => {
    const { data } = await getUserList();
    setResult(data.data);
  }
  


  return (
    <div className='p-4'>
       { result.map((details, i)=> <CardView key={i} details={details}  /> ) }
    </div>
  )
}
