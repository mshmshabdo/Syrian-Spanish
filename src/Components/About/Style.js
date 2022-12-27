import Styled from 'styled-components'
import Picture1 from "./../../Images/text.jpg"
export const AboutData=Styled.div`
padding: 50px 0;
overflow: hidden;
`
export const AboutSection=Styled.div`
width: 40%;
float: left;
@media (max-width:768px) {
    width: 100%;
    float: none;
}
`
export const AboutSectionTitle=Styled.h4`
font-size: 40px; 
margin-bottom: 20px;
font-weight:bold;
`
export const Span=Styled.span`
color: #000;
font-weight:500;
`

export const AboutDesc=Styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px;
`
export const AboutInfoTitle=Styled.h4`
font-size: 40px; 
margin-bottom: 20px;
padding-left:25px;
font-weight:bold;

`

export const AboutInfo=Styled.div`
width: 60%;
float: left;
@media (max-width:768px){
    width: 100%;
    float: none;
    margin-bottom: 20px;   
}
`
export const AboutList=Styled.ul`
list-style: none;
`
export const AboutItem=Styled.li`
margin-bottom: 8px;
`

export const AboutItemSpan=Styled.span`
    display: inline-block;
    width: 175px;
    font-weight: bold;
    padding-right:10px;
`
export const Con=Styled.div`
      width:85%;
      margin:auto;
      padding-top:150px;   
`
export const Image=Styled.div`
background-image:url(${Picture1});
height:500px;
width:100%;
background-size: cover;
background-position: center;
position: relative;


`






