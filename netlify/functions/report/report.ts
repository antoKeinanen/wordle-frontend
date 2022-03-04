import { Handler } from '@netlify/functions'
import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore} from "firebase/firestore"


export const handler: Handler = async (event, context) => {
    const {word} = event.queryStringParameters

    if(!word || word.length !== 5){
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: `Please specify word\n`,
            }),
        }
    }

    const firebaseConfig = {
        apiKey: "AIzaSyBDnQxSVlQ_hklRqzbtBIppq6aCmYWFklo",
        authDomain: "wordle-fi.firebaseapp.com",      
        projectId: "wordle-fi",      
        storageBucket: "wordle-fi.appspot.com",      
        messagingSenderId: "782134437406",      
        appId: "1:782134437406:web:1c025088650bd6f55bb00f",      
        measurementId: "G-CDNF8BN393"
    }

    const app = initializeApp(firebaseConfig)
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "reported"), {
        word: word
    })

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Reported word: ${word}! and added to database with id ${docRef.id}\n`,
        }),
    }
}
