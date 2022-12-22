/*
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import { consultarBDD } from '../../assets/funciones.js';
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    console.log(category,productos)
    useEffect(() => {
            if(category) {
                consultarBDD().then(products => {
              
                    const productsList= products.filter(prod => prod.idCategoria === parseInt (category) && prod.stock>0)
             
                    setProductos(productsList)
                })
            } else {
                consultarBDD().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    
                    setProductos(productsList)
                })
            }
            
        
    },[category]);
    return (
        <div className= 'row cardProductos' >
          <ItemList productsList={productos}/>
        </div>
       
    );
}

export default ItemListContainer;*/