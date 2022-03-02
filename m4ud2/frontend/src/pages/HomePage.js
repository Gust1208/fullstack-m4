import '../styles/components/pages/HomePage.css'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="imagenes/home/img001.jpg" alt="campo de trigo" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>
                    La siembra directa es una tecnología desarrollada a fines del siglo XX y 
                    difundida desde comienzos del XXI, su origen es mucho más antiguo.
                    Mediante la siembra tradicional, la productividad de los suelos suele bajar de 
                    manera importante debido a la reducción de la materia orgánica, producto del laboreo 
                    excesivo del suelo.
                    El arado ha sido utilizado a lo largo de la historia para remover y preparar 
                    los suelos para la siembra y así también eliminar malezas, o plantas indeseables.
                    En Argentina, país referente en la aplicación de la Siembra Directa, la labranza cero comenzó 
                    a utilizarse en el centro de la Región Pampeana en la década de 1980  
                    </p>
                </div>
                <div className="testimonio right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">PedroLemos - Agroquimica Lemos</span>
                    </div>
                </div>
            </div>

        </main>

    );
}
export default HomePage;