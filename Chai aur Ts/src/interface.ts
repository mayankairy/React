// defines structuree
interface Chai {
    type:string;
    price:number;
    milk?:number;
}

const masala:Chai={type:"masla", price:23}

interface discount{
    (price:number):number
}
const apply50:discount= (p)=> p*0.23;

interface Machine {
    start():void;
    stop():void                   // or put ? to make it optional
}

const teaM:Machine={
    start(){
        console.log("they just need to be here, weather they are doing something or not")
    },
    stop(){
        console.log("because of interface properties")
    }
}

// const teaM: Partial<Machine> = {                            // or Pick method
//     start() { console.log("Starting..."); }
// };


// index signature
interface rating{
    [flavour:string]:number
}

const chai:rating= {
    masala:43,
    ginger:22,
}

interface User{
    name:string          // one we imported from library
}
interface User{
    age:number
}

const user:User={           // both interface gets merged
    name:"Mayank",
    age:21
}

interface A {a:string}
interface B {b:string}
interface C extends A,B{}





//      Generics
function wrapinArray<T>(item:T):T[]{
    return [item]
}
wrapinArray("masala");
wrapinArray(21);
wrapinArray({flavour:"Ginger"});            // used when making libraries

function pair<A,B>(a:A,b:B):[A,B]{
    // can't return B,A
    return [a,b]
}
pair("masala","ginger");
pair("ismei tera ghata",{type:"generic will take care of it, how to insert data"})


// generic interface
interface Box<T>{
    content:T
}

const numbox:Box<string>={
    content:"23"                    // content have to be the type T
}       
const numbox1:Box<number>={
    content:23
}

// Partial/omit/pick    : generic allows this

interface ApiPromise<T>{
    status:number,
    data:T
}

const res:ApiPromise<{flavour:string}>={
    status:200,
    data:{flavour:"masala"}
}
// we have pre-defined generics