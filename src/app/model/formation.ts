import { User } from './user';

export class Formation {
    id: number;
    title: string;
    users = new Set<User>();

    constructor(){
        this.id = 0;
        this.title= "";
    }
}