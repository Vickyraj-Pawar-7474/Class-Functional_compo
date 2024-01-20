import React, { useEffect, useState } from 'react'

export default function Functional_compo() {

 const[count,setCount]=useState(0)

 useEffect(()=>{
    console.log('Componet has Mounted....');

 },[])

 useEffect(()=>{
    console.log(count);
    console.log('Componet has Updated....');

 },[count])


  return (
    <div>
     <h1>Functional component</h1>
     <h3>{count}</h3>
     <button onClick={()=>setCount(count + 1)}> Increment</button>
     <button onClick={()=>setCount(count - 1)}>Decrement</button>
     
    </div>
  )
}
