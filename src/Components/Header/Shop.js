import React from 'react';


const Shop =(props)=>{

    return(
        <div>
            <li><a className="dropdown-item" href="#">{props.props1} </a></li>
			   <li><a className="dropdown-item" href="#"> {props.props2} </a></li>
			   <li><a className="dropdown-item" href="#"> {props.props3} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props4} </a></li>
              <li><a className="dropdown-item" href="#"> {props.props5} </a></li>
        </div>
    )
}
export default Shop;