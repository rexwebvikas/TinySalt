import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Images/Flower.jpg';
import img2 from './Images/ad-1.jpg';
import img3 from './Images/vegitable.jpg';
import img4 from './Images/breakfast.jpg';
import img5 from './Images/Potates.jpg';
import './Sidebar.css';
// import Footer from '../Footer/Footer';



const Sidebar =()=>{


    return(
        <>
        <aside id="secondary" className="sidebar widget-area sidebar-sticky" data-sticky="sidebar-stick">
            <div  id="sidebar" className="sidebar-container">
            <div id ="loftocean-widget-profile-2" className="widegt tinysalt-widget_about">

            <div className="profile">
            <img  id ="cookbooksimg"src ={img1} alt ="" height="120" width="120"/>

            </div>
            <div className="textwidget">
                <h5 className="subheading">Hi , I am Alex!</h5>
                <p className="foodStyle">"Food stylist & photographer.Lovers nature and healthy food, and good coffee. Don't hesitate to come for say a small "hello!""</p>
            </div>
            <div  className="socialwidget">
            <div className="  socialrow" >
            <ul id="loftocean-widget-profile-2-social-menu" className="social-nav menu socialrowul">
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103">
                  <a href="https://www.facebook.com/#"><i className="fa fa-facebook-square "></i></a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103">
                  <a href="https://www.twitter.com/#"><i class="fa fa-twitter"></i></a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103">
                  <a href="https://www.instagram.com/#"><i class="fa fa-instagram"></i></a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103">
                  <a href="https://www.pinterest.com/#"><i class="fa fa-pinterest"></i></a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103">
                  <a href="https://www.youtube.com/#"> <i class="fa fa-youtube-play"></i></a>
              </li>


            </ul>
            </div>
            <a href="#" className="button learnmorebutton">Learn More</a>

            </div>
            <div id="loftocean-widget-ad-3" className="widget tinysal-widget_ad">
                <a href="https://1.envato.market/agD4M" className="CooKbookimg" target="_blank" rel="noopenner noreferrer" >
                    <img id="cookbooksimg" src={img2} height="300" width="160"/>
                </a>
            </div>
            <div id="logtocen-widget-posys-4" className="small-thumbnail widget tinysalt-widget_post">

            <h5 className ="widget-title vegan_Rescipes">Vegan Recipes</h5>
            </div>
            <ul class="vegitable">
                <li class="vegitable">
                    <a href="https://tinysalt.loftocean.com/vegan/pickled-summer-vegetables/" class="Post">
                        <img src={img3} height="150" width="150" class="vegitableimg" />
                        <div className= "psoty-title"> 
                        <h4 className="psoty-title">Pickled Summer Vegetables</h4>
                        <div className="meta">
                        <span className="meta-item">March 07,2021</span>

                        </div>
                        </div>
                    </a>
                    
                </li>
                <li className="breakfast">
                    <a href="https://tinysalt.loftocean.com/bread/perfect-avocado-toast-for-breakfast/">
                        <img src={img4} height="150" width =" 150" className="vegitableimg"/>
                        <div className= "psoty-title"> 
                        <h4 className="psoty-title">perfect  toast for breakfast</h4>
                        <div className="meta">
                        <span className="meta-item">March 07,2021</span>

                        </div>
                        </div>
                    </a>
                </li>
                <li className="breakfast">
                    <a href="https://tinysalt.loftocean.com/bread/perfect-avocado-toast-for-breakfast/">
                        <img src={img5} height="150" width =" 150" className="vegitableimg"/>
                        <div className= "psoty-title"> 
                        <h4 className="psoty-title">Flat Irons skilled Potatoes</h4>
                        <div className="meta">
                        <span className="meta-item">March 07,2021</span>

                        </div>
                        </div>
                    </a>
                </li>
               
               
            </ul>

            </div>

            <div  className= "widget widget_mc4wp_form_widget  form_Respicesss">
            <h5 className="widget-tittle form-Respices">Never Miss A Recipe</h5>
            <form id= "form-1" className="form-101" data-id='101' data-name="Never Miss a Recipe">
                <div className= "form-fileds">
                <p className="TinySalt"> Join Thousands of TinySalt subscribers and get our best recipes delivered each week!</p>
                <div className="fields-container">
                <input  className="inputFields"type="email" name ="Email" placeholder="your Email Address" required/>
                <input type="submit" value="Subscribe" className="submit"/>

                </div>
                <p className= "checkbox">
                    {/* <lable>
                        <input type="checbox" value="1" required>I have read and agree to the
                        
                        </input>
                    </lable> */}
                    <label>
                        <input className="checkboxx" type ="checkbox" name="value" value="1" required/> I have read and agree to the<a href="#" target="_blank"> terms & conditions</a>
                    </label>
                </p>

                </div>

               

               
            </form>

            </div>
            <div className="widget_postsss">
            <h5 className="Featured_Respices">Featured Respies</h5>
            <ul className="rowul">
                <li>
                    <a href="https://tinysalt.loftocean.com/sweet/brain-power-blueberry-smoothie/" className="post-link">
                        <div className="thumbnail">

                        </div>
                        <div className="post-contents braindiv ">
                        <h4 className="post-titlesss power "> 1.  Brain Power Blueberry Smoothie</h4>
                              <span className="meta-item">March 07,2021</span>

                        </div>
                        <div className="post-contents braindiv2 ">
                        <h4 className="post-titlesss power "> 1.  Brain Power Blueberry Smoothie</h4>
                              <span className="meta-item">March 07,2021</span>

                        </div>
                        <div className="post-contents braindiv3 ">
                        <h4 className="post-titlesss power "> 1.  Brain Power Blueberry Smoothie</h4>
                              <span className="meta-item">March 07,2021</span>

                        </div>
                    </a>
                </li>
            </ul>

            </div>

            </div>
        </aside>
        {/* <footer id="colophon" className="site-footer">
        <div className="site-footer-signup">
            <div className="container">
                <div className="widget-form">

                   <h5 className="widget-titlleeform">Never Miss a Recipe !</h5>
                   <form id="from-2" className="form-2" data-id="101" data-name ="naver Miss a Recipe !">
                   <div className="form-fieldsss">
                   <p className="footerpra">    Join thousands of TinySalt subscribers and get our best recipes delivered each week!  </p>
                     <div className= "fileds-container">
                      <input type="email" name="Email" placeholder="Your Email"  className="Email-2"/>
                      <input type="submit" value="Subscribe" className="Submit-2"/>

                     </div>
                     <p className= "checkbox1">
                    <label>
                        <input className="checkboxx1" type ="checkbox" name="value" value="1" required/> I have read and agree to the<a href="#" target="_blank"> terms & conditions</a>
                    </label>
                </p> 

                   </div>

                   </form>


                </div>
            </div>
        </div>

        </footer> */}
        {/* <Footer/> */}
        </>
        


        
    )
}

export default Sidebar;