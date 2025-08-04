import { useRef } from "react";

type ColourCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const ColourCard = ({ src, alt, title, description }: ColourCardProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    dialogRef.current?.showModal();
  };

  const handleCloseModal = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div>
        <img
          src={src}
          alt={alt}
          onClick={handleOpenModal}
          className="w-full h-[200px] sm:h-[300px] object-cover transition-transform duration-200 hover:scale-105 cursor-zoom-in select-none"
        />
        <div className="text-center px-4 sm:px-[30px] mt-6 sm:mt-[30px]">
          <h3 className="text-lg sm:text-[21px] font-bold leading-[1.43] mb-2.5">
            {title}
          </h3>
          <p className="text-base sm:text-[21px] font-light leading-[1.43]">
            {description}
          </p>
        </div>

        {/* Dialog */}
        <dialog
          ref={dialogRef}
          className="[&::backdrop]:backdrop-blur-sm fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-0 z-50"
        >
          <div className="flex flex-col items-center w-[80dvw] sm:w-[50vw] opacity-0 scale-95 animate-fade-in">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover select-none"
            />
            <button
              onClick={handleCloseModal}
              className="mt-6 sm:mt-[30px] text-lg text-white font-bold cursor-pointer outline-0"
            >
              CLOSE
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default ColourCard;
