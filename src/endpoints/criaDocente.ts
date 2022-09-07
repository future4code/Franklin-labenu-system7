import { Request, Response } from "express";
import { DocenteDatabase } from "../database/DocenteDatabase";
import { Docente } from "../classes/Docente";
import Authenticator from "../service/Authenticator";
import { IdGenerator } from "../service/IdGenerator";
import { authenticationData } from "../types";

export const criaDocente = async (req:Request, res:Response) => {
    const id:string = new IdGenerator().generateId();
    const {nome, email, data_nasc, especialidades} = req.body;
    const newUser:Docente = new Docente(id, nome, email, data_nasc, especialidades);
    try{
             
        if(!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            res.send("Preencha com um email válido.")
            return;
        }
        const user =  await new DocenteDatabase().getUserByEmail(email)
        if(user) {
            return res
            .status(409)
            .send('Email já cadastrado.')
            
        }
        if(!nome || !data_nasc ) {
            res.send("Insira todos os dados")
            return
        }
        const payload:authenticationData = {id:newUser.id}
        const token = new Authenticator().generateToken(payload);
        const userDatabase = new DocenteDatabase()

        await  userDatabase.createUser(id, nome, email, data_nasc, especialidades)
            res.status(201).send({ token })

    }catch(error:any) {
        res.send(error)
        if(res.statusCode === 200) {
            res.status(500).send({message: "Internal server error"})
        }else {
            res.send({message: error.message})
        }
    }
    };
