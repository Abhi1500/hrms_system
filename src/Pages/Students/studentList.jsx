import React, { useEffect, useState } from 'react'
import CardView from '../../Common/cardview';
import {  getUserList } from  './service'




export default function Management() {
  const [result, setResult] = useState([])  

  useEffect(() => {
    
      
      fetchUserList();
   
    console.log('fetchUserList');
  },[] )



  const fetchUserList = async() => {
    const { data } = await getUserList();
    console.log(data.data);
    setResult(data.data);
  }

  return (
    <div className='p-4'>
       { result.map((details, i)=> <CardView key={i} details={details} fetchUserList={fetchUserList}  /> ) }
    </div>
  )
}
