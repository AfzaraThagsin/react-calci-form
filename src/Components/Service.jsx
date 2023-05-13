import React from 'react'

function Service() {
  return (
    <div>


  <form action="http://localhost:4500/service" method="post">
    <label htmlFor="name">Service Name:</label>
    <input type="text" id="name" name="name"/>
    <label htmlFor="duration">Service Duration</label>
    <input type="text" id="duration" name="duration"/>
    <label htmlFor="cost" >Service Cost</label>
    <input type="Cost" id="cost" name="cost"/>
    <button type="submit">submit</button>
  </form>

    </div>





  )
}

export default Service