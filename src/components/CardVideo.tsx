import React, { useState } from "react";
import Button from "./Button"; // Importando o componente Button
import Image from "next/image";
import Modal from "./Modal"; // Importando o componente Modal

interface VideoData {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  category: string;
  featured: boolean;
}

interface CardVideoProps {
  title: string; // Título do vídeo
  description: string; // Descrição do vídeo
  imageUrl: string; // URL da imagem do vídeo
  videoUrl: string; // URL do vídeo
  onEdit: (data: VideoData) => void; // Função a ser chamada quando o botão de editar for clicado
  onDelete: () => void; // Função a ser chamada quando o botão de excluir for clicado
}

const CardVideo: React.FC<CardVideoProps> = ({
  title,
  description,
  imageUrl,
  videoUrl,
  onEdit,
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleSave = (data: VideoData) => {
    onEdit(data);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Imagem do vídeo */}
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={200}
        quality={100}
        //loading="lazy"
        objectFit="cover"
        objectPosition="center"
        layout="responsive"
        priority
        className="w-full h-48 object-cover mb-4"
      />
      <div className="p-4 space-y-4">
        {/* Título do vídeo */}
        <h3 className="text-gray-900 text-lg font-bold mb-2 bg-white/90 rounded-md shadow-md p-4 flex flex-col h-30">
          {title}
        </h3>
        {/* Descrição do vídeo */}
        <p className="text-gray-800 text-sm mb-4 leading-relaxed bg-white bg-opacity-70 rounded-md shadow-md p-4 flex flex-col h-full">
          {description}
        </p>
        {/* Botões de ação */}
        <div className="flex justify-center items-center space-x-2">
          <Button label="Assistir" onClick={() => window.open(videoUrl, "_blank")} className="mr-2 w-full p-2" />
          <Button label="Editar" onClick={handleEditClick} className="mr-2 w-full p-2" />
          <Button label="Excluir" onClick={onDelete} className="w-full p-2" />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
    </div>
  );
};

export default CardVideo;

