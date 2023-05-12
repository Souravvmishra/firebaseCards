
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCZ6tBy8eOSb9xXW9c54qiurQXBDHZ437k",
    authDomain: "cardgenerator02.firebaseapp.com",
    projectId: "cardgenerator02",
    storageBucket: "cardgenerator02.appspot.com",
    messagingSenderId: "694295234960",
    appId: "1:694295234960:web:7e9187f3d441cd9816cb15",
    measurementId: "G-GWS556FTSY"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
