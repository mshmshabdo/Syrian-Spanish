import React from "react";
import{AboutData,AboutSection,AboutSectionTitle,AboutDesc,AboutInfo,AboutList,AboutItem,AboutItemSpan,AboutInfoTitle,Con,Image,Span} from'./Style.js'

const About=()=>{ 
   return(
       
       <AboutData>
              
                   <Image>
           <Con>
              
                   <AboutSection>
                   <AboutSectionTitle>
                        Description
                   </AboutSectionTitle>
                   <AboutDesc>
                  Each box contains one item,<Span>72 soap</Span>,and shown on the outside of the box.
                  Each 6 soaps are wrapped in atransparent shrink wrap.
                  The total box contain 12 sets.
                   </AboutDesc>
               </AboutSection>
               <AboutInfo> 
        
                   <AboutInfoTitle>
                       Data
                   </AboutInfoTitle>
                   <AboutList>
                       <AboutItem>
                           <AboutItemSpan>Box dimensions</AboutItemSpan>
                           27 cm width, 30 cm long, 27 cm high.
                       </AboutItem>
                       <AboutItem>
                           <AboutItemSpan>Box weight upright</AboutItemSpan>
                           11.1 kg to 11.2 kg.
                       </AboutItem>
                       <AboutItem>
                           <AboutItemSpan>Price</AboutItemSpan>
                           The price of the box is 1983 pounds,including tax and packaging.
                       </AboutItem>   
                   </AboutList>
               </AboutInfo>   
           </Con>
           </Image>
       </AboutData>
   )
}
export default About;