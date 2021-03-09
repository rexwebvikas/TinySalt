import React from 'react';
import './NavBarr.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from './Features';
import img1 from './Images/Sweets.jpg';
import img2 from './Images/Pasta.jpg';
import img3 from './Images/Bevrages.jpg';
import img4 from './Images/Salad.jpg';
import img5 from './Images/hello.jpg';
import img6 from './Images/Soup.jpg';
import Courses from './Courses';
import Pages from './Pages';
import Shop from './Shop';
import Respices from './Respices';
import Home from './Home';


const NavBar =()=> {

    return(
        // <div className="Nav_Bar">

         
        //      <NavLink exact activeclassName="active_class" to ="/home">Home </NavLink>
        //     <NavLink exact activeclassName = "active_class" to ="/respice">Respice</NavLink>

        //      {/* <NavLink exact activeclassName = "active_class" to ="/features">Features</NavLink> 
        //      <NavLink exact activeclassName = "active_class" to ="/pages">Pages</NavLink>

        //      <NavLink exact activeclassName = "active_class" to ="/Coureses">Coureses</NavLink> 

        //      <NavLink exact activeclassName = "active_class" to ="/respice">Shop</NavLink> 
             
        //      <NavLink exact activeclassName = "active_class" to ="/respice">Purchase</NavLink> */}
            

        //  </div>

<div className="TopBar  ">
<div className="container">

<nav className="navbar navbar-expand-lg navbar-dark  p-3">
  <a className="custom-logo-link  " rel="home" href="#">
      <img src ="https://tinysalt.loftocean.com/wp-content/uploads/2020/04/studio-logo-3-1.svg" className='custom-logo  ml-0' alt ="TinySalt" width="200"></img>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="main_nav">


	<ul  className="navbar-nav">
		
        <li className="nav-item dropdown">
			<a className="nav-link  dropdown-toggle text-dark font-weight-bolder ml-2 " href="#" data-toggle="dropdown">HOME</a>
		    <ul className="dropdown-menu dropdown-menu-center">
			   <Home
				   props1={"Main home"}
				   props2={"Adaptive Masonry Home"}
				   props3={"Adaptive Masonry Home 2 "}
				   props4={"Food Blog / Light"}
				   props5={"Food Blog / Drak"}
				   props6={" Numerous Respices"}
				   props7={"Respices & Work shop"}
				   props8={"Video Respice1 "}
				   props9={"Video Respice2 "}
				   props10={"NewBie Blogger"}
				   props11={"Respices & Shop"}
				   props12={"Food & Photography "}
			   />
		    </ul>
		</li>
        <li className="nav-item dropdown">
			<a className="nav-link  dropdown-toggle text-dark font-weight-bolder ml-2" href="#" data-toggle="dropdown">  RECIPES </a>
		    <ul className="dropdown-menu dropdown-menu-center">
			  <Respices
			    props1={"Recipe Index"}
			    props2={"Single Respice "}
			    props3={" espice review & Rating"}
			    props4={"Video in Respice"}
				props4={"Jump to Respice Button"}
				props4={"Recipe Roundup"}
				/>
		    </ul>
		</li>
		<div>
		<li className="nav-item dropdown centerAlign">
			<a className="nav-link  dropdown-toggle text-dark font-weight-bolder ml-2" href="#" data-toggle="dropdown">  FEATURES  </a>
		    <ul id="guri" className="dropdown-menu  dropdown-menu-centerss ">
			<div className="Grid" >
			<Features name={  "SINGLE POST"}
			 props1={"Post Template1"}
			  props2={"Post Temlate1: Left Sidebar"}
			  props3={"Post Temlate11: Right Sidebar"}
			  props4={"Post Temlate2"}
			  props5={"Post Temlate2: Left Sidebar"}
			/>
			<Features name={  "SINGLE POST"}
			 props1={"Post Temlate2: Right Sidebar"}
			  props2={"Post Temlate2"}
			  props3={"Post Temlate3: Left Sidebar"}
			  props4={"Post Temlate3: Right Sidebar"}
			  props5={"Post Temlate4"}
			/>
			<Features name={  "POST FORMAT"}
			 props1={"Standard Post"}
			  props2={"Gallery Post"}
			  props3={"gallery Post 2"}
			  props4={" Video Post"}
			  props5={" Video Post 2"}
			/>
			<Features name={  "ELEMENTS"}
			 props1={"Justified Gallery"}
			  props2={"Silder Gallery"}
			  props3={"Video Block"}
			  props4={"Button & Divider"}
			  props5={"Accordions & Tabs"}
			/>
			<Features name={ "ELEMENTS"}
			 props1={"Porduct Block"}
			  props2={"Product Categories"}
			  props3={"Cover Block"}
			  props4={"Mics Block"}
			/>
		
			
			</div>
		
		    </ul>
		</li>
		</div>
        <li className="nav-item dropdown">
			<a className="nav-link  dropdown-toggle text-dark font-weight-bolder ml-2" href="#" data-toggle="dropdown">  PAGES  </a>
		    <ul className="dropdown-menu dropdown-menu-center">
			  <Pages
			    props1={"About Me"}
			    props2={"About Me: Simple "}
			    props3={"Contact Me"}
			    props4={"FAQ"}
				props4={"Newsletter "}
				props4={"Author Page "}
				props4={"Search Results"}
				props4={"404 Page"}
			/>
		    </ul>
		</li>
        <li className="nav-item dropdown">
			<a className="nav-link  dropdown-toggle text-dark font-weight-bolder ml-2" href="#" data-toggle="dropdown">  COURSES  </a>
		    <ul className="dropdown-menu dropdown-menu-centers">
			<div className="Image">
			{/* <Courses img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6}/> */}
			<Courses img1={img1}/>
			 <Courses img1={img2}/>
			<Courses img1={img3}/>
			<Courses img1={img4}/>
			<Courses img1={img5}/>
			<Courses img1={img6}/>
		
			
			
			
			</div>
		    </ul>
		</li>
        <li className="nav-item dropdown">
			<a className="nav-link  dropdown-toggle text-dark font-weight-bolder ml-2" href="#" data-toggle="dropdown">  SHOP  </a>
		    <ul className="dropdown-menu dropdown-menu-center">
			  <Shop
			    props1={"Shop Page"}
			    props2={"Single Product "}
			    props3={" Cart"}
			    props4={"checkout"}
				props4={"My Account "}
				/>
		    </ul>
		</li>
        <li className="nav-item dropdown">
			<a className="nav-link  dropdown-toggle text-dark font-weight-bolder ml-2" href="#" data-toggle="dropdown">  PURCHASE  </a>
		    
		</li>
         
             <input type="search" className="form-control rounded " placeholder="Search" aria-label="Search"
              aria-describedby="search-addon"></input> 

        
	</ul>

  </div>
  
</nav>




</div>
</div>
         )

}
export default NavBar;