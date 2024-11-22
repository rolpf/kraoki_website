import TwitchView from "../components/twitch-embed";

const Home = () => {
  return (
    <div className="bg-dark my-2 md:w-screen px-auto border-solid border-2 border-light p-4 border-solid border-2 border-light p-4">
      <h1 className="title">Regarder le stream de Kraoki sur Twitch</h1>
      <div className="App">
        <TwitchView channel="kraoki" displayName="kraoki" />
      </div>
    </div>
  );
};

export default Home;
