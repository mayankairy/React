import {useState, useEffect, useRef, useContext} from 'react'
import axios from 'axios';
import {useTodos} from './hooks/useTodos'
import { settodoscontext } from './context';

type typeTodo={
  title:string,
  id:number,
}

export function App(){

  const {todo,settodo}=useTodos();

  return <settodoscontext.Provider value={{settodo}} >
  
  <div>
    {todo.map(td=> <Todo title={td.title} id={td.id} settodo={settodo} /> )}
  </div>

  </settodoscontext.Provider>
}



function Todo({title,id}:typeTodo){
  // we don't pass hooks here
  return <div style={{padding:10, border:"1px solid black"}}>
    <div>
      {title}
    </div>
    <div>
      <button id={id}>delete</button>
    </div>
  </div>
}
function DeleteButton({id}){
  const {settodo}= useContext(settodoscontext)
  return <div>
    <button onClick={()=>{
        settodo(t=> t.filter(x => x.id !==id))
      }}>delete</button>
  </div>
}












//let interval:any;     // (state)

// export function App(){
//  const [secondspassed, setsecondspassed]=useState(0);
//  //const [interval, setintervalvariable]=useState(0);
//  let interval=useRef(0);
//  // useRef: no re-render on the changes

//  function startClock(){
//   interval.current = setInterval(()=>{
//    // console.log("is interval vorking"+ secondspassed)
//      setsecondspassed(s=>s+1)
//   },1000)
  
//   // setsecondpassed(function(s){
// //   return s+1;
// // })
//   //setintervalvariable(i);
//  }

//  function stopclock(){
//    clearInterval(interval.current);
//    // if used global variable interval, it changes to zero everytime it re-renders
//    interval.current=0;
//    //setintervalvariable(0);
//  }

//     return <div style={{display:"flex",justifyContent:"center", alignItems:"center", fontSize:100}}>
//       <div>
//       <div >
//       <button  style={{marginRight:15, fontSize:25}} onClick={startClock}>Start</button>
//       <button style={{fontSize:25}} onClick={stopclock}>Stop</button>
//       </div>

//       <div style={{marginRight:15}}>
//         {secondspassed}s
//       </div>
//       </div>
//     </div>

// }



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
//   //   axios.get("c")
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


