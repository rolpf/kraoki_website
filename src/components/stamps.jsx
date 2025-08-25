const Stamps = () => {
  const stamps = [
    { src: "/stamps/19.gif", alt: "smiley face stamp" },
    {
      src: "/stamps/animalcrossing.gif",
      alt: "animal crossing stamp",
    },
    { src: "/stamps/battleblocks.png", alt: "battleblock theater stamp" },
    { src: "/stamps/djfuneral.png", alt: "i'll dj at your funeral stamp" },
    { src: "/stamps/eatingchaps.gif", alt: "cat eating stamp" },
    { src: "/stamps/eevee.gif", alt: "pokémon stamp" },
    { src: "/stamps/epicfail.png", alt: "epic fail stamp" },
    { src: "/stamps/gayminecraft.png", alt: "gay minecraft stamp" },
    { src: "/stamps/hatsunemiku.png", alt: "hatsune miku stamp" },
    { src: "/stamps/hypnose.gif", alt: "hypnotic stamp" },
    { src: "/stamps/kangel.png", alt: "k angel stamp" },
    { src: "/stamps/lovecoffee.gif", alt: "i love coffee stamp" },
    { src: "/stamps/MARIOFUCKAYOUUUU.png", alt: "super mario stamp" },
    { src: "/stamps/silly.png", alt: "silly stamp" },
    { src: "/stamps/snow.gif", alt: "tv snow stamp" },
    { src: "/stamps/sonicmania.png", alt: "sonic mania stamp" },
    { src: "/stamps/tamagotchi.png", alt: "tamagotchi stamp" },
    { src: "/stamps/tv.gif", alt: "tv stamp" },
    { src: "/stamps/windowsxp.png", alt: "long live windows xp stamp" },
  ];
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.stamps;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
        {stamps.map((stamp, index) => (
          <li key={index}>
            <img src={stamp.src} alt={stamp.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {stamps.map((stamp, index) => (
          <li key={index}>
            <img src={stamp.src} alt={stamp.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stamps;
