import React from 'react'
import './Div1.css'
import Oldman2 from './div1pic/Oldman2.png'



function Apkly1(){
    return(
        <>
        
        <div className='containerdiv1'>
            <div className='headerdiv1'>
                <div className='mrhead'>                
                    <div className='headwrapper'>
                <div className='button1'><h2>Apkly.</h2></div>
                    <div className='nav'>
                        <p>Home</p>
                        <p>Overview</p>
                        <p>Feature</p>
                        <p>Price</p>
                        <p>Contact</p>
                        <button className='button2'>Sign Up</button>
                    </div>
                </div>
            </div>
            </div>
            <div className='heroholder'>
                <div className='herowrapper'>
                    <div className='leftcaps'>
                        <h1 className='caps'> AWESOME</h1>
                        <h1 className='caps1'>App of The Year</h1>
                        <p className='para'>Lorem ipsum dolor sit amet, consectetor adipisicing elit Ad<br/>
                        doleribus laborum omnis obcaecati sit dolore<br/>
                        </p>
                        <button className='button3'>Get it Now</button>
                    </div>
                    <div className='rightman'>
                        <div className='manCircle'>
                        <img src={Oldman2} className='Oldman2'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Apkly1
