import {Input} from "../Components/Input";
import {Button } from "../Components/Button";

export function AuthCredentials(){
    return <div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div>
            <img alt="man with beard" height={100} width={100} src="https://thumbs.dreamstime.com/b/avatar-man-beard-icon-cartoon-style-isolated-white-circle-background-people-symbol-vector-illustration-83338101.jpg" />
            </div>
           <div>
            <img alt="a man" height={100} width={100} src="https://img.magnific.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-851.jpg?semt=ais_hybrid&w=740&q=80" />
           </div>
            <div>
            <img height={100} width={100} src="https://thumbs.dreamstime.com/b/colourful-male-face-circle-flat-style-cartoon-vector-icon-modern-design-men-person-silhouette-avatar-profile-round-portrait-171297201.jpg" />
            </div>
            <div>
            <img height={100} width={100} src="https://img.magnific.com/premium-vector/flat-style-circular-portrait-modern-young-darkskinned-man-user-icon-avatar-illustration_173706-2390.jpg?semt=ais_hybrid&w=740&q=80" />
            </div>
            <div>
            <img height={100} width={100} src="https://img.magnific.com/free-vector/man-profile-account-picture_24908-81754.jpg?semt=ais_hybrid&w=740&q=80" />
            </div>
        </div>
    
    <div style={{minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>
            <div style={{display:"flex", justifyContent:"center"}} >
                <h1>Welcome to TRELLO</h1>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
                {/*       M-1
                <input type="email" placeholder="Email Address" style={{margin:"10px", border:"1px solid black", borderRadius:50, width:"400px", height:"30px"}}></input>
                <input type="password" placeholder="Password" style={{margin:"10px", border:"1px solid black", borderRadius:50, width:"400px", height:"30px"}}></input> */}

                {/*       M-2 :    Using children */}
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <div style={{display:"flex", justifyContent:"center"}}> 
                    {/* <button style={{cursor:"pointer",margin:"10px", border:"1px solid black", borderRadius:50,backgroundColor:"#2885e3", width:"100px", height:"40px"}}>Log in</button> */}
                    <Button>Log in</Button>
                </div>
            </div>
            
        </div>
        <div>
            
        </div>
    </div>

    </div>
}