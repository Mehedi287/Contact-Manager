import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRoi_oFTnBTxzwuO2hRSEzeu8LvMCumfQ",
    authDomain: "contact-manager-15650.firebaseapp.com",
    projectId: "contact-manager-15650",
    storageBucket: "contact-manager-15650.appspot.com",
    messagingSenderId: "1039097468785",
    appId: "1:1039097468785:web:448e2cb63a77d1717f88d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
export default firebaseConfig;