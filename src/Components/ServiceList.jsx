import React, { useEffect, useState } from 'react'
import Axios from 'axios'
function Servicelist(props) {
const [value,SetValue]=useState([])
  useEffect(()=>{
    Axios.get(`http://localhost:4500/service/${props.Length}`)
    .then((res)=>{
      console.log(res.data);
      SetValue(res.data);
    })
  },[])
  return (
    <div><p>Service Name : {value.name}</p>
    <p>Service Duration : {value.duration}</p>
    <p>Service Cost : {value.cost}</p>
    <a href='http://localhost:3000/Service'><button>New Service</button></a>
    </div>
  )
}

export default Servicelist