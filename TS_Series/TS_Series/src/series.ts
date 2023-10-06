export class series{
    title: string;
    episode: number;
    director: string;
    constructor(title: string, episode: number, director: string){
        if(title.trim() == '' || title == null){
            throw new Error("The title cannot be empty!");
        }else{
            this.title = title;
        }
        if(episode < 0 || isNaN(episode)){
            throw new Error("The episode cannot be lower than zero!");
        }else{
            this.episode = episode;
        }
        if(director.trim() == '' || director == null){
            throw new Error("The director cannot be empty!");
        }else{
            this.director = director;
        }
    }
    toString() : string{
        return `${this.title} - episode: ${this.episode}\nDirector: ${this.director}`;
    }
}