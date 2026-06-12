
// ways to write array
const chaiFlavours:string[]=['masala','adrak','234'];
const chaiPrice:number[]=[23,45,7]
const rating:Array<number>=[2,5,7]


// array of object
type Chai={name:string;
    price:number
}

const menu:Chai[]=[
    {name:'masala',price:31},
    {name:'adrak',price:21}
]

const cities:readonly string[]=['delhi','pune']
//can't push anything later

const table:number[][]=[
    [2,45,67],
    [21,45,76]
]

let chaituple:[string,number];
chaituple=['masala',23];
chaituple.push('hello')              // because tuple is a array at last
// in the end tuple is conoverted to array


enum cupsize {
    small,                      // on caps         // we also write const enum sugar { }
    medium,
    large
}

const size=cupsize.small;
