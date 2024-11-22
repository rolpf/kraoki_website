const Info = () => {
  return (
    <div className="md:absolute md:w-1/4 bg-dark grid justify-items-center border-solid border-2 border-light p-4">
      <p className="title">Info</p>
      <img
        className="w-10 h-10 rounded"
        src="https://i.pinimg.com/236x/26/d0/07/26d007bf81ce6d309eed6e69b907432c.jpg"
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
