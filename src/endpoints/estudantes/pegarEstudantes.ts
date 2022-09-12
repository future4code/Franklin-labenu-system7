import { Request, Response } from "express";
import { Estudante } from "../../classes/Estudante";
import connection from "../../connection";
import { EstudanteDatabase } from "../../service/EstudanteDatabase";

export const pegarEstudantes = async (req:Request, res:Response) => {
    try{
     const result =  await new EstudanteDatabase().getEstudante(req.params.nome)
     res.status(200).send(result)
    }catch(error){
     res.statusCode = 400;
     res.send("Não conseguimos encontrar o estudante! Tente novamente!")
    }
 }