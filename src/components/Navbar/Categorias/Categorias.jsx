import { Link } from "react-router-dom";

const Categorias = () => {
    return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-link">
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/"}><i className="fas fa-home fa-lg"></i></Link></button>
                </li>
                <li className="nav-link">
                    
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/category/compu"}><i className="fas fa-laptop fa-lg"></i></Link></button>
                    
                </li>
                <li className="nav-link">
                    
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/category/celus"}><i className="fas fa-mobile fa-lg"></i></Link></button>
                    
                </li>
                <li className="nav-link">
               
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/category/tele"}><i className="fas fa-tv fa-lg"></i></Link></button>
                    
                </li>
                <li className="nav-link">
                   
                        <button className='btn btn-secondary'><Link className="nav-link" to={"/category/auris"}><i className="fas fa-headphones fa-lg"></i></Link></button>
                    
                </li>
            </ul>
    );
}

export default Categorias;
