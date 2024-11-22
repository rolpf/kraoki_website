import Button from "../components/button";

const Socials = () => {
  return (
    <div className="bg-dark my-2 border-solid border-2 border-light p-4">
      <h1 className="title">Réseaux sociaux</h1>
      <div className="flex flex-col items-center">
        <Button
          title="Twitch"
          href="https://twitch.tv/kraoki"
          target="_blank"
        />
        <Button
          title="Youtube"
          href="https://youtube.com/kraoki"
          target="_blank"
        />
        <Button
          title="Instagram"
          href="https://instagram.com/kraoki"
          target="_blank"
        />
        <Button
          title="Tiktok"
          href="https://tiktok.com/@kraokir"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Socials;
