// // OOP CONCEPTS

class Chai1 {
    flavour:string;
    price:number

    constructor(flavour:string, price:number){
        this.flavour=flavour
        this.price=price
        console.log(this)     // tells who is using this, here mc
    }
    
}

const mc=new Chai1('ginger',23);




// access modifiers

class Chai{
    public flavour:string='masala';

    private secret='elachai'              // private accessible in the same class only
    reveal(){                          // private needs a method to reveal that
        return this.secret
    }

}

const c=new Chai()
c.reveal();                  // to get secret

class Shop{
    protected shopName= 'chai corner'                   //  staff Door- within class or if nay inherited

}

class Branch extends Shop{
    getName(){
        return this.shopName
    }

    #anotherName='coffee corner'           // way to write protected
    getShop(){
        return this.#anotherName
    }
}
new Branch().getName()               // to access protected element
new Branch().getShop()


class Cup{
    readonly capacity:number=250            //can't be changed lateron

    constructor(capacity:number){
        this.capacity= capacity
    }
}


// getters and setters

class ModernChai{
    private _sugar=2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value>5) throw new Error("too sweet")
            this._sugar=value;
    }
}
const c1=new ModernChai()
c1.sugar =3


// static methods

class EkChai{
    static shpName='chai our coffee'

    constructor(public flavour:string){}
}
console.log(EkChai.shpName)           // static is directly accessed through class name


abstract class Drink{              // when we don't want to make object out of that class- abstract
    abstract make():void
}

class Mychai extends Drink{
    make(){
        console.log('vreqign chai')
    }
}


// composition concept
class Heater{
    heat(){}
    cool(){}
}

class ChaiMaker{
    constructor(private heater:Heater){}
    make(){
        this.heater.heat;
    }
    destroy(){
        this.heater.cool;
    }
}


