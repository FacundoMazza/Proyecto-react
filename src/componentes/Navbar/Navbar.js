import "./nav.css"
import  logo from "../../img/logoFisio.png"
const Navbar = () => {
    return (
        <header>
               <nav>
                <img src = {logo} alt = 'logo de la empresa'></img>
                <div className='nav-list'>
                    <ul>
                        <li> <a href = '#'>Inicio</a></li>
                        <li> <a href = '#'>Sobre nosotros</a></li>
                        <li> <a href = '#'>Sesiones</a></li>
                        <li> <a href = '#'>Contacto</a></li>
                    </ul>
                </div>

                <p className = "carrito"> 🛒<span className="carrito-counter">0</span> </p>
            </nav>
        </header>
         
        
    )



}
export default Navbar;