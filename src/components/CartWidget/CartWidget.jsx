/*
const CartWidget = () => {
  
    return (
        <>
            <button className="btn btn-secondary cartWidget">
                    <i className="fas fa-shopping-cart fa-lg"></i>
                        <span className="cantCarrito">0</span>
            </button>
                
        </>
    );
}

export default CartWidget;*/
import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <>
            <ul className='navbar-nav me-auto cartWidget'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <button className="btn btn-secondary"><i class="fas fa-shopping-cart fa-lg"></i></button>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default CartWidget;

