const chai={
    name:"masala chai",
    price: 20,
    isHot:true
}

let tea:{name:string; price: number; isHot:boolean}

// tea={
//     name
// }

//  alias object

type Tea={
    name:string;
    price:number;
    ingredients:string[]
}

let adrakchai:Tea={
    name:"adrak chai",
    price:34,
    ingredients:["lnog", "adrak", "tealeaver"]
}

let elachichai= {
    name:"elachi",
    price:23,
    ingredients:['long', "lasuun", "haek-thu"],
    cup:"medium"
}
// ts doesn't have any problems with extra values
adrakchai = elachichai
console.log(adrakchai);

// sometimes we want to have some values




// !!! how to split our data types - imp !!!
type Item={name:string; quantity:number}
type address={street:string; pin:number}

type order={
    id:string;
    items:Item[];
    address:address
}



// when want to update something
type chai={
    name:string;
    price:number;
    isHot?:boolean
}

const updatechai=(updates :Partial<chai>)=>{          // make any data type (T) optional
    console.log('updating chai with', updates);
}
updatechai({price:25});                  // adding something new
updatechai({isHot:false});              // updating previous value
updatechai({})

console.log(updatechai);


// we have used arrow function and stored it in a variable
const place=(order:Required<chai>)=>{         // means every T is mandatory
    console.log(order)
}
// function place(order: Required<chai>) {
//     console.log(order);
// }


place({
    name:"adrak",
     price:23, 
     isHot: true                        // needed even when ?: in type chai
})

type chaiinfor = Pick<chai, "name"|"price">;

const chaiinfo:chaiinfor={
    name:"lemaon tea",
    price:23
}

type chainew={
    name:string;
    price:number;
    secretIngridients:string;
}

type publicchai=Omit<chainew, "secretIngridients" >;          // means it will not show this property



// funcitons

function logChai():void{
    console.log("we are not returning anything, like error loggig")
}
function ordchai(type?:string){
     // setting defualt value
     if(type){
        console.log(`my chai is ${type}`)
     }
     else{
        console.log(`my chai is masala`)
     }
}
function ordchai2(type:string='masala'){
     // setting defualt value
     console.log(`my chai is ${type}`)
}

// complex object
function createChai(order:{
    type:string;
    sugar:number;
    size: 'large' | 'small'
}):number{
    return 4

}