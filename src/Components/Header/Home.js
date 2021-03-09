import React from 'react';

const Home=(props)=>{

    return(
        
        <div>
             <li><a className="dropdown-item" href="#">{props.props1} </a></li>
			   <li><a className="dropdown-item" href="#"> {props.props2} </a></li>
			   <li><a className="dropdown-item" href="#"> {props.props3} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props4} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props5} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props6} </a></li>
              <li><a className="dropdown-item" href="#">{props.props7} </a></li>
			   <li><a className="dropdown-item" href="#"> {props.props8} </a></li>
			   <li><a className="dropdown-item" href="#"> {props.props9} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props10} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props11} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props12} </a></li>
        </div>
     


  
     )
}

export default Home;
