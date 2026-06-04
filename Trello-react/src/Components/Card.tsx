import {useDrag} from "react-dnd";

// export function Card({title, description, isDragging}:any){
//     const [{opacity},dragRef]=useDrag(
//         ()=>{
//             type:"card",
//             item: {title,description},
//             collect: (monitor:any)=>({
//                 opacity:monitor.isDragging() ? 0.5 :1
//             })
//         }
//     )
//     return <div ref={dragRef} style={{opacity, border:"1px solid black",padding:20, margin:20, cursor:"pointer"}}>
//         <div style={{padding:5}}>
//             {title}
//         </div>
//         <div style={{height:1,width:"100%",background:"black"}}></div>
//         <div style={{padding:5}}>
//             {description}
//         </div>
        
//     </div>
// }