import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEOIQ9wsjHY5GxTG7PIOqLDZzKUrUv-fI",
  authDomain: "salon-citas-piloto.firebaseapp.com",
  projectId: "salon-citas-piloto",
  storageBucket: "salon-citas-piloto.firebasestorage.app",
  messagingSenderId: "322452978480",
  appId: "1:322452978480:web:59cb4121a52166d70526f5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
