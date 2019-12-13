import React from "react";
import './styles.css';
import Facebook from '../../assets/img/icons8-facebook-40.png';
import Instagram from '../../assets/img/icons8-instagram-40.png';
import YouTube from '../../assets/img/icons8-youtube-40.png';
import Twitter from '../../assets/img/icons8-twitter-40.png';


const FooterPage = () => {
    return (
        <div>
        <footer className="footer">
            <div>
                <div>
                    <h5 className="titulo">Nos siga nas redes sociais</h5>
                </div>
                <div className="midia">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/uxparaminaspretas/"><img src={Facebook} alt="Icone de facebook"/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/uxparaminaspretas/"><img src={Instagram} alt="Icone de instagram"/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/uxminaspretas"><img src={Twitter} alt="Icone de twitter"/></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCVggYMaC2A54zEYNCBZdpgg"><img src={YouTube}alt="Icone de youtube"/></a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
        <p className="reprograma">
           De <a href="https://reprograma.com.br/"> Reprograma </a> com amor.
        </p>
        </div>
);
}

export default FooterPage;