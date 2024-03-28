import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR31l7t9r2Tm6b7GoTCzfwHUudeNPFR1w",
  authDomain: "twitter-reloaded-48c2f.firebaseapp.com",
  projectId: "twitter-reloaded-48c2f",
  storageBucket: "twitter-reloaded-48c2f.appspot.com",
  messagingSenderId: "274065091170",
  appId: "1:274065091170:web:02c9299cf1fdf065ab7f3b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
