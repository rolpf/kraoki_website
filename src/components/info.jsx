const Info = () => {
  return (
    <div className="md:w-44 md:h-96 md:mr-4 bg-dark grid justify-items-center border-solid border-2 border-light p-4">
      <p className="title">Info</p>
      <img
        className="w-24 h-24 rounded"
        src="kraoki-profile-by-trsgatos.jpg"
        alt="photo de profil"
      ></img>
      <p className="">bienvenue sur le site de ta streameuse twitch préférée</p>

      <ul className="">
        <li>
          <a href="https://www.twitch.tv/kraoki" target="_blank">
            twitch
          </a>
        </li>
        <li>
          <a href="https://youtube.com/kraoki" target="_blank">
            youtube
          </a>
        </li>
        <li>
          <a href="https://instagram.com/kraoki" target="_blank">
            instagram
          </a>
        </li>
        <li>
          <a href="https://tiktok.com/@kraokir" target="_blank">
            tiktok
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
