import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src ="imagenes/logo.png" width="100" 
                    alt = "Soluciones Agropecuarias" />
                    <h1>Soluciones Agropecuarias</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;