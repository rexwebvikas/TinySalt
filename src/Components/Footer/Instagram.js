import React from 'react';
import img1 from './Images/cake2.jpg';
import img2 from './Images/Cookies.jpeg';
import img3 from './Images/bengali-sweets.jpg';
import img4 from './Images/vegan.jpeg';
import img5 from './Images/hello.jpg';
import img6 from './Images/images.jpeg';

const Instagram =()=>{

    return(
        <div className="Instagram">

            <ul className="Instagram-page">

            <h5 className="instagram-title">
                <a  id = "instaatag" href ="https://www.instagram.com/tinysaltdemo" target="_blank" rel="nopenner noreferrer">Follow Me @Instagram</a>
            </h5>
            
            <div className="Images">
            
                <li>
                    <a href="https://www.instagram.com/p/CBKT_o8AvHL/" target="_blank" rel ="noopenner noreferrer">
                    <img src={img1} height="150" width="180"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/p/CBKT_o8AvHL/" target="_blank" rel ="noopenner noreferrer">
                    <img src={img2} height="150" width="180"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/p/CBKT_o8AvHL/" target="_blank" rel ="noopenner noreferrer">
                    <img src={img3} height="150" width="180"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/p/CBKT_o8AvHL/" target="_blank" rel ="noopenner noreferrer">
                    <img src={img4} height="150" width="180"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/p/CBKT_o8AvHL/" target="_blank" rel ="noopenner noreferrer">
                    <img src={img5} height="150" width="180"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/p/CBKT_o8AvHL/" target="_blank" rel ="noopenner noreferrer">
                    <img src={img6} height="150" width="180"/>
                    </a>
                </li>
                </div>
            </ul>
        </div>

        
    )
}
export default Instagram;