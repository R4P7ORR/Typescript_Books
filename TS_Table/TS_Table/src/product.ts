export class product{
    name: string;
    price: number;
    code: string;
    constructor(name: string, price: number, code: string){
        if(name.trim() == "" || name.length == 0){
            throw new Error("The name CANNOT be empty!");
        }else{
            this.name = name;
        }
        if(price < 100 ||isNaN(price)){
            throw new Error("The price MUST be greater than 100!");
        }else{
            this.price = price;
        }
        if(code.length != 11){
            throw new Error("The product code MUST consist of 11 numbers!")
        }else{
            this.code = code;
        }
    }
}