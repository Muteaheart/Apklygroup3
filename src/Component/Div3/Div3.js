import React from 'react'
import "./Div3.css"
import Div3circle3a from "./div3pic/circle3a.png"
import Div3circle3b from "./div3pic/circle3b.png"
import Div3circle3c from "./div3pic/circle3c.png"
import Div3circle3d from "./div3pic/circle3d.png"
import Div3ytube from "./div3pic/ytube.png"



function Div3 () {
    return (
        <div className='Div3'> 
        <div className='Div3overlay'>
        <div className='Div3holder'> 

        <div className='Div3left'>
           <div className='Div3left1'>
                
                <div > <img src = {Div3circle3a} className = "Div3circle3a"/> </div>
               <div className='Div3letter1'> <p> 1.5B </p>  </div> 
                <div> <p> Download </p> </div>
          </div>


          <div className='Div3left2'>
        
           <div> <img src = {Div3circle3b} className = "Div3circle3b"/> </div>
           <div className='Div3letter2'> <p>500M</p> </div>
            <div> <p>Active users</p> </div> 
               </div> 
               
           <div className='Div3left3'>
                
                <div> <img src = {Div3circle3c} className = "Div3circle3c"/> </div>
                <div className='Div3letter3'> <p>4.6</p></div>
            <div><p>Rating</p> </div> 
           
            </div> 


           <div className='Div3left4'>
       
           <div> <img src = {Div3circle3d} className = "Div3circle3d"/> </div>
           <div className='Div3letter4'> <p>13K</p> </div>

            <div> <p>Updates</p> </div>
               </div> 
    
        </div>
        
        
        </div>
        <div className='Div3right'>
            <div> <img src={Div3ytube} className = "Div3ytube"/> </div>
            <div> <h3>Watch Our Story</h3></div>

        </div>
        </div>
        </div>

        

    )
}



export default Div3