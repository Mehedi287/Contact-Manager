import { getFirestore } from "@firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAc3u8pyAH-LG1Stjhv22p3JmpcoSjR-BY",
    authDomain: "contact-manager-1aea3.firebaseapp.com",
    projectId: "contact-manager-1aea3",
    storageBucket: "contact-manager-1aea3.appspot.com",
    messagingSenderId: "801806399142",
    appId: "1:801806399142:web:a4924ce0ca85f692dae667",
    measurementId: "G-2ZDLM9P12S"
};
export default firebaseConfig;
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);