
import { initializeApp } from "firebase/app";
import {gerFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCym03oJQQNhE8Jp1OngdZ5NHBN0N-_qOA",
  authDomain: "react-multi-page-24bfe.firebaseapp.com",
  projectId: "react-multi-page-24bfe",
  storageBucket: "react-multi-page-24bfe.firebasestorage.app",
  messagingSenderId: "584706448348",
  appId: "1:584706448348:web:81134dc219c4232a918d19",
  measurementId: "G-SDPH7CRB11"
};


const app = initializeApp(firebaseConfig);
const firestore = gerFirestore(app)
