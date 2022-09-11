import { Request, Response } from "express";
import { Modulo } from "../classes/Turma";
import { TurmaDatabase } from "../service/TurmaDatabase";

export const createTurma = async (req:Request, res:Response) => {
    const {nome} = req.body
    const moduloDefault:Modulo = Modulo.DEFAULT

    try{
        if(!nome) {
           return res.status(422).send("Informe o nome da turma")
        }
        const turma = await new TurmaDatabase().getTurmaByNome(nome)
        if(turma){
           return res
            .send(`Turma ${nome} já cadastrada.`)
        }
        // const newTurma:Turma = new Turma(nome, moduloDefault);
        await new TurmaDatabase().createTurma(nome, moduloDefault);
        res.status(201).send("Turma criada com sucesso")

    }catch(error){
        console.log(error)
        res.status(500).send({message: "Unexpected error occurred"})
    }
}