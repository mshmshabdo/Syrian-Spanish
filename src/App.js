import React,{Component} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Index.js';
import Contact from './Components/Contact/Index.js';
import Index from './Components/Index/Index.js';
import About from './Components/About/Index.js';
import Types from './Components/Types/Index.js';
import Price from './Components/Price/Price';
import Call from './Components/Call/Index.js';
class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className="App" >
           <Navbar/>
            <Routes>
                <Route exact path="/" element={<Index/>}/>
                <Route  path="/about" element={<About/>}/>
                <Route  path="/types" element={<Types/>}/>
                <Route  path="/price" element={<Price/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route  path="/call" element={<Call/>}/>
            </Routes>
            </div>
            </BrowserRouter>
            
        )
    }
}
export default App;