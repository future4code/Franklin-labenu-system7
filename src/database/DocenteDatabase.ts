import { Usuario } from "../classes/Usuario";
import connection from "../connection";


export class DocenteDatabase {

    tableName: string = "Docente";

    public async createUser(id:string,
        nome:string,
        email:string,
        data_nasc:Date, 
        especialidades:string[]){
        await connection
         .insert({id, nome, email, data_nasc, especialidades})
         .into(this.tableName)  
     }
     public async getUserByEmail(email:string): Promise<Usuario> {
        const result = await connection
        .select("*")
        .from(this.tableName)
        .where({ email });

        return result[0]
    }

}