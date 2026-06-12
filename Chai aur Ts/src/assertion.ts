//       Assertion , Type:unknown and never


let response:any='43';

// forcefull assertion
let numericlenght:number= (response as string).length;

type book={
    name:string
}

let bookString='{"name":"who moved my cheese"}'        // JSON- javascript OBJECT NOTATION
// local strorage have it as a string, we need to parse JSON to get 
let bookstorage= JSON.parse(bookString) as book       // javascript OBJECT notation
// beleive me its type is book - as book

console.log(bookstorage.name)

// to tell the data type, because ts don't know about the data type
const inputElement=document.getElementById("username") as HTMLInputElement;



let value:unknown
value="chai";
value=[23,23,62,2]
value=2.3;

// solution type guard

if(typeof value==="string"){
    value.toUpperCase();
}


try {

}
catch(error){
    if(error instanceof Error){        // it says if error is instance of Error class than message is already under this
        console.log(error.message)
    }
    console.log(error);
}


// when adding data 
const data:unknown= "it can be from anywhere, db,mb";
const strdata:string=data as string;

type Role ='admin' | 'user' | 'superadmin';
function redirect(role:Role):void{
    if(role==='admin'){
        console.log('redirecting to admin page')
        return
    }
    if(role==='user'){
        console.log('redirecting to user page')
        return
    }
    role;        // type never, it is for future purpose like if we want to add any other user, if on other file

}

function neverReturn():never{
    while(true){
        // servers are constant running loop
    }
}