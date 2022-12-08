import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)
    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
   

return (
    <>
    <button onClick={sumar} className='btn btn-outline-warning btn-sm'><i class="fas fa-minus"></i></button>
            {contador}
    <button onClick={restar} className='btn btn-outline-warning btn-sm'><i class="fas fa-plus"></i></button>
    <button className="btn btn-primary btn-sm" onClick={agregarAlCarrito}><i class="fas fa-cart-plus"></i></button>
</>
);
}

export default ItemCount;