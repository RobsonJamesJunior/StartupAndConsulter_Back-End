import * as admin from "firebase-admin";
import { Consulter } from "../Models/Consulter";
import { Firestore, DocumentReference, DocumentSnapshot} from "@google-cloud/firestore"

export function getConsulterByIdFromFirestore(idOfConsulter:string):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db:Firestore = admin.firestore();
        db.collection("Consulters").doc(idOfConsulter).get().then((document:DocumentSnapshot)=>{
            if(document.exists){
                const dataOfDoc     = document.data();
                const docConsulter  = new Consulter(dataOfDoc);
                docConsulter.id     = document.id;
                resolve(docConsulter);
            }else{
                reject(document);
            }
        }).catch(err=>{
            reject(err);
        });
    });
}
​
export function getAllConsultersFromFirestore():Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Consulters").get().then(snapshot=>{
            const listOfConsulters = Array<any>();
            for (const doc of snapshot.docs) {
                const consulter = new Consulter(doc.data());
                consulter.id    = doc.id;
                listOfConsulters.push(consulter);
            }
            resolve(listOfConsulters);
        }).catch(error=>{
            reject(error);
        });
    });
}
​
export function insertConsulterToFirestore(consulter: any):Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Consulters").add(consulter)
            .then((snapshot:DocumentReference)=>{
            snapshot.get().then((value:DocumentSnapshot)=>{
                const doc = new Consulter(value.data());
                doc.id    = value.id;
                resolve(doc);
            }).catch(error=>{
                reject(error);
            });
        }).catch(error=>{
            reject(error);
        });
        }
    );
}

export function updateConsulterById(idOfConsulter:any,updates:any):Promise<any>{
    return new Promise<any>((resolve,reject)=>{
        const db = admin.firestore();
        db.collection("Consulters").doc(idOfConsulter).update(updates)
        .then(result=>{resolve(result);})
        .catch(error=>{reject(error)});
    });
}