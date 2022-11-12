import React, { useEffect, useState } from 'react'
import axios from "axios"

const Dataupdate = () => {
 const [data, setData] = useState([])

 useEffect(()=>{
    axios.get(`http://localhost:3050/products`).then(res=>setData(res.data))
 },[])
    

 const handleClick = () => {
    function getRChar() {
        return ((Math.random() * 26 + 10) | 0).toString(36).toUpperCase();
      }
    
      var s = getRChar() + getRChar() + Math.floor(Math.random() * 99999 * 7);


      data.forEach((el) => el.itemNo= getRChar() + getRChar() + Math.floor(Math.random() * 99999 * 7)
      );
       
      axios.post(`http://localhost:3050/newproducts`,data).then(res=>console.log(res))
    
    //   console.log(data)
  
 }
  return (
    <>
    <button onClick={handleClick} >start</button>
    </>
  )
}

export default Dataupdate