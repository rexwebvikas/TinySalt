import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className ="footermain" >
        <div className= "footerbottom">
            <ul className="footerul">
                <li className="footerli" >
                    <a  className="footeratag" href ="#" >IMPRINT</a>
                    <a  className="footeratagp" href ="#" >PRIVACY POLICY </a>
                    <a  className="footeratagc" href ="#" >CONTACT</a>
                </li>
                <div className= "righttext">  
                    <strong>
                        Cook & Write With  
                        <span  className ="heart-beat" ></span>
                        <i id="beats"  className="fas fa-heart" ></i>   
                    </strong>
                          By Alex Mistry <br></br>
                          Tiny.Salt © Copyright 2020. All rights reserved.
                </div>
                
            </ul>
       

        </div>
        </div>
        </>

    )
}



export default Footer;
