import React from 'react'
import './div10.css'
import Arrowsend from './div10pic/Arrowsend1.png'




function div10(){
    return(
        <>
        <div className='containerdiv10'>
            <div className='headerdiv10'>
                <div className='mrapkly'>
                    <div className='broapkly'>
                        <div className='twinapkly'>
                        <div className='iconapkly'><h1 className='iconapklyh1'> Apkly.</h1></div>
                        <div className='butapkly'>
                            <button className='babybut'>
                                <button className='subscribe'>Subscribe Now</button>
                            <button className='butsend'><img className='Emailicon' src={Arrowsend}/>Send</button>
                            </button></div>
                            </div>
                        
                        </div>
                    <div className='sisapkly'>
                        <div className='tag1'>
                            <h2>About Us</h2>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>consectetur adipisicing elit.</p>
                            <p>facillis vero dolorum. Sit earum ea</p>
                            <p>blanditiis</p>
                            </div>
                        <div className='tag2'>
                        <h2>Our Menu</h2>
                            <hr></hr>
                            <p>Home</p>
                            <p>Overview</p>
                            <p>Feature</p>
                            <p>Download</p>
                            <p>Others</p>
                            </div>
                        <div className='tag3'>
                        <h2>Follow Us</h2>
                            <hr></hr>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Google+</p>
                            <p>Youtube</p>
                            <p>Instagram</p>
                       </div>
                        <div className='tag4'>
                        <h2>Other Features</h2>
                            <hr></hr>
                            <p>Affliate</p>
                            <p>FAQ</p>
                            <p>Tutorial</p>
                            <p>Groups</p>
                            <p>Others</p>
                            </div>
                        </div>
                    </div>

               
            </div>
            <div className='copytag'>
                <h4>Copyright&copy;2018-Design by Apkly</h4>
                </div>
        </div>
        </>
    )
}

export default div10