import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    orderBy,
   /*  getDoc,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
    where, */
  } from "firebase/firestore/lite";
  

//Configuraciones iniciales para la conexión con firebase
const firebaseConfig = {
    apiKey: "AIzaSyBfHwORNyJu_6s69U802h4pVFxI8MSwqdo",
    authDomain: "portafolio-6539d.firebaseapp.com",
    projectId: "portafolio-6539d",
    storageBucket: "portafolio-6539d.appspot.com",
    messagingSenderId: "162897855556",
    appId: "1:162897855556:web:cd0a59b6c37ecf46842811",
    measurementId: "G-Z03XXWV63V"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  //// Funciones ////
export const leer_proyectos = async() => {
    try {
      const q = query(collection(db, "proyectos"),orderBy("relevancia"))
      // Fetch all documents from the "usuarios" collection
      const querySnapshot = await getDocs(q);
  
    
        // Extract data from each document and store in an array
        const coleccionArray = querySnapshot.docs.map((doc) => doc.data());
        const id_Arrays = querySnapshot.docs.map((doc) => doc.id);
        const coleccionCompleta = coleccionArray.map((obj, index) => {
          return { ...obj, id: id_Arrays[index] };
        });
    
        // Return the array of usuarios data
        return coleccionCompleta;
      } catch (error) {
        console.error("Error fetching usuarios:", error);
        return []; // Return an empty array in case of error
      }
    
}