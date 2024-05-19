import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APP_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const cloudStorage = getStorage(app);

const FBContext = createContext({});

export function useFirebase() {
  return useContext(FBContext);
}

export function FirebaseProvider(props: { children: any }) {
  const value = { app, firestore, cloudStorage };
  return <FBContext.Provider value={value}>{props.children}</FBContext.Provider>;
}
