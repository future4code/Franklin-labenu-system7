import { Usuario } from "./Usuario";

export class Estudante extends Usuario {
    hobbies: string[];

    constructor(
        nome: string,
        email: string,
        data_nasc: Date,
        hobbies: string[]
    ) {
        super(nome, email, data_nasc)
        this.hobbies = hobbies;
    }

    public getHobbies(): string[] {
        return this.hobbies;
    };
}