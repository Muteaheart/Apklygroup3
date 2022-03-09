import React from 'react';
import './div4.css';
import rhombus from './div4pic/rhombus.png'

function Pricing() {
  return(
   <div className='pricing-card'>
     <div className='bluepink-card'>
       <div className='plan-card'>
         <p>PRICE PLAN</p>
         <img src={rhombus} alt='Rhombus'/>
       </div>
       <div className='navyblue-row'>
        <div className='navyblue'>
          <div className='blue1'>
            <p className='basic'>Basic</p>
            <p className='month1'>$10/month</p>
          </div>
          <div className='blue2'>
            <p>25 GB Backup</p>
            <p>limited support</p>
            <p>Fastest load speed</p>
            <a href='#'><button className='buy'>Buy Now</button></a>
          </div>
        </div>
        <div className='navyblue'>
          <div className='blue1'>
            <p className='basic'>Free</p>
            <p className='month1'>$0/month</p>
          </div>
          <div className='blue2'>
            <p>5 GB Backup</p>
            <p>limited support</p>
            <p>Medium load speed</p>
            <a href='#'><button className='downloaddiv4'>Download</button></a>
          </div>
        </div>
        <div className='navyblue'>
        <div className='blue1'>
            <p className='basic'>Advance</p>
            <p className='month1'>150 GB Backup</p>
          </div>
          <div className='blue2'>
            <p>150 GB Backup</p>
            <p>unlimited support</p>
            <p>Fastest load speed</p>
            <a href='#'><button className='buy'>Buy Now</button></a>
          </div>
        </div>
       </div>
     </div>
   </div> 
  )
}


export default Pricing