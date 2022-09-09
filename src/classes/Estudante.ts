import { Usuario } from "./Usuario";

type Hobbies = {
    hobbies:string[];

}

export class Estudante extends Usuario {
    hobbies?:Hobbies;
    turma_id?:number;

    constructor(
        id: string,
        nome:string,
        email:string,
        data_nasc:Date
    ) {
        super(id, nome, email, data_nasc)
    }

    public getHobbies(hobbies:Hobbies){
        return this.hobbies = hobbies;
    };
}