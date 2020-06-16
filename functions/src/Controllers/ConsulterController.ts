import { insertConsulterToFirestore, getAllConsultersFromFirestore, getConsulterByIdFromFirestore, updateConsulterById  } from "../Services/ConsulterService";
import { Request, Response, NextFunction } from 'express';
​
export function insertConsulter(req:Request,res:Response,next:NextFunction){
    // const Consulter = new Consulter(req.body);
    insertConsulterToFirestore(req.body).then(value=>{
        res.status(201).send(value);
    }).catch(error=>{
        res.status(500).send(error);
    });
}
​
export function getConsulterById(req:Request,res:Response,next:NextFunction){
    getConsulterByIdFromFirestore(req.params.id)
        .then(value=>{res.status(200).send(value)})
        .catch(err=>{res.status(500).send(err)});
}
​
export function getConsulters(req:Request,res:Response,next:NextFunction){
    getAllConsultersFromFirestore().then(values=>{
        res.status(200).send(values);
    }).catch(error=>{
        res.send(error);
    });
}
​
export function updateConsulter(req:Request,res:Response,next:NextFunction){
    updateConsulterById(req.params.id,req.body)
    .then(value=>{res.status(204).send(value)})
    .catch(erro=>{res.status(400).send(erro)});
}