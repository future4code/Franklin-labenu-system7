import { Request, Response } from "express"
import { TurmaDatabase } from "../service/TurmaDatabase"

export const updateModulo = async (req:Request, res:Response) => {
    const {id, modulo} = req.body
    try{

    }
    catch(error){
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}

export const getTurmas = async (req:Request, res:Response) => {
    const {nome} = req.params
    try{
        if(!nome) {
            const result =  await new TurmaDatabase().getAllTurmas()
            res.status(200).send(result)
        }
        const result = await new TurmaDatabase().getTurmaByNome(nome)
        res.status(200).send(result)

    }catch(error){
        res.statusCode = 500;
        console.log(error)
        res.send("An unexpected error occurred. Sorry!")
    }
}
