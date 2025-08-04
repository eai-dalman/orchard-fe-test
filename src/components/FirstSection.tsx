const FirstSection = () => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.firstElementChild);
  };

  return (
    <section className="max-w-[1440px] w-full mx-auto py-8 sm:py-[120px] px-4 sm:px-[147px]">
      <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-1 sm:grid-rows-2 gap-4 sm:gap-[10px] h-auto sm:h-[600px]">
        <div className="sm:row-span-2">
          <a href="#" onClick={handleAnchorClick}>
            <img
              src="left.png"
              alt="Rice cake wrapped in banana leaves boiling in a pot over open fire"
              className="w-full h-[200px] sm:h-full object-cover"
            />
          </a>
        </div>
        <div>
          <a href="#" onClick={handleAnchorClick}>
            <img
              src="right top.png"
              alt="Person sorting food samples on a tiled table labeled with handwritten categories"
              className="w-full h-[200px] sm:h-full object-cover"
            />
          </a>
        </div>
        <div className="sm:col-start-2 sm:row-start-2">
          <a href="#" onClick={handleAnchorClick}>
            <img
              src="right bottom.png"
              alt="Tray of soft-boiled eggs with varying yolk textures on a dark background"
              className="w-full h-[200px] sm:h-full object-cover"
            />
          </a>
        </div>
        <div className="sm:row-span-2 sm:col-start-3 sm:row-start-1 sm:pl-[20px] flex flex-col mt-6 sm:mt-0">
          <div>
            <a href="#" onClick={handleAnchorClick}>
              <h2 className="font-light text-2xl sm:text-3xl leading-[1.1] tracking-[1.5px]">
                WHAT DOES COOKING MEAN?
              </h2>
            </a>
            <hr className="my-6 sm:my-[30px]" />
          </div>
          <a href="#" onClick={handleAnchorClick}>
            <p className="text-base sm:text-[21px] font-light leading-[1.43] sm:w-[362px]">
              Is it simply applying heat to a food product? A way of making
              certain food safe to eat? Or a way to create flavour and make food
              more appealing? This is just part of what Hervé This, the father
              of molecular gastronomy, has dedicated his life to finding out. We
              spoke to him to find out what his experiments have told him. And
              in the process even discovered the secret to cooking the perfect
              egg...
            </p>
          </a>
          <div>
            <a href="#" onClick={handleAnchorClick}>
              <p className="text-[13px] sm:text-[15px] font-bold leading-[1.4] text-red mt-6 sm:mt-[30px] mb-2 sm:mb-[10px]">
                THE PERFECT EGG
              </p>
            </a>
            <a href="#" onClick={handleAnchorClick}>
              <span className="text-base sm:text-[21px] font-bold leading-[1.43]">
                Keep water between 67 and 68°C for a flavourful, tender yolk
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
