import Button from "../components/button";

const Socials = () => {
  return (
    <div className="bg-dark my-2 md:w-screen border-solid border-2 border-light p-4 flex flex-col items-center">
      <h1 className="title">Réseaux sociaux</h1>
      <Button title="Twitch" href="https://twitch.tv/kraoki" target="_blank" />
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
      <Button
        title="BlueSky"
        href="https://bsky.app/profile/kraoki.bsky.social"
        target="_blank"
      />
      <Button
        title="Discord"
        href="https://discord.com/invite/YmdYjzC"
        target="_blank"
      />
      <h2 className="title">Me soutenir en achetant des jeux</h2>
      <Button
        title="Instant Gaming"
        href="https://www.instant-gaming.com/en/?igr=kraoki"
        target="_blank"
      />
      <Button
        title="Humble Bundle"
        href="https://www.humblebundle.com/?partner=kraoki"
        target="_blank"
      />
      <h2 className="title">Me contacter par mail</h2>
      <p>kraokir@gmail.com</p>
    </div>
  );
};

export default Socials;
