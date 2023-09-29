import { User } from "./User";

export class DBUser implements User{
    id: number;
    nev: string;
    eletkor: number = 0;
    haziallat = "Cirmos";

    constructor(id: number, nev: string){
        this.id = id;
        this.nev = nev;
    }

    szuletesnap() : void{
        this.eletkor++;
    }
}