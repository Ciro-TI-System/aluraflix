import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
     <div className="container mx-auto flex justify-between items-center">
      <p>Desenvolvido por Ciro Batista da Silva</p>
      <Image 
        src="/logo.png"
        alt="Aluraflix"
        width={168}
        height={40}
      />
      <p>&copy; 2024 - Todos os direitos reservados</p>
     </div>
    </footer>
  );
}
