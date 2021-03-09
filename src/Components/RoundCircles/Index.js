import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Images/Sweets.jpg';
import img2 from './Images/vegan.jpg';
import img3 from './Images/Soup.jpg';
import img4 from './Images/Bread.jpg';
import img5 from './Images/Bevrages.jpg';
import img6 from './Images/Pasta.jpg';
import img7 from './Images/Salad.jpg';
import img8 from './Images/hello.jpg';
import './Index.css';





const Index =()=>{

    return(
        <div className="Container">

        <div className="row">
            <div className="col-md-1">
            <img src={img1} alt=""/>
            <p className="Appetizer">APPETIZER</p>
            </div>
            <div className="col-md-1">
            <img src={img2} alt=""/>
            <p className="Appetizer">VEGAN</p>
            </div>
            <div className="col-md-1">
            <img src={img3} alt=""/>
            <p className="Appetizer">SOUP</p>
            </div>
            <div className="col-md-1">
            <img src={img4} alt=""/>
            <p className="Appetizer">BREAD</p>
            </div>
            <div className="col-md-1">
            <img src={img5} alt=""/>
            <p className="Appetizer">SALAD</p>
            </div>
            <div className="col-md-1">
            <img src={img6} alt=""/>
            <p className="Appetizer">APPETIZER</p>
            </div>
            <div className="col-md-1">
            <img src={img7} alt=""/>
            <p className="Appetizer">APPETIZER</p>
            </div>
            <div className="col-md-1">
            <img src={img8} alt=""/>
            <p className="Appetizer">APPETIZER</p>
            </div>
        </div>


          
       



        </div>
    )





}

export default Index;