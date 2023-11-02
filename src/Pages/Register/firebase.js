import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgkOdi7dYd_PVIS2d0CW-07jHgJW9n-mE",
  authDomain: "chat-fa3af.firebaseapp.com",
  projectId: "chat-fa3af",
  storageBucket: "chat-fa3af.appspot.com",
  messagingSenderId: "503420831855",
  appId: "1:503420831855:web:4ea2bd0f4ad66ac8b7659a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()