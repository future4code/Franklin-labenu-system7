import { Request, Response } from "express";
import { Estudante } from "../../classes/Estudante";
import connection from "../../connection";

export const criaEstudante = async (req: Request, res: Response) => {
    try{
        const {id ,nome, email, data_nasc} = req.body

        let novoEstudante = new Estudante(id, nome, email, data_nasc);

        await connection('Estudante').insert({id, nome, email, data_nasc});

        res.status(200).send("Estudante adicionado com sucesso!");
    }

    catch(error: any) {
        res.status(400).send("Ops! Algo está errado!")
        if(error.message = "Falta a data de nascimento!") {
            res.status(400).send({message:error.message});
        } 
        console.log(error.message);
    }
}