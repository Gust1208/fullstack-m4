import '../styles/components/pages/ContactoPage.css';
const ContactoPage = (props) => {
    return (
        <main className='holder'>
            <div className='columna de contacto'>
                <h2>Complete
                    el siguiente formulario</h2>
                <form action="" method="" className='formulario'>
                    <p>
                        <label>Nombre </label>
                        <input type='text' name='nombre' />
                    </p>
                    <p> <label>Email </label>
                        <input type='text' name='email' />
                    </p >
                    <p ><label>Teléfono </label>
                        <input type='text' name='teléfono' />
                    </p >
                    <p ><label>Comentario </label>
                        <textarea name='mensaje'></textarea>
                    </p >
                    <p className='centrar'>
                        <input type='submit' value='Enviar' />
                    </p>

                </form >
            </div >
            <div className='columna datos'>
                <h2>Otras vias de comunicación</h2>
                <p>También podes contactarte con nosotros por los siguientes medios: </p>
                <ul>
                <li>Teléfono: +54 9 11 5721 2690</li>
                <li>Email: info@solucionesagropecuarias.com.ar</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Intagram</li>
            </ul>

            </div>

        </main >
    );
}
export default ContactoPage;