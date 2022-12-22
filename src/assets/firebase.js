// sdk firebase
import { initializeApp } from "firebase/app";
//creo base de datos para firebase
import {getFirestore, addDoc, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "myapp-react-2022.firebaseapp.com",
  projectId: "myapp-react-2022",
  storageBucket: "myapp-react-2022.appspot.com",
  messagingSenderId: "613610056928",
  appId: "1:613610056928:web:235a030cbe51a6836af485"
};


const app = initializeApp(firebaseConfig);
//consulto base de datos
const db = getFirestore ()
const cargarBDD = async () => {
    const promise = await fetch ('./json/productos.json')
    const productos = await promise.json ()
    productos.forEach(async (prod) => {
await addDoc (collection (db,"productos"), {
 nombre: prod.nombre,
 marca: prod.marca,
 modelo: prod.modelo,
 idCategoria: prod.idCategoria,
 stock: prod.stock,
 precio: prod.precio,
 img: prod.img

    })

})
}
export {cargarBDD}