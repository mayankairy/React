import {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import "./index.css";

//let interval:any;     // (state)

export function App(){
 const [secondspassed, setsecondspassed]=useState(0);
 //const [interval, setintervalvariable]=useState(0);
 let interval=useRef(0);
 // useRef: no re-render on the changes

 function startClock(){
  interval.current = setInterval(()=>{
   // console.log("is interval vorking"+ secondspassed)
     setsecondspassed(s=>s+1)
  },1000)
  
  // setsecondpassed(function(s){
//   return s+1;
// })
  //setintervalvariable(i);
 }

 function stopclock(){
   clearInterval(interval.current);
   // if used global variable interval, it changes to zero everytime it re-renders
   interval.current=0;
   //setintervalvariable(0);
 }

    return <div style={{display:"flex",justifyContent:"center", alignItems:"center", fontSize:100}}>
      <div>
      <div >
      <button  style={{marginRight:15, fontSize:25}} onClick={startClock}>Start</button>
      <button style={{fontSize:25}} onClick={stopclock}>Stop</button>
      </div>

      <div style={{marginRight:15}}>
        {secondspassed}s
      </div>
      </div>
    </div>

}


