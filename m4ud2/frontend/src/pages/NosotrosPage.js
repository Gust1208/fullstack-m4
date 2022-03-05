import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
       <section className='holder'>
           <div className='historia'>
               <h2>Historia</h2>
                <p>
                Bienvenido a Soluciones Agropecuarias, una empresa en la cual la pasión por el 
                campo es nuestro motor cotidiano.
                Fomentamos los espíritus de innovación, de atención al cliente y compañerismo, que son los pilares de 
                nuestra evolución y de nuestro futuro. Somos una empresa de AGRONEGOCIOS dedicada a la 
                SIEMBRA y COSECHA de CEREALES, y a la PRODUCCIÓN AGRÍCOLA en Argentina.

                En Soluciones Agropecuarias cultivamos nuestro principal activo que es la CALIDAD de las 
                RELACIONES en nuestra red de trabajo, compuesta por nuestros equipos internos, 
                por una importante red de proveedores y por más de 300 productores clientes. 
                Como PRODUCTORES AGRÍCOLAS desarrollamos nuestras actividades en diferentes zonas del 
                país: provincias de Santiago del Estero y Chaco, Sudeste de las provincias de Córdoba y 
                Santa Fe y Noroeste de Buenos Aires.
                </p>
           </div>
           <h2>Staff</h2>
           <div className='personas'>
               <div className='persona'>
                   <img src='imagenes/nosotros/jeronimoDelaFuente.jpg' width="75" alt ='Jero '/>
                   <h5>Jeronimo De La Fuente</h5>
                   <h6>Gerente General</h6>
                   <p>
                   Nació en Rosario, el 24 de febrero de 1991. Ingeniero Agronomo. 
                   Socio fundador en 2018. Encargado de la coordinación general de las tres áreas de la empresa, 
                   creador de la empresa.
                   
                   </p>         
               </div>
               <div className='persona'>
                   <img src='imagenes/nosotros/facundoIsa.jpg' width="75" alt ='Facu'/>
                   <h5>Facundo Isa</h5>
                   <h6>Gerente Comercial</h6>
                   <p>
                   Nació en Santiago del Estero, el 21 de septiembre de 1993. Licenciado en Adm. Agropcuaria. 
                   Socio fundador en 2018. Encargado del área de acurdos comerciales entre los clientas y 
                   la empresa.
                   </p>         
               </div>
               <div className='persona'>
                   <img src='imagenes/nosotros/pabloMatera.jpg' width="75" alt ='Mate'/>
                   <h5>Pablo Matera</h5>
                   <h6>Gerente de Operaciones</h6>
                   <p>
                   Nació en la Ciudad de Buenos Aires, el 18 de julio de 1993. Ingeniero Industrial. 
                   Socio fundador de Solucuines Agropecuarias en 2018. Encargado del área de la logistica y 
                   la maquinaria.
                   </p>         
               </div>
               <div className='persona'>
                   <img src='imagenes/nosotros/santiagoCordero.jpg' width="75" alt ='Santi'/>
                   <h5>Santiago Cordero</h5>
                   <h6>Gerente de Siembra y Pulberozación</h6>
                   <p>
                   Nació en la Ciudad de Buenos Aires, el 6 de diciembre de 1993. Ingeniero Agronomo. 
                   Socio fundador en 2018. Encargado del área de la logistica de siembra y pulverización, 
                   inovador sustentable.
                   </p>         
               </div>
               <div className='persona'>
                   <img src='imagenes/nosotros/tomasCubelli.jpg' width="75" alt ='Tomi '/>
                   <h5>Tomas Cubelli</h5>
                   <h6>Gerente de Cosecha y Transporte</h6>
                   <p>
                   Nació en la Ciudad de Buenos Aires, el 12 de junio de 1993. Ingeniero Agronomo. 
                   Socio fundador en 2018. Encargado del área de la logistica de cosecha, transporte 
                   y distribicón a cerialeras y puertos.
                   </p>         
               </div>

           </div>
       </section>
    );
}
export default NosotrosPage;