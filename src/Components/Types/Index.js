import React from "react";
import {TypesSection,Div,ImageWrapper,Image,Overlay,OverlaySpan,Cont} from './Style.js'
import Picture16 from "./../../Images/6.jpeg"
import Picture17 from "./../../Images/4.jpeg"
import Picture18 from "./../../Images/8.jpeg"
import Picture19 from "./../../Images/7.jpeg"
import Picture20 from "./../../Images/3.jpeg"
const Types=()=>{
    
    return(
        <TypesSection>
            <Cont>
            <Div>
               Estrella transparent glycerin soap with natural oils extracts
            </Div>
            <ImageWrapper>
                <Image src={Picture16} height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Lavender
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src={Picture17} height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Jojoba
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src={Picture18} height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Avacado
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src={Picture19} height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Olivera
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src={Picture20} height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Chamomile
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            </Cont>
        </TypesSection>
    )
}
export default Types;