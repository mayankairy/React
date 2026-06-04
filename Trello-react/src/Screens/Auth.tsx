import {AuthBanner} from "../Components/AuthBanner";
import {AuthCredentials} from "../Components/AuthCredentials";

export function Auth(){
    return <div style={{display:"flex"}}>
        <div style={{flex:1}}>
            <AuthBanner />
        </div>
       <div style={{flex:2}}>
            <AuthCredentials />
        </div>
        
    </div>
}