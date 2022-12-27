import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
export const NavbarSection=Styled.div`
padding:5px 0;
overflow:hidden;
background:#fff;
position:relative;
border-bottom:1px solid #000;
`
export const Logo=Styled.div`
width:50%;
float:left;
margin-top:15px;
@media(max-width:991px){
    width: 100%;
    float: none;
}
`

export const UlList=Styled.ul`
width:50%;
float:left;
list-style:none;
padding:0;
@media(max-width:991px){
    width: 100%;
    float:  none;
    margin-top: 20px;
    display: none  
}
`
export const ListItem=Styled.li`
display:inline-block;
@media(max-width:991px){
    display: block;
    text-align: center;
}
`
export const SamePage=Styled(HashLink)`
display:block;
color:#222;
text-decoration:none;
padding:10px 15px;
font-weight:bold;
&:hover{
    color:#eb5424;
}
`

export const Page=Styled(Link)`
display:block;
color:#222;
text-decoration:none;
padding:10px 15px;
font-weight:bold;
&:hover{
    color:#eb5424;
}
`
export const Image=Styled.img`
transform:translate(0px,10px);
`


