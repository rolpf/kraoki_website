import BingoCase from "../components/bingoCase.jsx";
import { useState } from "react";

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

  // //  const winners = [
  //     ["0, 1, 2, 3, 4"],
  //     ["5, 6, 7, 8, 9"],
  //     ["10, 11, 12, 13, 14"],
  //     ["15, 16, 17, 18, 19"],
  //     ["20, 21, 22, 23, 24"],
  //     ["0, 6, 12, 18, 24"],
  //     ["0, 5, 10, 15, 20"],
  //     ["1, 6, 11, 16, 21"],
  //     ["2, 7, 12, 17, 22"],
  //     ["3, 8, 13, 18, 23"],
  //     ["4, 9, 14, 19, 24"],
  //   ];
  const [isCheck, setIsCheck] = useState(false);

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

  // function checkIfWin(gridContent) {
  //   let len = gridContent.length;
  // }

  function handleCaseClick() {
    console.log(isCheck);
    setIsCheck(!isCheck);
  }

  return (
    <div className="flex flex-col items-center bg-dark w-full my-2 border-solid border-2 border-light p-4 border-solid border-2 border-light p-4">
      <h1 className="title">Bingo</h1>
      <div className="flex justify-center">
        <div
          id="bingo-grid"
          className="grid  border-2 bg-dark border-light wm-4 grid-cols-5 grid-rows-5"
        >
          {gridContent.map((content, index) => (
            <BingoCase
              key={index}
              id={index}
              text={content}
              isCheck={isCheck}
              onClick={() => handleCaseClick()}
            />
          ))}
        </div>
      </div>

      {/* TODO : Bouton qui appelle une fonction pour générer une nouvelle grille */}
      {/* <button className="lt-button" onClick={() => generateGrid()}>
        Générer une nouvelle grille
      </button> */}
    </div>
  );
}

export default Bingo;
