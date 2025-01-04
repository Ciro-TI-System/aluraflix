import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ModalCreate from "./ModalCreate"; // Importando o componente ModalCreate

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewVideoClick = () => {
    setIsModalOpen(true);
  };

  return (
    <header className="bg-darkgray-600 text-black py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logotipo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          {/* Imagem para o logotipo */}
          <Image src="/logo.png" alt="Aluraflix" width={168} height={40} />
        </Link>

        {/* Botões de Navegação */}
        <nav className="flex gap-4">
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded"
          >
            Página Inicial
          </Link>
          <button
            onClick={handleNewVideoClick}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded"
          >
            Novo Vídeo
          </button>
        </nav>
      </div>
      <ModalCreate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
