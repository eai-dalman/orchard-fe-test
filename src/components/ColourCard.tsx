type ColourCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const ColourCard = ({ src, alt, title, description }: ColourCardProps) => (
  <div>
    <img
      src={src}
      alt={alt}
      className="w-full h-[200px] sm:h-[300px] object-cover"
    />
    <div className="text-center px-4 sm:px-[30px] mt-6 sm:mt-[30px]">
      <h3 className="text-lg sm:text-[21px] font-bold leading-[1.43] mb-2.5">
        {title}
      </h3>
      <p className="text-base sm:text-[21px] font-light leading-[1.43]">
        {description}
      </p>
    </div>
  </div>
);

export default ColourCard;
