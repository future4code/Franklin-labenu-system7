import { Docente, Especialidades } from "../classes/Docente";
import { Usuario } from "../classes/Usuario";
import connection from "../connection";


export class DocenteDatabase {

    tableName: string = "Docente";

    public async createUser(
        id:string,
        nome:string,
        email:string,
        data_nasc:Date){
        await connection
         .insert({id, nome, email, data_nasc})
         .into(this.tableName)  
     }
     public async getUserByEmail(email:string): Promise<Usuario> {
        const result = await connection
        .select("*")
        .from(this.tableName)
        .where({ email });

        return result[0]
    }
    public async getUserById(id:string): Promise<Usuario>{
        const result = await connection
        .select("*")
        .from(this.tableName)
        .where("id", "=", `${id}`);

        return result[0]
    };

    public async getAll():Promise<Docente[]>{
        const result = await connection
        .select("*")
        .from(this.tableName)
        
        return result
        
    }
    public async getEspecialidadeByUserById(id:string): Promise<Especialidades>{
        const result = await connection
        .select("*")
        .from('Docente_Especialidade')
        .where({ id });

        return result[0]
    };
    public async criaEspecialidades(id:string, especialidade_id:number):Promise<void>{
        await connection
        .insert({docente_id:id, especialidade_id:especialidade_id })
        .into('Docente_Especialidade')
    }

    public async setEspecialidadeId(id:string, especialidade_id:number):Promise<void>{
        await connection
        .update({especialidade_id: especialidade_id })
        .from('Docente_Especialidade as de')
        .where('de.docente_id', '=', `${id}`)

    }
    public async setTurma(id:string, turma_id:number) {
        await connection
        .update({turma_id: turma_id})
        .from(this.tableName)
        .where('id', '=', `${id}`)
    }
}