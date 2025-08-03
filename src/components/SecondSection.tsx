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
          alt="A spoon with red jelly on a dark background."
          title="RED"
          description="Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."
        />
        <ColourCard
          src="green.png"
          alt="A spoon with green jelly on a dark background."
          title="Green"
          description="Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours"
        />
        <ColourCard
          src="white.png"
          alt="A spoon with white jelly on a dark background."
          title="White"
          description="White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat."
        />
      </div>
    </section>
  );
};

export default SecondSection;
