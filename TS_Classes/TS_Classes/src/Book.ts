export class Book{
    name: string;
    rating: number;
    constructor(name: string, rating: number){
        this.name = name;
        if(rating<1 || rating>10){
            throw new Error("Az értékelés csak 1 és 10 közötti szám lehet!");            
        }else{
            this.rating = rating;
        }
    }
    toString() : string{
        return "Cím: " + this.name + "  Értékelés: " + this.rating;
    }
    
}