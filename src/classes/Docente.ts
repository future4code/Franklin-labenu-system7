import { Usuario } from "./Usuario";

export class Docente extends Usuario{
    especialidades:string[];
    constructor(
        id:string,
        nome:string,
        email:string,
        data_nasc:Date, 
        especialidades:string[]){
            super(id, nome, email, data_nasc)
            this.especialidades = especialidades
        }
    public getEspecialidades():string[]{
        return this.especialidades
    }
    public setEspecialidades(especialidades:string[]):void{
        this.especialidades = especialidades
    }

}