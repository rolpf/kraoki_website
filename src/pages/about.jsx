import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "A propos | Kraoki - Streameuse Twitch";
  });

  return (
    <div className="bg-dark my-2 md:w-screen border-solid border-2 border-light p-4 border-solid border-2 border-light p-4">
      <h1 className="title">Qui suis-je ?</h1>
      <p>
        Salut, moi c'est <strong>Kraoki</strong>, streameuse depuis 2016 sur{" "}
        <a href="https://twitch.tv/kraoki" target="_blank" rel="noreferrer">
          Twitch.
        </a>
      </p>
      <h2 className="title">Que retrouver sur mes streams ?</h2>
      <p>
        Sur ma chaîne Twitch, vous êtes susceptibles de trouver :
        <ul>
          <li>Un espace de discussion et d'échange dans la bienveillance</li>
          <li>Du contenu sans prise de tête et beaucoup de rigolade</li>
          <li>
            Du gameplay sur des jeux en tous genres : Jeux indés, jeux
            d'horreur, jeux cozy, et bien plus encore
          </li>
        </ul>
      </p>
      <h2 className="title">Mon setup</h2>
      <p>
        J'avoue tout, je n'ai pas le setup le plus récent, ni le plus performant
        pour du stream. J'essaie de ne pas tomber dans la course à la
        performance et à la consommation, même si je suis parfois tentée, car je
        considère mon setup suffisant pour ce que je fais. Mes convictions
        personnelles me freinent dans l'achat de nouveau matériel et cela me
        convient.
      </p>
      <div className="md:flex justify-center">
        <ul className="mx-4 md:w-1/2 text-left">
          <p className="title">Mon ordinateur</p>
          <li>Processeur : AMD Ryzen 7 1700X</li>
          <li>Carte mère : MSI - X370 GAMING PRO CARBON</li>
          <li>Carte graphique : MSI - Geforce GTX 1070</li>
          <li>Ventirad : be quiet! - Pure Rock Slim 25.14 CFM CPU Cooler</li>
          <li>Disque dur interne : Seagate - Barracuda 2 TB</li>
          <li>SSD : Samsung - 860 Evo 500 GB</li>
        </ul>
        <ul className="mx-4 md:w-1/2 flex flex-col align-left text-left">
          <p className="title">Mes périphériques externes</p>
          <li>Clavier : Corsair Vengeance K65</li>
          <li>Souris : Razer Viper</li>
          <li>Casque : Beyerdynamic DT770 PRO</li>
          <li>Microphone : Shure MV7</li>
          <li>Bras de microphone : Rode PSA1</li>
          <li>Webcam : Logitech HD Pro Webcam C920</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
