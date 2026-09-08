function BingoCase(content, isCheck, onClick) {
  console.log(onClick);
  console.log(isCheck);
  return (
    <>
      <button
        className={`flex justify-center items-center lowercase text-xs  xl:text-lg p-2 h-16 w-20 xl:h-28 xl:w-28 border-2 border-solid border-light ${
          isCheck ? "bg-medium" : "bg-dark"
        }`}
        onClick={onClick}
      >
        {content.text}
      </button>
    </>
  );
}

export default BingoCase;
