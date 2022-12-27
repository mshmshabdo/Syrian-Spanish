import Styled from 'styled-components'
import Picture4 from "./../../Images/cover.png"
export const HomeSection=Styled.div`
height: 500px;
background: url(${Picture4});
background-size: cover;
background-position: center;
text-align:center;
background-attachment: fixed;
@media (max-width:991px){
    height: auto; 
}

` 
export const HomeInformation=Styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
`
export const HomeTitle=Styled.h1`
    font-size:80px;
    font-weight: bold;
    color: #5e5e5e;
    margin-bottom:20px;
    @media(max-width:768px){
        font-size: 40px;
        color: #fff;  
    }
    @media(max-width:575px){
        font-size: 30px; 
    }
`
