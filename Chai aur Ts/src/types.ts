let drink="chai";         // this is inferencing: ts known by itself that it is string
let cups=Math.random() > 0.5 ?10 :5;

let flavour:string="masala";   // this is called annotation: we are specifying
let chaiorder:boolean=false;

console.log(cups, chaiorder);


function chai(Order:{type:'string'; sugar:'number'; strong:'boolean' }){
    console.log(Order);
}

// union and interface example
interface cupsize {
    size: 'small' | 'large'       // for complex object type
    // for hardcoded things we needed to declare variable
}
// in type this is called literal types

class Chai implements cupsize{
    size: 'small' | 'large' ='large';
}

// intersection
type BaseChai ={tealeaves:number}
type Masala={masala:number}

type Cahi= BaseChai & Masala;
const cup:Cahi={tealeaves:23,
    masala:23
}


// can be can't be
type user ={
    name:string;
    bio?: string
}

// readonly
type config ={
    readonly appName:string;
    version:number
}

const cfg: config ={ 
    appName: "Masterji",               // once set you can't change it again!!!
    version:1
}

cfg.appName("mayank");