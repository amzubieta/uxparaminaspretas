import React from 'react';
import { Slide } from 'react-slideshow-image';
import Carrusel1 from '../../assets/img/carrusel1.jpg';
import Carrusel2 from '../../assets/img/carrusel2.jpg';
import Carrusel3 from '../../assets/img/carrusel3.jpg';
import Carrusel4 from '../../assets/img/tablero.jpeg';
import KarenCEO from '../../assets/img/karenCEO.jpg';
// import Banner from '../../assets/img/banner.jpeg';
import './styles.css'

const propietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true

}

const Slideshow = () => {
    return (
        <div className='fondo' id='fondo'>
            <div>
                <h2 className="title">Quienes Somos</h2>
            </div>
            <div className='banner'> 
            <div className="containerSlide">
                <Slide {...propietes} >
                    <div className="cadaSlide">
                        <div>
                            <img src={Carrusel1} alt="Imagen Ux minas negras" />
                        </div>
                    </div>
                    <div className="cadaSlide">
                        <div>
                            <img src={Carrusel2} alt="Imagen Ux minas negras" />
                        </div>
                    </div>
                    <div className="cadaSlide">
                        <div>
                            <img src={Carrusel3} alt="Imagen Ux minas negras" />
                        </div>
                    </div>
                    <div className="cadaSlide">
                        <div>
                            <img src={Carrusel4} alt="Imagen Ux minas negras" />
                        </div>
                    </div>
                    <div className="cadaSlide">
                        <div>
                            <img src={KarenCEO} alt="Imagen CEO de Ux minas negras" />
                        </div>
                    </div>
                </Slide>
            </div >
            </div> 
        // </div>

    )
}

export default Slideshow;

