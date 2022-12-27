import Styled from 'styled-components'
export const TypesSection=Styled.div`
height:500px;
background: #f8f8f8;
padding-top: 20px; 
overflow: hidden;
text-align:center;
`

export const Div=Styled.div`
font-weight:normal;
font-size:25px;
text-align:center;
color:grey;
padding-top:15px;

`

export const ImageWrapper=Styled.div`
transform:translate(0,50px);
width: 20%;
float: left;
font-size: 0;
position: relative;
&:hover>div
{
    opacity:1;
}
@media (max-width:575px){
    width: 100%; 
}
@media (min-width:576px) and (max-width : 768px)
{
    width: 50%;
}
`
export const Image=Styled.img`
width: 100%;
`
export const Overlay=Styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: rgba(235,84,36 , 0.5);
font-size: 15px;
opacity: 0;
margin:0;
`
export const OverlaySpan=Styled.span`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: #fff;
display: block;
padding: 10px 20px;
border: 2px solid #eb5424;
cursor:default;
`
export const Cont=Styled.div`
width:100%;

`