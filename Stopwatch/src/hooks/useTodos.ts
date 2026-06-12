import {useState, useEffect} from 'react'
import axios from 'axios';

// custom hook
// you can't define a random function like sum and use useEffect inside that
export function useTodos(){
    const [todo,settodo]=useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response=>{
     settodo(response.data)
    })

    let interval= setInterval(()=>{
     axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response=>{
     settodo(response.data)
    })
    },5* 1000)

    return ()=>{
      clearInterval(interval)
    }
  },[])

  return {todo, settodo};
  // you can also return settodo

}