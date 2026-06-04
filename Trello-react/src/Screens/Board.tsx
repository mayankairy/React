import {Appbar} from "../Components/Appbar";
import {Card} from "../Components/Card";
export function Board(){
    return <div>

        <Appbar />
    
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", padding:"10px 10px 10px 10px", margin:"5px 5px 5px 5px"}}>   
            <div style={{flex:1, backgroundColor:"#E84525",minHeight:"80vh", border:"1px solid black", margin:"0px 3px 0px 3px"}}>
                <h1>Tasks</h1>
                {/* <div style={{border:"1px solid black"}}> */}
                    <Card title={"you need to work on it"} description={"is it going great?"} />
                    <Card title={"today applied for PharmaEasy"} description={"hope, i gets an internship, 6months"} />
                {/* </div> */}
            </div>
            <div style={{flex:1, display:"flex",justifyContent:"center",backgroundColor:"#394DB3", minHeight:"80vh", border:"1px solid black", margin:"0px 3px 0px 3px"}}>
                <h1>On progress</h1>
            </div>
            <div style={{flex:1, display:"flex",justifyContent:"center",backgroundColor:"#29BA2B", minHeight:"80vh", border:"1px solid black", margin:"0px 3px 0px 3px"}}>
                <h1>Completed</h1>
            </div>
        </div>

    </div>
}