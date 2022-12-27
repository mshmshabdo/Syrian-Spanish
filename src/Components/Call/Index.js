import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle} from './Style.js'
import Picture2 from "./../../Images/facebook.png"
import Picture3 from "./../../Images/call2.png"
class Call extends Component{
    render(){
        return(
            <CallSection>
            <CallData item="1">
            <Icon src={Picture2} />
            <CallDesc>
                <SpanInfo>Mohammed Moamen</SpanInfo>
                <SpanTitle>SOCIAL FACEBOOK</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src={Picture3} />
            <CallDesc>
                <SpanInfo>01206304060</SpanInfo>
                <SpanTitle>Mobile</SpanTitle>
            </CallDesc>
        </CallData>
            </CallSection>
        )
    }
}
export default Call;