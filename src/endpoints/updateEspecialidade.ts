import { Request, Response } from "express";
import { DocenteDatabase } from "../database/DocenteDatabase";

export const updateEspecialidade = async (req:Request, res:Response) => {
    const {id} = req.params;
    const especialidade_id = Number(req.body);

    try{
             
        if(!id) {
            res.send("Insira id e id da especialidade. Para cadastrar uma especialidade inexistente no banco, acesse outro endpoint.")
            return;
        }
        const userDatabase = new DocenteDatabase()
        const user =  await userDatabase.getEspecialidadeByUserById(id)
        if(user) {
            userDatabase.setEspecialidadeId(user.id, especialidade_id ) 
            res.status(201).send("Especialidades incluídas com sucesso!")
        }
           await userDatabase.criaEspecialidades(id, especialidade_id );
            res.status(201).send("Especialidades do docente cadastradas com sucesso.")

    }catch(error:any) {
        res.send(error)
        if(res.statusCode === 200) {
            res.status(500).send({message: "Internal server error"})
        }else {
            res.send({message: error.message})
        }
    }
    };