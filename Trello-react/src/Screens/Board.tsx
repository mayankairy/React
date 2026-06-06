import {Appbar} from "../Components/Appbar";
import {Card} from "../Components/Card";
import {BoardsSection} from "../Components/BoardsSection";
import {useState} from 'react'




export function Board(){
    const [pendingTasks,setpendingtasks]=useState([{id:"1", title:"you need to work on it", description:"is it going great?" }])
    const [ongoingTasks,setongoingtasks]=useState([{id:"2",title:"drag it", description:"is it going great?" }, {id:"3",title:"will it work", description:"god knows"}])
    const [doneTasks,setdonetasks]=useState([{id:"4",title:"drop it", description:"is it going great?" }])

    return <div>
        <Appbar />
    
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", padding:"10px 10px 10px 10px", margin:"5px 5px 5px 5px"}}>   
            <div style={{flex:1,minHeight:"80vh", border:"1px solid black", margin:"0px 3px 0px 3px"}}>
                
                {/* <h1>Tasks</h1> */}
                <BoardsSection onDrop={(item:any)=>{
                    setpendingtasks(p =>p.filter(x=> x.id !== item.id))
                    setongoingtasks(p =>p.filter(x=> x.id !== item.id))
                    setdonetasks(p =>p.filter(x=> x.id !== item.id))
                    setpendingtasks(p=> [...p,item])
                }}>               
                {/* <div style={{border:"1px solid black"}}>
                    <Card title={"you need to work on it"} description={"is it going great?"} />
                    <Card title={"today applied for PharmaEasy"} description={"hope, i gets an internship, 6months"} />
                </div> */}
                    {pendingTasks.map(task => <Card 
                    id={task.id}
                    title={task.title}
                    description={task.description} />)}
                </BoardsSection>
                
            </div>
            <div style={{flex:1, minHeight:"80vh", border:"1px solid black", margin:"0px 3px 0px 3px"}}>
                {/* <h1>On progress</h1> */}
                   <BoardsSection onDrop={(item:any)=>{
                    setpendingtasks(p =>p.filter(x=> x.id !== item.id))
                    setongoingtasks(p =>p.filter(x=> x.id !== item.id))
                    setdonetasks(p =>p.filter(x=> x.id !== item.id))
                    setongoingtasks(p=> [...p,item])
                }}> 
                        {ongoingTasks.map(task => <Card 
                        id={task.id}
                        title={task.title}
                        description={task.description} />)}
                   </BoardsSection>
            </div>
            <div style={{flex:1, minHeight:"80vh", border:"1px solid black", margin:"0px 3px 0px 3px"}}>
                {/* <h1>Completed</h1> */}
                    <BoardsSection onDrop={(item:any)=>{
                    setpendingtasks(p =>p.filter(x=> x.id !== item.id))
                    setongoingtasks(p =>p.filter(x=> x.id !== item.id))
                    setdonetasks(p =>p.filter(x=> x.id !== item.id))
                    setdonetasks(p=> [...p,item])
                }}> 
                        {doneTasks.map(task => <Card 
                        id={task.id}
                        title={task.title}
                        description={task.description} />)}
                    </BoardsSection>
            </div>
        </div>

    </div>
}