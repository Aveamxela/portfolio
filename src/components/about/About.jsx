import shapeAbout from "../../assets/image/forme_a_propos1.svg";
import womanCoding from "../../assets/image/woman_coding.webp";
import darkModeWomanCoding from "../../assets/image/darkMode_coding.png";
import { useDarkMode } from "../../components/darkmode/Darkmode";


export default function About() {
      const { isDarkMode } = useDarkMode();

    return (
        <section id="about">
            <div className="container_about">
                <img
                    className="womanCoding"
                    // src={womanCoding}
                    src={isDarkMode ? darkModeWomanCoding : womanCoding}
                    alt="Woman's coding illustration"
                />
                <div className="content_about">
                    <h1 className="title_about">Maëva Froger</h1>
                    <div className="dev_about">
                        <h2>Intégratrice web</h2>
                        <h2>Développeuse front-end</h2>
                    </div>
                    <p className="description_about">
                        Mon voyage a débuté avec des études en littérature et
                        civilisations espagnoles, puis j'ai affiné mon anglais à
                        Malte.<br></br>De retour en France, j'ai élargi mes
                        horizons en obtenant un bachelor en événementiel et
                        communication .<br></br>
                        J'ai travaillé en tant qu'
                        <b>assistante communication</b> avant de lancer ma
                        <b> propre entreprise</b> en ligne qui nécéssitait de
                        créer un site <b>WordPress</b>, une expérience qui a
                        renforcé mon intérêt pour la programmation.<br></br>J'ai
                        suivi une{" "}
                        <b>
                            formation de 12 projets pour devenir intégratrice
                            web
                        </b>{" "}
                        et concrétiser cet intérêt.<br></br>Mon objectif est de{" "}
                        <b>créer des sites web attrayants et fonctionnels</b>,
                        en combinant mon sens de l'esthétisme développé lors de
                        mes expériences en communication avec mon envie de
                        programmer.<br></br>Ce qui me motive avant tout, c'est
                        de voir le résultat de{" "}
                        <b>mon code prendre vie sous forme visuelle</b>.
                    </p>
                </div>
            </div>
            <img className="shapeAbout" src={shapeAbout} alt="" />
        </section>
    );
}
