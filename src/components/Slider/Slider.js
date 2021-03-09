import React from 'react';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg'
import img3 from './images/3.jpeg'
import img4 from './images/4.jpeg'
import img5 from './images/5.jpeg'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css'

const Slider = () => {
    return (
        <div  id="main" >
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="head">The Best Spaghetti Meat Sauce </h1>
                        <p id ="pcra2" >PASTA</p>
                        <i className="fa fa-eye"></i><span> 2.6K  </span>
                        <i className="fa fa-heart"></i><span> 37  </span>
                        <i className="fa fa-comments-o"></i><span> 0  </span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 className="head" >Pickled Summer Vegitables</h1>
                        <p id ="pcra2" >VEGAN</p>
                        <i className="fa fa-eye"></i><span> 8.6K  </span>
                        <i className="fa fa-heart"></i><span> 87  </span>
                        <i className="fa fa-comments-o"></i><span> 80  </span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="head" >Flat Irons Skillet Potatoes</h1>
                        <p id ="pcra2" >APPETIZER / VEGAN </p>
                        <i className="fa fa-eye"></i><span> 3.6K  </span>
                        <i className="fa fa-heart"></i><span> 47  </span>
                        <i className="fa fa-comments-o"></i><span> 10  </span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block"
                        src={img4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="head" >10 Minutes Magic Orange Suace</h1>
                        <p id ="pcra2" >APPETIZER / BREAD </p>
                        <i className="fa fa-eye"></i><span> 6.6K  </span>
                        <i className="fa fa-heart"></i><span> 67  </span>
                        <i className="fa fa-comments-o"></i><span> 6  </span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block"
                        src={img5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="head" >Norwegian Egg Benedict</h1>
                        <p id ="pcra2" >BREAD / SALAD</p>
                        <i className="fa fa-eye"></i><span> 1.6K  </span>
                        <i className="fa fa-heart"></i><span> 27  </span>
                        <i className="fa fa-comments-o"></i><span> 2  </span>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <div  class="flex-container"  >

         
            <div id ="rows" className="row">
                <div className="col-md-2 col-md-offset-1">
                    <img className="img-responsive"  id = "smallimage1" src={img1} />
                </div>
                <div className="col-md-2">
                    <img className="img-responsive" id = "smallimage2"  src={img2} />
                </div>

                <div className="col-md-2">
                    <img className="img-responsive"  id = "smallimage3" src={img3} />
                </div>
                <div className="col-md-2">
                    <img className="img-responsive"  id = "smallimage4" src={img4} />
                </div>
                <div className="col-md-2">
                    <img className="img-responsive"  id = "smallimage5" src={img5} />
                </div>
                
            </div>
            </div>
            </div>

    );
}



export default Slider;