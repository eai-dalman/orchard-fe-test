import ColourCard from "./ColourCard";

const SecondSection = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto py-8 sm:py-[120px] px-4 sm:px-[147px] box-border">
      <div className="w-full sm:w-[313px] text-center mx-auto">
        <h2 className="text-2xl sm:text-3xl font-light leading-[1.1] tracking-[1.5]">
          TASTE THE COLOURS
        </h2>
        <hr className="my-6 sm:my-[30px]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-[10px]">
        <ColourCard
          src="red.png"
          alt="Rice cake wrapped in banana leaves boiling in a pot over open fire"
          title="RED"
          description="Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."
        />
        <ColourCard
          src="green.png"
          alt="Person sorting food samples on a tiled table labeled with handwritten categories"
          title="Green"
          description="Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours"
        />
        <ColourCard
          src="white.png"
          alt="Tray of soft-boiled eggs with varying yolk textures on a dark background"
          title="White"
          description="White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat."
        />
      </div>
    </section>
  );
};

export default SecondSection;
