import React from 'react'
import "./Div2.css"
import Div2aimg from "./div2pic/icon7.png"
import Div2bimg from "./div2pic/icon7.png"
import Div2aicon5 from "./div2pic/icon5.png"
import Div2aicon6 from "./div2pic/icon6.png"
import Div2iconline1 from "./div2pic/iconline.png"
import Div2aiconarrow1 from "./div2pic/iconarrow.png"
import Div2arrow from "./div2pic/arrowreverse.png"
import Div2arrow2a from "./div2pic/iconarrow.png"
import Div2bcircle from "./div2pic/iconcircle9a.png"
import Div2bphoto from "./div2pic/feature1.png"
import Div2bicons1 from "./div2pic/icon4.png"
import Div2bicons2 from "./div2pic/icon3.png"
import Div2bicons3 from "./div2pic/icon2.png"
import Div2bicons4 from "./div2pic/icon1.png"



function Div2 () {
    return (
        <div className='Div2'>
            <div className='Div2a'>
                <div className='Div2atop'>
                    <h1 className='Div2atopHeader'> OVERVIEW </h1>
                    <div> <img src = {Div2aimg} className = "Div2aimg"/> </div>
                    </div>
                 
                <div className='Div2abottom'>
                    <div className='Div2arrow1'>
                    <div> <img src = {Div2arrow} className = "Div2arrow"/> </div>
                    
                        </div> 

                    <div className='Div2abox1'>
                    <div className='Div2box1left'>
                        <div> <img src={Div2aicon5} className='Div2aicon5'/> </div>
                        
                    </div>
                    <div className='Div2box1right'>
                    
                           <div> <h2>Free use</h2> </div>
                            <div> <img src= {Div2iconline1} className = "Div2iconline1" /></div>
                           <div> <p>Lorem ipsum donor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt. </p> </div>

                        <div className='Div2areadmore'>
                           <div className='Div2areadmore1'> <h3> Read more</h3> </div>
                           <div> <img src = {Div2aiconarrow1} className = "Div2aiconarrow1"/> </div>
                           
                           </div>

                        </div>  
                    </div> 

                    <div className='Div2abox2'>
                    <div className='Div2box2left'>
                    <div> <img src={Div2aicon6} className='Div2aicon6'/> </div>

                    </div>
                    <div className='Div2box2right'>
                    
                    <div> <h2>Secure lock</h2> </div>
                     <div> <img src= {Div2iconline1} className = "Div2iconline1" /></div>
                    <div> <p>Lorem ipsum donor sit amet, consectetur adipisicing elit. Dicta sunt beatae accusantium incidunt. </p> </div>

                 <div className='Div2areadmore'>
                    <div className='Div2areadmore1'> <h3> Read more</h3> </div>
                    <div> <img src = {Div2aiconarrow1} className = "Div2aiconarrow1"/> </div>
                    
                    </div>

                        
                        </div>    
                    </div> 

                    <div className='Div2arrow2'>
                    <div> <img src = {Div2arrow2a} className = "Div2arrow2a"/> </div>
                        </div> 
                </div>
                
           </div>


            <div className='Div2b'>
            <div className='Div2btop'>
                    <h1 className='Div2btopHeader'> FEATURE </h1>
                    <div> <img src = {Div2bimg} className = "Div2bimg"/> </div>
                    </div>

                <div className='Div2bbottom'>
                    <div className='Div2bleft'>
                    
                    <div> <img src = {Div2bphoto} className = "Div2bphoto"/> </div> 
                    <div> <img src = {Div2bcircle} className = "Div2bcircle"/> </div>
                    
                    
                    </div>

                    <div className='Div2bright'>
                    <div className='Div2brighttop'>
                    <div><h1> UNLOCK THE BEST,</h1> </div>
                    <div className='Div2brightred'> <h2> App Features Here</h2> </div>
                    <div className='Div2bparagragh'> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit Iste laboriosam facilis dolorem, adipisci quis perspiciatis!</p></div>
                    </div>

                    <div className='Div2bfeatures'>
                    <div className='Div2bname'>
                    <div> <img src = {Div2bicons1} className = "Div2bicons"/> </div>
                    <div className='Div2btext'> <h3> Light weight & super fast </h3></div>
                    </div>
                    
                    <div className='Div2bname'> 
                    <div> <img src = {Div2bicons2} className = "Div2bicons"/> </div>
                    <div className='Div2btext'> <h3>  Strong security With privacy Care </h3> </div>
                    </div>

                    <div className='Div2bname'>
                    <div > <img src = {Div2bicons3} className = "Div2bicons"/> </div>
                    <div className='Div2btext'> <h3> Best support from our big community </h3> </div>
                    </div>

                    <div className='Div2bname'>
                    <div> <img src = {Div2bicons4} className = "Div2bicons"/> </div>
                    <div className='Div2btext'> <h3>  Latest updates on every week and stress free </h3> </div>
                    </div>

                    </div>

                   
                    </div>
                    
                
                                   
                </div>
            </div>
        </div>
           
    )
}
export default Div2