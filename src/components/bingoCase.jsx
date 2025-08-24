import { useState } from "react";

function BingoCase(content) {
  const [check, setCheck] = useState(false);

  function handleClick() {
    setCheck(!check);
  }

  return (
    <>
      <div
        className={`flex justify-center items-center text-xs md:text-lg md:uppercase p-2 h-20 w-20 md:h-36 md:w-36 border-2 border-solid border-light ${
          check ? "bg-medium" : "bg-dark"
        }`}
        onClick={handleClick}
      >
        <p>{content.text}</p>
        {console.log(check)}
      </div>
    </>
  );
}

export default BingoCase;
