import {useDrop} from 'react-dnd'
export function BoardsSection(props:any){
    const [{},drop]=useDrop({
        accept:['card'],
        drop:props.onDrop,
        // collect: (monitor)=>({
        //     isOver: monitor.isOver(),
        //     canDrop:monitor.canDrop()
        // })

    })
    return <div ref={drop} style={{display:"flex",justifyContent:"center",alignItems:"center", 
    padding:"10px 10px 10px 10px", margin:"5px 5px 5px 5px", }}>
    {/* backgroundColor: isOver? "green": canDrop? "red":"gray" }}> */}

        {props.children}
    </div>
}