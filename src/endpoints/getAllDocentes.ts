import { Request, Response } from "express";
import { DocenteDatabase } from "../database/DocenteDatabase";

export const getAllDocentes = async (req:Request, res:Response) => {
   try{
    const result =  await new DocenteDatabase().getAll()
    res.status(200).send(result)
}catch(error){
    res.statusCode = 500;
    console.log
    res.send(error)
}
}