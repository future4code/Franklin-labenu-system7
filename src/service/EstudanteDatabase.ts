import { Estudante } from "../classes/Estudante";
import connection from "../connection";

export class EstudanteDatabase {

    public async getEstudante(nome: string):Promise<Estudante[]>{
        
        const result = await connection
        .select("*")
        .from('Estudante as e')
        .where('e.nome', 'LIKE', `%${nome}%`);

        return result

    }

}