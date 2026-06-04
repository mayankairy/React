

export function Button(props:any){
    return <div onClick={props.onClick} style={{display:"flex",justifyContent:"center",alignItems:"center", cursor:"pointer", border:"1px solid black", borderRadius:50,backgroundColor:"#2885e3", width:"100px", height:"35px"}}>
        <b>{props.children}</b>
    </div>
}