export class Film{
    name:string;
    company: string;
    date:Date;
    like:number;
    constructor(name, company){
        this.name = name;
        this.company = company;
        this.date = new Date();
        this.like = 0;
    }
}