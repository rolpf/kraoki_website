import * as React from "react";

const cache = {};
const api = async (path, options = {}) => {
  if (!options.cache || !cache[path]) {
    console.log("TWITCH", path);
    cache[path] = await fetch(`https://api.twitch.tv/kraken/${path}`, {
      headers: {
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID,
        Accept: "application/vnd.twitchtv.v5+json",
      },
    });
  }
  return await cache[path].clone().json();
};

const getChannelId = async (channelName) => {
  const data = await api(`users?login=${channelName}`, { cache: true });
  return data?.users?.[0]._id;
};

const getStream = async (channelName) => {
  const channelId = await getChannelId(channelName);
  const data = await api(`streams/${channelId}?stream_type=live`);
  return data?.stream;
};

export const useIsStreaming = (channel) => {
  const [isStreaming, setStreaming] = React.useState(false);
  React.useEffect(() => {
    const check = async () => {
      const stream = await getStream(channel);
      setStreaming(Boolean(stream));
    };
    const intervalID = setInterval(check, 2000);
    return () => {
      clearInterval(intervalID);
    };
  }, [channel]);
  return isStreaming;
};
