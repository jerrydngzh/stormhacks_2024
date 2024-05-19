// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CollectionReference, DocumentData, QueryDocumentSnapshot, collection, getDocsFromServer, getFirestore, query } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store = getFirestore();

const storage = getStorage();

export interface fit{
    ID: string,
    type: string,
    tags: string[],
    pictureLink: string
}

const path = "closet";

export const getCollectionDocs = async (collectionRef : CollectionReference) => {
  let q = query(collectionRef);

  const clothes = await getDocsFromServer(q);

  let docs : DocumentData[] = [];

  clothes.forEach((doc) => {
    docs.push(doc);
  });

  return docs;
}

const docToCloth = (doc:DocumentData) => {
  // console.log(doc["_document"]["data"]["value"]["mapValue"]["fields"])
  const data = doc["_document"]["data"]["value"]["mapValue"]["fields"];
  let piece:fit = {
    ID: Math.random().toString(),
    type: data["type"],
    tags: data["tags"],
    pictureLink: data["picture"]["stringValue"]
  }
  return piece;
}

export const getClosetData = async () => {
    const clothes = await getCollectionDocs(collection(store, path));

    const info = clothes.map( async(docInfo) => {
      return docToCloth(docInfo)
    })

    const output = await Promise.all(info);

    console.log(output)
    return output as fit[];
}