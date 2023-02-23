import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Fetch() {
    const [data,setData] = useState([]);
    const [limit,setLimit] = useState(10);
    const [skip,setSkip] = useState(0);
  useEffect(()=>{
    async function fetchit(){
      let api = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      let response = await fetch(api);
      let result = await response.json();
      setData(result.products);
    }
    fetchit();
  },[data])
  function prevdata(){
    if(limit <= 10)
    {
        setLimit(10);
        setSkip(0)
    }
    else{
        setLimit(limit-10);
        setSkip(skip-10);
    }
  }
  function nextdata(){
    if(limit < 100){
        setLimit(limit+10);
        setSkip(skip+10);
    }   
  }
  return (
    <>
    <div>
    <button onClick={prevdata} disabled={skip===0?true:false}>Prev</button>
    <button onClick={nextdata} disabled={limit===100?true:false}>NEXT</button>
    </div>
    <div>
      {
      data.map((value,index)=>{
        return(
          <h1>{value.title}</h1>
        )
      })
     }
    </div>
    </>
  )
}
