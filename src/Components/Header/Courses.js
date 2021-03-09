import React from 'react';
import './NavBarr.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Courses=(props)=>{

    return(
        <div>

        <img src={props.img1} alt="" height= "150px"  width= "160px" /> 
        <img src={props.img2} alt=""/> 
        <img src={props.img3} alt=""/> 
        <img src={props.img4} alt=""/> 
        <img src={props.img5} alt=""/>
        <img src={props.img6} alt=""/>

       </div>
    )
}

export default Courses;