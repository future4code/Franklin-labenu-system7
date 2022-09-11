import { Request, Response } from "express"
import { TurmaDatabase } from "../service/TurmaDatabase"

export const turmasAtivas = async (req:Request, res:Response) => {
    try{
        const result = await new TurmaDatabase().getTurmasAtivas()
        res.status(200).send(result)
    }
    catch(error){
        console.log(error)
        res.send("An unexpected error occurred")
    }
}