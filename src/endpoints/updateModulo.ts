import { Request, Response } from "express"
import { TurmaDatabase } from "../service/TurmaDatabase"

export const updateModulo = async (req:Request, res:Response) => {
    const {nome, modulo} = req.body
    try{
        if(!nome || !modulo){
            res.send("Insira nome da turma e nome do módulo.")
            return;
        }
        const turma = await new TurmaDatabase().getTurmaByNome(nome)
        if(!turma){
            return res
            .status(404)
            .send(`Turma ${nome} não localizada.`)
        }
        await new TurmaDatabase().mudaModulo(nome, modulo)
        res.status(201).send({message: "Módulo atualizado com sucesso"})   
    }
    catch(error){
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
};

export const getTurmas = async (req:Request, res:Response) => {
    const {nome} = req.params
    try{
        const turma = await new TurmaDatabase().getTurmaByNome(nome)
        if(turma) {
           return res.status(200).send(turma)
        }
        const result =  await new TurmaDatabase().getAllTurmas()
        res.status(200).send(result)

    }catch(error){
        res.statusCode = 500;
        console.log(error)
        res.send("An unexpected error occurred. Sorry!")
    }
};
