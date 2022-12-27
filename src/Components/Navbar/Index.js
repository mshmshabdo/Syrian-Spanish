import React  from "react";
import { NavbarSection,Logo,UlList,ListItem,Page,SamePage,Image } from "./Style.js";
import Picture5 from "./../../Images/soap.png"
import Picture6 from "./../../Images/call1.png"
const Navbar=()=>{
    return(
       <NavbarSection>
           <div className="container">
               <Logo>
                   <img src={Picture5}  width="150px" height="50px"/>
               </Logo>
               <UlList>
                   <ListItem>
                   <Page to="/">Home</Page>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/about">About</SamePage>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/types">Types</SamePage>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/price">Price</SamePage>
                   </ListItem>
                   <ListItem>
                       <Page to="/contact">Contact</Page>
                   </ListItem>
                   <ListItem>
                       <SamePage to="/call">
                           <Image src={Picture6} width="30px" height="30px"/>
                       </SamePage>
                   </ListItem>
                   
               </UlList>

           </div>
       </NavbarSection>
    )
}
export default Navbar;