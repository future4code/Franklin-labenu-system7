import { Request, Response } from "express";
import { EstudanteDatabase } from "../../service/EstudanteDatabase";

export const pegarEstudantes = async (req:Request, res:Response) => {
    try{
     const result =  await new EstudanteDatabase().getEstudante(req.params.nome)
     if(result.length == 0){
        throw new Error("Não conseguimos encontrar o estudante! Tente novamente!")
     }
     res.status(200).send(result)
    }catch(error: any){
     res.statusCode = 400;
     res.send({message: error.message})
    }
 }