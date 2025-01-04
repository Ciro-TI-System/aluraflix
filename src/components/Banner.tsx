import React from "react";
import Botao from "./Button";
import Image from "next/image";

// Interface para as propriedades do componente Banner
interface BannerProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="relative h-96 bg-cover bg-center">
      <Image
        src="/banner.png"
        alt={title}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="w-full h-full"
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
