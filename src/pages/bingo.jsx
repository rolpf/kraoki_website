import BingoCase from "../components/bingoCase.jsx";

function Bingo() {
  const items = [
    "rote",
    "plisse les yeux car ne voit rien",
    "en a marre des points de chaîne",
    "a oublié de quoi on parlait",
    "parle d'un chat",
    "s'auto-clash",
    "écorche un mot",
    "allusion au cul",
    "parle du partenariat twitch",
    "problème technique",
    "bpm > 130",
    "ne comprend pas",
    "parle de son setup",
    "chantonne",
    "parle de son makeup",
    "cri aigu",
    "+ 40 viewers",
    "rigole pour rien",
    "boit une boisson énergisante",
    "complimente une meuf dans le tchat",
    "train de la hype",
    "troll/con dans le tchat",
    "pas de modo",
    "prout avec la bouche",
    "vocal fry",
    "jeu de mot",
    "tu nous emmerdes",
    "bloquée dans le jeu",
    "viewer demande à changer de jeu",
    "roasted par le tchat",
    "j'arrête bientôt",
    "bruit extérieur",
    "dit : j'adore streamer",
    "parle de plantes",
    "prononce mal un pseudo",
    "se fait raid",
    "termine un jeu",
  ];
  let gridContent = randomize(items);
  gridContent.splice(25, gridContent.length - 25);

  function randomize(values) {
    let index = values.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (index !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;

      // And swap it with the current element.
      [values[index], values[randomIndex]] = [
        values[randomIndex],
        values[index],
      ];
    }

    return values;
  }

  return (
    <div className="bg-dark my-2 border-solid border-2 border-light p-4 border-solid border-2 border-light p-4">
      <h1 className="title">Bingo</h1>
      <div
        id="bingo-grid"
        className="grid border-2 bg-dark border-light wm-4 grid-cols-5 grid-rows-5"
      >
        {gridContent.map((content) => (
          <BingoCase text={content} />
        ))}
      </div>
    </div>
  );
}

export default Bingo;
