import TwitchView from "../components/twitch-embed";
import Button from "../components/button";

const Home = () => {
  return (
    <div className="bg-dark my-2 md:w-screen px-auto border-solid border-2 border-light p-4 border-solid border-2 border-light p-4">
      <h1 className="title">Regarder le stream de Kraoki sur Twitch</h1>
      <div className="App">
        <TwitchView
          channel="kraoki"
          displayName="kraoki"
          className=" inline-block"
        />
        <div className="flex md:flex-row flex-col items-center justify-around">
          <Button
            title="S'abonner pour 5€"
            href="https://www.twitch.tv/products/kraoki/ticket/new"
            target="_blank"
          />
          <Button
            title="Regarde les rediffusions"
            href="https://www.twitch.tv/kraoki/videos?filter=highlights&sort=time"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
