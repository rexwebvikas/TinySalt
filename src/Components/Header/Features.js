import React from 'react';
import { Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './NavBarr.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Features =(props)=>{
    return(
        <div>
             
		    
            <p style={{paddingLeft: "23px"}}>{props.name}</p>
			  <li><a className="dropdown-item" href="#">{props.props1} </a></li>
			   <li><a className="dropdown-item" href="#"> {props.props2} </a></li>
			   <li><a className="dropdown-item" href="#"> {props.props3} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props4} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props5} </a></li> 
        </div>
        
    )
}
export default Features;