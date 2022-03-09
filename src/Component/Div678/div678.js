import React from 'react';
import './div678.css';
import Android from './div678pic/android1.png';
import Apple from './div678pic/iphone1.png';
import window from './div678pic/window1.png';
import phonewoman from './div678pic/phonewoman.jpg';
import handlap from './div678pic/handlap.jpg';
import handpen from './div678pic/handpen.jpg';
import like from './div678pic/like1.png';
import share from './div678pic/share1a.png';
import comment from './div678pic/comment1.png'
import mrprofile from './div678pic/profile2a.png'
import mremail from './div678pic/email1.png'
import mrmessage from './div678pic/message1.png'
import mrsend from './div678pic/send1a.png'


function Div678() {
  return (
    <>
    <div className='download'>
      <div className='downloadHolder'>
        <div className='downloadHead'><h1>DOWNLOAD</h1></div>
        <div className='downloadBody'>
          <div className='bodyHold'>
          <div className='body1'>
            <div className='body1Wrap'>
            <div><h2 className='available'>APP AVAILABLE</h2>
            <h3 className='getIt'>Get It Now Free</h3></div>

             <div><p>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aperiam nihil praesentium vel
              voluptates eos id cumque, dolore accusatium iure
              eaque nisi molestiae</p></div>

                <div><p>quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequant.</p> 
                <button className='learnMore'><h3>Learn More</h3></button></div>
              </div>
          </div>
          <div className='body2'>
            <div className='body2Wrap'>
              <div className='androidBody'>
                <div className='Android'>
                <div className='androidicon'><img className='androidImg' src={Android} alt=''/>
                </div>
                <h2 className='androidh2'>ANDROID</h2>
                <div><p className='androidPara'>Lorem ipsum dolor sit ament,
                  consectetur adiing elit, sed
                  to eiusmod tempor.</p></div>
                  <div><button className='androidBut'><h3 className='androidbutH'>Download</h3></button></div>
              </div>
              </div>
            
              <div className='appleBody'>
                <div className='Apple'>
                <div className='androidicon'><img className='appleImg' src={Apple} alt=''/>
                </div>
                <h2 className='appleh2'>APPLE</h2>
                <div><p className='androidPara'>Lorem ipsum dolor sit ament,
                  consectetur adiing elit, sed
                  to eiusmod tempor.</p></div>
                  <div><button className='appleBut'><h3 className='applebutH'>Download</h3></button></div>
              </div>
              </div>
            
            </div>
          </div>
          <div className='body3'>
            <div className='body3H'>
            <div className='windowBody'>
                <div className='window'>
                <div className='androidicon'><img className='windowImg' src={window} alt=''/>
                </div>
                <h2 className='windowh2'>WINDOW</h2>
                <div><p className='androidPara'>Lorem ipsum dolor sit ament,
                  consectetur adiing elit, sed
                  to eiusmod tempor.</p></div>
                  <div className='dot'><button className='windowBut'><h3 className='windowbutH'>Download</h3></button></div>
              </div>
              </div>
            
              <div className='dotBody'>
                <div className='dot'>
                <div ><h1 className='doticon'>...</h1>
                </div>
                <h2 className='otherh2'>OTHERS</h2>
                <div><p className='androidPara'>Lorem ipsum dolor sit ament,
                  consectetur adiing elit, sed
                  to eiusmod tempor.</p></div>
                  <div><button className='dotBut'><h3 className='dotbutH'>Download</h3></button></div>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className='blogHome'>
      <div className='blogHolder'>
        <div className='blogHeader'><h1>BLOGS</h1></div>
        <div className='blogBody'>
          <div className='blogbodyH'>
            <div className='bodyH1'>
              <div className='thePhonew'><img className='pnonewoman' src={phonewoman}/></div>
              <div className='audience'>
                <div className='audienceCon'>
                  <div className='textCon'>
                    <h3>HOW TO INCREASE YOUR AUDIENCE?</h3>
                  <p className='phoneWpara1'>Posted by Apkly</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae repellat
                    possimus porro, aliquid perspiciatis dolorem proesentium numquam
                    suscipit unde adipisci.</p>
                    <p className='phoneWpara1'>Read More</p>
                    <div className='phoneWimg'>
                      <img className='like' src={like}/>2.5k
                      <img className='comment' src={comment}/>123
                      <img className='share' src={share}/>1k
                    </div>
                    </div>
                </div>
              </div>
            </div>
            <div className='bodyH2'>
              <div className='bodyH2con'>
                <div className='handwoman1'>
                  <div><img src={handpen}/></div>
                  <div className='handwoman1T'>
                    <div className='hold'>
                    <p className='phoneWpara1'>5 Aguest, 2019</p>
                    <h3>ACCOUNT SECURITY & SAFETY</h3>
                    <p className='phoneWpara1'>Read More</p>
                   </div>
                    <div className='phoneWimg'>
                      <img className='like' src={like}/>2.5k
                      <img className='comment' src={comment}/>123
                      <img className='share' src={share}/>1k
                    </div>
                  </div>
                </div>
                <div className='handwoman2'>
                <div><img src={handlap}/></div>
                  <div className='handwoman1T'>
                    <div className='hold'>
                    <p className='phoneWpara1'>25 February, 2019</p>
                    <h3>NEW UPDATES AND BUG FIX</h3>
                    <p className='phoneWpara1'>Read More</p>
                   </div>
                    <div className='phoneWimg'>
                      <img className='like' src={like}/>2.5k
                      <img className='comment' src={comment}/>123
                      <img className='share' src={share}/>1k
                    </div>
                  </div>
                </div>
                <div className='handwoman3'>
                <div><img src={handpen}/></div>
                  <div className='handwoman1T'>
                    <div className='hold'>
                    <p className='phoneWpara1'>25 February, 2019</p>
                    <h3>IMPORTANT OF TYPOGRAPHY</h3>
                    <p className='phoneWpara1'>Read More</p>
                   </div>
                    <div className='phoneWimg'>
                      <img className='like' src={like}/>2.5k
                      <img className='comment' src={comment}/>123
                      <img className='share' src={share}/>1k
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<div className='div8'>
  <div className='div8con'>
    <div className='div8holder'>
      <div className='contactInfo'>
        <div className='contacth1info'>
          <h1>CONTACT</h1></div></div>
      <div className='contactbody'>
        <div className='message1'>
          <div className='leftman'>
            <label className='myprofileT'><img className='myprofile' src={mrprofile}/>Your First Name</label><br/><br/>
            <input className='shakib' id='text' placeholder='Ex.Shakib'/>
            </div>
          <div className='rightmandiv6'>
          <label className='myprofileT'><img className='myprofile' src={mrprofile}/>Your Last Name</label><br/><br/>
            <input className='shakib' id='text' placeholder='Ex.Alam'/>
            </div>
          </div>


        <div className='message2'>
           <div className='mrEmail'>
            <label className='myprofileT'><img className='myprofile' src={mremail}/>Your Email Addres</label><br/><br/>
            <input className='shakib' id='text' placeholder='name@email.com'/>
            </div>
          <div className='mrmessageUs'>
          <label className='myprofileT'><img className='myprofile' src={mrmessage}/>Send Us Message</label><br/><br/>
            <input className='shakib' id='text' placeholder='........'/>
            </div>
          </div>
        <div className='message3'>
          <div className='ourmessage'>
            <button className='sendbutton'><img className='thesend' src={mrsend}/>Send Message</button>
            </div>
          </div>
        
        </div>


      </div>   
    </div>
  </div>




    </>

    
  );
}

export default Div678;
