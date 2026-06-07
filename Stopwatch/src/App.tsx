import {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import "./index.css";

//let interval:any;     // (state)

export function App(){
 const [secondspassed, setsecondspassed]=useState(0);
 //const [interval, setintervalvariable]=useState(0);
 let interval=useRef(0);

 function startClock(){
  interval.current = setInterval(()=>{
   // console.log("is interval vorking"+ secondspassed)
     setsecondspassed(s=>s+1)
  },1000)

  //setintervalvariable(i);
 }

 function stopclock(){
   clearInterval(interval.current);
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



// export function App(){

//   // let posts=[{name:"jaskirat", body:"hello paji"},{name:"mayank", body:"aj toh jal gye"}]

//   // setInterval(()=>{
//   //   console.log("interval run");
//   //   posts.push({name:"reaject", body:"kako panchi rozy"})
//   // },1000)
//   // return <div>
//   //   {posts.map(p=> <Post 
//   //   name={p.name} body={p.body} />)}
//   // </div>



//   // let [data,setdata]=useState([]);
//   // // data - current variable i.e [] empty array right now
 
//   // useEffect(function(){
//   //   axios.get("https://jsonplaceholder.typicode.com/todos")
//   //   .then(response=>{
//   //     setdata(response.data);
//   //   })
//   // }, [])


//   //   return <div>
//   //     {/* {JSON.stringify(data)} */}
//   //     {data.map(todo => <Todos title={todo.title} />)}
//   //   </div>

//   const [currenttodo, setcurrenttodo]=useState(1);

//   return <div>
//      <button onClick={function() {
//       setcurrenttodo(1);
//     }}>1</button>

// <button onClick={function() {
//       setcurrenttodo(2);
//     }}>2</button>

// <button onClick={function() {
//       setcurrenttodo(3);
//     }}>3</button>

// <Todos id={currenttodo} />

//   </div>

  
// }

// function Todos(props:any){
//   const [currenttodotit, setcurrenttodotit] =useState("");
//   const id=props.id;

//   useEffect(function(){
//     axios.get("https://jsonplaceholder.typicode.com/todos/" +id)
//     .then(response=>{
//       setcurrenttodotit(response.data.title);
//     })
//   }, [id])

//   let clockid=setInterval(()=>{
//     console.log("helo "+id)
//   },1000*id)

// return function(){
//   clearInterval(clockid)
// }

//   return <div>
//     {currenttodotit}
//   </div>
// }


