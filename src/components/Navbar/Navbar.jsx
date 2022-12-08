import Categorias from './Categorias/Categorias';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-xl navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Monatinta</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLight" aria-controls="navbarLight" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse show" id="navbarLight">
                    <Categorias />

                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
