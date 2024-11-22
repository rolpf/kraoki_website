import { createRef, useState } from "react";
import { TwitchPlayer } from "react-twitch-embed";

const TwitchView = ({ channel = "kraoki", displayName = "Kraoki" }) => {
  const player = createRef();
  const [isOnline, setOnline] = useState(false);
  const stopPlaying = () => player.current?.pause();

  if (!channel) {
    return <div>Error: Channel is required.</div>;
  }

  return (
    <div className="twitch">
      <div className="twitch-player">
        <TwitchPlayer
          width="940"
          height="480"
          channel={channel}
          onOnline={() => setOnline(true)}
          onOffline={() => setOnline(false)}
          onReady={(p) => {
            player.current = p;
          }}
          parent={["localhost"]}
          hideControls={false}
        />
      </div>
      <div className="twitch-link">
        <a href={`https://www.twitch.tv/${channel}`} onClick={stopPlaying}>
          {isOnline ? (
            <>
              {displayName || channel} est en stream ! Clique ici pour voir son
              live sur Twitch
            </>
          ) : (
            <>
              Clique ici pour voir des vidéos récentes de{" "}
              {displayName || channel} sur Twitch
            </>
          )}
        </a>
      </div>
    </div>
  );
};

export default TwitchView;
