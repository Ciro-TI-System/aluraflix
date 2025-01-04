import React from "react";
import Botao from "./Button";
import Image from "next/image";

// Interface para as propriedades do componente Banner
interface BannerProps {
  ImageUrl: string;
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const Banner: React.FC<BannerProps> = ({
  ImageUrl,
  title,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="relative h-80 bg-cover bg-center">
      <Image
        src={ImageUrl}
        alt={title}
        fill
        quality={100}
        //loading="lazy"
        priority
        className="w-full h-full object-cover"
        objectFit="cover"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
        <div>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-6">{description}</p>
          <Botao label={buttonLabel} onClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
