
import './App.css';

 import {Route,Switch} from "react-router-dom";
 import NavBar from './Components/Header/NavBar';
 import Home from './Components/Header/Home';
 import Index from './Components/RoundCircles/Index';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import Instagram from './Components/Footer/Instagram';

 



function App() {
  return (
  <div>
   
  <NavBar/> 
   <Index/>
   <Sidebar/> 

  <Switch>
  <Route   path="/home" component= {Home} />
  

  </Switch>
  <Footer/>
  <Instagram/>
 
  
  </div>
  );

}

export default App;
