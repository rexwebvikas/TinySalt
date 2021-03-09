import React from 'react';
import './Latest.css'
const LatestRecipes = (props) => {

    return (
        <>
            <section id ="section" >


                <div id="colum1" className="col-lg-6 " >
                    <div  className ="latcol" >
                        <div class="image1"  ><img  className ="divimg" alt="ty" height="500px" width="100%" src={props.imgsrc} /></div>
                        <div className="main" >
                            <h2>
                                <a className="brain" href="#">{props.Mainhead}</a>
                            </h2>
                            <div>
                                <a className="beve" href="#">{props.SecHead}</a>
                                <div className="icons" >
                                    <i class="fas fa-comments"></i><span> 2  </span>

                                </div>

                            </div>
                            <p className="vest">{props.Para}</p>
                            <div className="Read" >
                                <a className="readp" href="#" > Read More </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="colum1" className="col-lg-6 ">
                <div  className ="latcol" >
                    <div class="image1" ><img alt="ty" height="500px" width="100%" src={props.imgsrc1} /></div>
                    <div className="main" >
                        <h2>
                            <a className="brain" href="#">{props.Mainhead1}</a>
                        </h2>
                        <div>
                            <a className="beve" href="#">{props.SecHead1}</a>
                            <div className="icons" >
                                <i class="fas fa-comments"></i><span> 2  </span>

                            </div>

                        </div>
                        <p className="vest">{props.Para1}</p>
                        <div className="Read" >
                            <a className="readp" href="#" > Read More </a>
                        </div>
                    </div>
                    </div>
                </div>

            </section>




        </>
    );

}

export default LatestRecipes;