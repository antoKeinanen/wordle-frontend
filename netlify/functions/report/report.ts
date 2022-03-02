import { Handler } from '@netlify/functions'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const handler: Handler = async (event, context) => {
    const {word} = event.queryStringParameters

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

    if (!word) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: `Please specify word`,
            }),
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Reported word: ${word}!`,
        }),
    }
}
