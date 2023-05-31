import { User } from './user';

export class Subscription {
    id: number;
    name: string;
    startingDate: string;
    endingDate: string;
    user = new User();

    constructor(){
        this.id = 0;
        this.name= "";
        this.startingDate="";
        this.endingDate= "";
    }
}