import { APITester } from "./APITester";
import "./index.css";
import { useState } from "react";

const products=[
  { title: "cabbage", id: 1, isFruit: false },
  { title: "banana", id: 2, isFruit: true },
  { title: "pomengranate", id: 3, isFruit: true },
]

function handleme(){
  // alert("you clicked me");
  setCount(count+1)
}
export function App() {
  const [count,setCount]=useState(0);
  const items = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "blue" : "gray" }}
    >
      {product.title}
    </li>
  ));
 
  
  return <div>
     <ul>{items}</ul>
    <button onClick={handleme}>Clicked {count} times</button>
    </div>

}

export default App;
