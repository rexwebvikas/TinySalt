import React from 'react';
import  './Footer.css';


const Footer =()=>{
    return(


    <div>
     <footer id="colophon" className="site-footer">
        <div className="site-footer-signup">
            <div className="container">
                <div className="widget-form">

                   <h5 className="widget-titlleeform">Never Miss a Recipe !</h5>
                   <form id="from-2" className="form-2" data-id="101" data-name ="naver Miss a Recipe !">
                   <div className="form-fieldsss">
                   <p className="footerpra">    Join thousands of TinySalt subscribers and get our best recipes delivered each week!  </p>
                     <div className= "fileds-container">
                      <input type="email" name="Email" placeholder="Your Email"  className="Email-2"/>
                      <input type="submit" value="Subscribe" className="Submit-2"/>

                     </div>
                     <p className= "checkbox1">
                    <label>
                        <input className="checkboxx1" type ="checkbox" name="value" value="1" required/> I have read and agree to the<a href="#" target="_blank"> terms & conditions</a>
                    </label>
                </p> 

                   </div>

                   </form>


                </div>
            </div>
        </div>

        </footer>

    </div>
    )
}

export default Footer;