import React from 'react'
import './Most.css'



import 'bootstrap/dist/css/bootstrap.min.css';
const MostRecp = () => {
    return (
        <>
            <div>
                <h1 id="h1" >Most Recipes</h1>
            </div>
            <section class="cards">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 clp">
                            <div class="col2">
                                <p id="alomond" >Almond Pastry Cookies</p>

                                <div class="white"> <i id="heart" className="fa fa-heart"></i> </div>
                                <p id="sw" >SWEET</p>
                                <div className="icons" >
                                    <i class="fas fa-comments"></i><span> 2  </span>

                                </div>
                            </div>

                            <div class="detail">
                                <time>02-03-2021</time>



                            </div>

                        </div>
                        <div class="col-lg-6 clp">
                            <div class="co2">
                                <p id="eight" >8 Easy Instant Pot Recipes </p>
                                <div class="white2"> <i id="heart2" className="fa fa-heart"></i> </div>
                                <div id="black" class="overlay-label format-label gallery-format" >
                                    <i class="far fa-images" ></i>
                                </div>
                                <p id="sw" >APPETIZER / SOUP</p>
                                <div className="icons2" >
                                    <i class="fas fa-comments"></i><span> 2  </span>
                                </div>
                            </div>
                            <div class="detail">
                                <time>02-03-2021</time>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 onee">
                            <div class="one">
                                <p id="penjoy"  >Enjoy My Favourite Molten <br />Chocolate Cake </p>
                                <div class="white3"> <i id="heart3" className="fa fa-heart"></i> </div>
                                <div id="black2" class="overlay-label format-label gallery-format" >
                                    <i class="far fa-images" ></i>
                                </div>
                                <p id="sw1" >BREAD / SWEET </p>
                                <div className="icon1" >
                                    <i class="fas fa-comments"></i><span> 20  </span>
                                </div>
                            </div>
                            <div class="detail">
                                <time>02-03-2021</time>
                            </div>
                        </div>
                        <div class="col-lg-4 twoo">
                            <div class="two">
                                <p id="penjoy2"  >Rustic Crusty Bread </p>
                                <div class="white4"> <i id="heart4" className="fa fa-heart"></i> </div>
                                <p id="sw1" >BREAD / SWEET </p>
                                <div className="icon1" >
                                    <i class="fas fa-comments"></i><span> 20  </span>
                                </div>
                            </div>
                            <div class="detail">
                                <time>02-03-2021</time>
                            </div>
                        </div>
                        <div class="col-lg-4 three">
                            <div class="thr">
                                <p id="penjoy2"  >10 Minutes Magic Orange Sauce </p>
                                <div class="white5"> <i id="heart5" className="fa fa-heart"></i> </div>
                                <p id="sw1" >APPETIZER / BREAD </p>
                                <div className="icon3" >
                                    <i class="fas fa-comments"></i><span> 20  </span>
                                </div>
                            </div>
                            <div class="detail">
                                <time>02-03-2021</time>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         
        </>

    )

}
export default MostRecp;