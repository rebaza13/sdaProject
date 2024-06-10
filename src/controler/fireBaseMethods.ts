import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { db } from "../firebase/firebase";
import {auth}from "../firebase/firebase"
import { doc, setDoc, updateDoc, deleteDoc, addDoc, getDoc, getDocs, collection } from "firebase/firestore";
import { useMainStore } from "../store/MainStore";
// methods


import { query, where,  limit } from "firebase/firestore";

export const getSingleDocumentByQuery = async (collectionName:string, queryField:string, queryValue:string) => {
  try {
    const q = query(collection(db, collectionName), where(queryField, "==", queryValue), limit(1));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      console.log(`Document data:`, doc.data());
      return {...doc.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document by query: ", error);
    throw error;
  }
};



export const getDocumentsByQuery = async (collectionName:string, queryField:string, queryValue:string) => {
  try {
    const q = query(collection(db, collectionName), where(queryField, "==", queryValue));
    const querySnapshot = await getDocs(q);
    let documents :any = [];
    querySnapshot.forEach((doc) => {
      documents.push({  ...doc.data() });
    });
    console.log(`Documents in ${collectionName} with ${queryField} == ${queryValue}:`, documents);
    return documents;
  } catch (error) {
    console.error("Error getting documents by query: ", error);
    throw error;
  }
};

// Add a new user to Firestore
export const addUserToFirestore = async (userId:string, userData:object) => {
    try {
      await setDoc(doc(db, "users", userId), userData);
      console.log("User added to Firestore");
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  // Sign in an existing user with Firebase Auth
export const loginUser = async (email:string, password:string) => {
  const mainStore = useMainStore()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      let selectedRole 
     const collectUser = await getCollection('users')
     collectUser.forEach((object:any)=>{
      if(object.id === user.uid){
        selectedRole =object.role
      }
     })
      mainStore.user = {
        role: selectedRole,
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,
        uid: user.uid  
      }
      window.localStorage.setItem('#user',JSON.stringify(mainStore.user))
      console.log("User signed in: ", {...user});
      return user;
    } catch (error) {
      console.error("Error signing in: ", error);
      throw error;
    }
  };

  // Register a new user with Firebase Auth
export const registerUser = async (email:string, password:string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User registered: ", user);
      return user;
    } catch (error) {
      console.error("Error registering user: ", error);
      throw error;
    }
  };

  // Set a document with a specified ID
export const setDocument = async (collectionName:string, documentId:string, data:object) => {
    try {
      await setDoc(doc(db, collectionName, documentId), data);
      console.log(`Document set in ${collectionName} with ID: ${documentId}`);
    } catch (error) {
      console.error("Error setting document: ", error);
    }
  };

  // Set a document with a random ID
export const setDocumentWithRandomId = async (collectionName:string, data:object) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log(`Document added to ${collectionName} with ID: ${docRef.id}`);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

// Update a document
  export const updateDocument = async (collectionName:string, documentId:string, data:object) => {
    try {
      const docRef = doc(db, collectionName, documentId);
      await updateDoc(docRef, data);
      console.log(`Document in ${collectionName} with ID: ${documentId} updated`);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  
// Delete a document
export const deleteDocument = async (collectionName:string, documentId:string) => {
    try {
      await deleteDoc(doc(db, collectionName, documentId));
      console.log(`Document in ${collectionName} with ID: ${documentId} deleted`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
// Get a document by ID
  export const getDocument = async (collectionName:string, documentId:string) => {
    try {
      console.log('jere is the ',documentId)
      const docRef = doc(db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(`Document data:`, docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document: ", error);
    }
  };

  // Get all documents in a collection
export const getCollection = async (collectionName:string) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const documents :any = [];
      querySnapshot.forEach((doc) => {
        documents.push({ documentId: doc.id, ...doc.data() });
      });
      console.log(`Documents in ${collectionName}:`, documents);
      return documents;
    } catch (error) {
      console.error("Error getting collection: ", error);
    }
  };