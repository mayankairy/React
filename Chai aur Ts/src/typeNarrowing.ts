// you define what type of data you will get, 
// why needed - because you get options that are available

function getChai(kind:string |number){
    if(typeof kind==="string"){
        return `serving ${kind}`;
    }
    else{
        return `chai order: ${kind}`
    }
}

function chai(msg?:string){
    if(msg){
        return `your chai is ${msg}`
    }
    return "your default masala chai"
}

chai();

function orderChai(size:'small'|'medium'|'large'|number){
    if(size==='small'){
        return `you cuttin chai`
    }
    else if(size ==='large' || size ==='medium' ){
        return 'your extra chai'
    }
    return `total cups# ${size}`
}


//type guard // safety guards for production code
class Cutting{
    serve(){
        return `your cutting`
    }
}
class Kulhad{
    serve(){
        return `your kulhad`
    }
}

function serve(chai:Cutting|Kulhad){
    if(chai instanceof Kulhad){
        return chai.serve();
    }
    if(chai instanceof Cutting){
        chai.serve();
        return
    }
}
// best practice - tells where we get from (chai)

type chaiOrder={
    type:string,
    sugar:number
}

function ischaiorder(obj:any):obj is chaiOrder{
    return(
        typeof obj=== 'object' && obj!==null
        && typeof obj.type==="string" 
        && typeof obj.sugar ==='number'
    )
}

function serveorder(item:chaiOrder |string){
    if(ischaiorder(item)){
        return `serving ${item.type} with ${item.sugar} spoon sugar`
    }

    return `serving ${item} tea`
}

// aeroplance example
type businessman={ type:'elite', food:'served', alcohol:'served',service:boolean};
type premium={ type:'premium', food:'served', service:boolean};
type economy={ type:'poor', service:boolean};

type traveller= businessman | premium | economy

function travelling(man:traveller){
    switch(man.type){
        case "premium":
            return `Premium economy`

        case "elite":
            return `Technical guruji`

        case "poor":
            return `gareebo`
    }
}



