import '../styles/components/pages/GaleriaPage.css';

const GaleriaPage = (props) => {
    return (
        <section className='holder'>
        <div className='galeria'>
        <h2>Galeria</h2>
        <div className= 'foto'>
            <img src="imagenes/galeria/img006.jpg" width="250" alt="imagen6"/>
        </div>
        <div className= 'foto'>
            <img src="imagenes/galeria/siembra1.jpg"width="250" alt="siembra1"/>
        </div>
        <div className= 'foto'>
            <img src="imagenes/galeria/pulverizacion1.jpg" width="250" alt="pulverizacion1"/>
        </div>
        <div className= 'foto'>
            <img src="imagenes/galeria/cosecha1.jpg" width="250" alt="cosecha1"/>
        </div>
        <div className= 'foto'>
            <img src="imagenes/galeria/cosecha2.jpg" width="250" alt="cosecha2"/>
        </div>        
        <div className= 'foto'>
            <img src="imagenes/galeria/transporte2.jpg" width="250" alt="transporte2"/>
        </div>
        <div className= 'foto'>
            <img src="imagenes/galeria/trasnporte3.jpg"width="250" alt="transporte3"/>
        </div>

        </div>
        </section>
    );
}
export default GaleriaPage;