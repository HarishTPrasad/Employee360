import React from 'react'
import myImage from './Assets/logo.png';

function Dash() {
  return (
    <>

    <div>
    <div className='imgemp'>
  
  <img src={myImage} alt="My Image" />
  
  </div>
    </div>

<div >

  <input className='empid' placeholder=" Enter Employee ID"/>

  <div className='btemp'>
  <button  className="btn btn-primary">ENTER</button>
  </div>

</div>

<table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">Company</th>
      <th scope="col">Department</th>
      <th scope="col">Employee id</th>
      <th scope="col">Age</th>
      <th scope="col">Age when joined</th>
      <th scope="col">Years in the company</th>
      <th scope="col">Salary</th>
      <th scope="col">Annual bonus</th>
      <th scope="col">Prior years experience</th>
      <th scope="col">Full tim</th>
      <th scope="col">Part time</th>
      <th scope="col">Contractor</th>
    </tr>
  </thead>
  <tbody>
    
  </tbody>
</table>


    

    </>
  )
} 

export default Dash
