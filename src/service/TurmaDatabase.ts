import { Modulo, Turma } from "../classes/Turma";
import connection from "../connection";

export class TurmaDatabase{
    tableName:string = "Turma";

    public async createTurma(nome:string, modulo:string):Promise<void>{
        await connection
        .insert({nome, modulo})
        .into(this.tableName)
    }
    public async getTurmaByNome(nome:string):Promise<Turma>{
        const result = await connection
        .select("*")
        .from('Turma as t')
        .where('t.nome', '=', `${nome}`)

        return result[0]
    }
    public async getAllTurmas():Promise<Turma[]> {
        const result = await connection
        .select("*")
        .from(this.tableName)

        return result
    }
    public async mudaModulo(nome:string, modulo:Modulo):Promise<void>{
        await connection
        .update({modulo})
        .from('Turma as t')
        .where('t.nome', '=', `${nome}`)
    }
}