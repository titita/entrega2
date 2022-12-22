
import Categorias from './Categorias/Categorias';
import CartWidget from '../CartWidget/CartWidget';
import BotonDarkMode from './BotonDarkMode/BotonDarkMode';
import { useDarkModeContext } from '../../context/DarkModeContext';

const Navbar = () => {
    const {darkMode} = useDarkModeContext();
    return (
        <nav className={`navbar navbar-expand-xl navbar-light" ${darkMode ? 'navbarPersonal' : 'bg-dark'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Monatinta</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLight" aria-controls="navbarLight" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse show" id="navbarLight">
                    <Categorias />
                    <CartWidget />
                    <BotonDarkMode/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
