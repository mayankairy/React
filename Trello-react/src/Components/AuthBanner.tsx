
export function AuthBanner(){
    return <div style={{backgroundColor:"#2b2e30",minHeight:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
        {/* align Itmes is to vertically center */}
        <div>
            <img alt="trello" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLuQNrxQrOwCozbrKAT35mEAXXk2ANNEBJg&s" style={{}} />
            <h1 style={{color:"white", fontFamily: "Roboto", fontWeight:400, fontSize:30}}>Build the boards, get your work done!</h1>
        </div>
    </div>
}