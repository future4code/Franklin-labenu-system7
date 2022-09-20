import { Request, Response } from "express";
import { DocenteDatabase } from "../service/DocenteDatabase";

export const updateDocente = async (req:Request, res:Response) => {
    const id = req.params.id;
    const especialidade_id = Number(req.body.especialidade_id); /*erro NaN quando o campo está preenchido */
    const turma_id = Number(req.body.turma_id)

    try{
             
        if(!id) {
            res.send("Insira id e id da especialidade. Para cadastrar uma especialidade inexistente no banco, acesse outro endpoint.")
            return;
        }

        if(!especialidade_id && !turma_id) {
            res.send("Informe os dados que deseja inserir: 'especialidade_id' ou 'turma_id'")
            return
        }

        if(especialidade_id){
            const userDatabase = new DocenteDatabase()
            const user =  await userDatabase.getEspecialidadeByUserById(id)
            if(user) {
                userDatabase.setEspecialidadeId(id, especialidade_id ) 
                res.status(201).send("Especialidades incluídas com sucesso!")
            }else{
                await userDatabase.criaEspecialidades(id, especialidade_id );
                res.status(201).send("Especialidades do docente cadastradas com sucesso.")}
        }

        if(turma_id){
            const userDatabase = new DocenteDatabase()
            const user = await userDatabase.getUserById(id)
            if(!user){
                res.status(404).send("Id de usuário não localizado.")
            }               
                await userDatabase.setTurma(id, turma_id)
                return res
                .status(201).send("Turma do docente alterada com sucesso")
        }
        return res.send("Fim da requisição")
    }catch(error:any) {
        res.send(error)
        if(res.statusCode === 200) {
            res.status(500).send({message: "Internal server error"})
        }else {
            res.send({message: error.message})
        }
    }
    };