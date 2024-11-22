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
          <a>twitch</a>
        </li>
        <li>
          <a>youtube</a>
        </li>
        <li>
          <a>instagram</a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
