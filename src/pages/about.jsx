const About = () => {
  return (
    <div className="bg-dark my-2 md:w-screen border-solid border-2 border-light p-4 border-solid border-2 border-light p-4">
      <h1 className="title">Qui suis-je ?</h1>
      <p>
        Salut, moi c'est <strong>Kraoki</strong>, streameuse depuis 2016 sur{" "}
        <a href="https://twitch.tv/kraoki" target="_blank">
          Twitch.
        </a>
      </p>
      <h2 className="title">Mon setup</h2>
      <p className="text">
        J'avoue tout, je n'ai pas le setup le plus récent, ni le plus performant
        pour du stream. J'essaie de ne pas tomber dans la course à la
        performance et à la consommation, même si je suis parfois tentée, car je
        considère mon setup suffisant pour ce que je fais. Mes convictions
        personnelles me freinent dans l'achat de nouveau matériel et cela me
        convient.
      </p>
      <p>Je stream sur PC fixe.</p>
    </div>
  );
};

export default About;
