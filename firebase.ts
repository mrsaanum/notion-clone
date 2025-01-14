import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAW2mEh33-kSX7R3P_wuxi_qI_H4MK5ZZk",
  authDomain: "notion-clone-f86c7.firebaseapp.com",
  projectId: "notion-clone-f86c7",
  storageBucket: "notion-clone-f86c7.firebasestorage.app",
  messagingSenderId: "967734389623",
  appId: "1:967734389623:web:83f9632bbe00510a8ccf72"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db};