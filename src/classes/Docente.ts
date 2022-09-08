import { Usuario } from "./Usuario";

type Especialidades = {
    especialidades:string[];
}
export class Docente extends Usuario{
    especialidades?:Especialidades;
    constructor(
        id:string,
        nome:string,
        email:string,
        data_nasc:Date){
            super(id, nome, email, data_nasc)
        }
    public setTurmaId(turma_id: number): void {
       this.setTurmaId(turma_id)
    }
    public setEspecialidade(especialidades:Especialidades){
        this.especialidades = especialidades
    }

}

