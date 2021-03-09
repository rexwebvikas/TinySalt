import React from 'react';
import './MakeThis.css'
import imgg from '../MakeThis/images/do.jpg'
const MakeThis = () => {
    return (
        <>
            <h1 id="Make" >Make this Today </h1>
            <div className="container mainc" >
                <div class="mainc2">
                    <img className="headerpic" src={imgg} />
                    <div className="paragraph"><p id="instant" > 8 Easy Instant Pot Recipes <br></br><i id="new" class="fas fa-comments"> APPETIZER / SOUP </i><span id="comm" >  20  </span> </p>
                    <div class="white22"> <i id="heart22" className="fa fa-heart"></i> </div>
                    <div id="blackk" class="overlay-label format-label gallery-format" >
                                    <i class="far fa-images" ></i>
                                </div>
                       

                    </div>
                    <div class="details">
                                <time>02-03-2021</time>
                            </div>
                </div>
            </div>
        </>
    )
}


export default MakeThis;