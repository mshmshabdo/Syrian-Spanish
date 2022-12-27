import React,{Component} from "react";
import Home from './../Home/Index.js'
import About from './../About/Index.js'
import Types from './../Types/Index.js'
import Price from './../Price/Price'
import Call from './../Call/Index.js'
import Footer from './../Footer/Index.js'
class Index extends Component{
    render(){
        return(
            <div>
                <Home/>
                <About/>
                <Types/>
                <Price/>
                <Call/>
                <Footer/>
            </div>
        )
    }
}
export default Index