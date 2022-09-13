import { Request, Response } from "express";
import connection from "../../connection";
import { IdGenerator } from "../../service/IdGenerator";

export const criaEstudante = async (req: Request, res: Response) => {
    try{
        const {nome, email, data_nasc} = req.body
        if(!nome){
            throw new Error("Você esqueceu de adicionar o seu nome!")
        }
        if(!email){
            throw new Error("Você esqueceu de adicionar o seu email!")
        }
        if(!data_nasc){
            throw new Error("Você esqueceu de adicionar a sua data de nascimento!")
        }
        const id:string = new IdGenerator().generateId();
        await connection
        .insert({id, nome, email, data_nasc})
        .into('Estudante');
        res.status(200).send("Estudante adicionado com sucesso!");
    }

    catch(error: any) {
        res.status(400).send({message: error.message}) 
    }
}