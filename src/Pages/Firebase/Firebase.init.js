import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const firebaseAthuncation = () => {
    initializeApp(firebaseConfig)
};
export default firebaseAthuncation;