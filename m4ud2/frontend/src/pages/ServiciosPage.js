import '../styles/components/pages/ServiciosPage.css';

const ServiciosPage = (props) => {
    return (
        <section className='holder'>
            <div className='Servicios'>
                <h2>Servicios</h2>

            </div>
        
            <div className='servicios'>
                <div className='servicio'>
                    <img src='imagenes/servicios/logisticaymaq02.jpg' width="250" alt='logisticaymaq ' />
                    <h4>Logistica y Maquinaria</h4>
                    <p>Red de logística. Parque de maquinaria. Embolsado y extracciones.</p>
                </div>
                <div className='servicio'>
                    <img src='imagenes/servicios/siembra2.jpg' width="250" alt='siembra ' />
                    <h4>Siembra y Pulverización</h4>
                    <p>Siembra Directa. Con monitores de siembra y piloto automático.
                        Pulverización. Nivelaciones. Descompactado. </p>
                </div>
                <div className='servicio'>
                    <img src='imagenes/servicios/cosecha3.jpg' width="250" alt='cosecha ' />
                    <h4>Cosecha y Transporte</h4>
                    <p>Cosecha. Mapeo, piloto automático y balanza en carros.
                        Transporte a Cerealeras y Puertos.</p>
                </div>
                <div className='servicio'>
                    <img src='imagenes/servicios/comercial01.jpg' width="250" alt='comercial ' />
                    <h4>Asesoramiento Técnico Agrícola</h4>
                    <p>Asesoramiento técnico y empresario. Administración de empresas agropecuarias.
                        Inversores. Pool de siembra.</p>
                </div>

            </div>
        </section>
    );

}
export default ServiciosPage;