let subs: number | string =1;        // union

let apiRequestStatus: 'pending' | 'success' | 'error' ='pending';
apiRequestStatus='success';

let airlineSeat: 'window' | 'side' | 'middle' ='window';

const orders:string[]=['23','324','43'];

let currentorder:string|undefined;
for(let order of orders){
    if(order==='234'){
        currentorder=order;
        break;
    }
}
console.log(currentorder);

let mobile:unknown;

console.log('hello')

