const Info = () => {
  return (
    <div className="md:w-44 md:mr-4 bg-dark grid justify-items-center border-solid border-2 border-light p-4">
      <p className="title">Info</p>
      <img
        className="w-24 h-24 rounded"
        src="kraoki-profile-by-trsgatos.jpg"
        alt="dessin de kraoki"
      ></img>
      <p>
        bienvenue sur le site de Kraoki, ta streameuse twitch affiliée préférée
      </p>

      <ul className="">
        <li>
          <a
            href="https://www.twitch.tv/kraoki"
            target="_blank"
            rel="noreferrer"
          >
            twitch
          </a>
        </li>
        <li>
          <a href="https://youtube.com/kraoki" target="_blank" rel="noreferrer">
            youtube
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/kraoki"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </li>
        <li>
          <a
            href="https://tiktok.com/@kraokir"
            target="_blank"
            rel="noreferrer"
          >
            tiktok
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
