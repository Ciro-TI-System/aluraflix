//Button.tsx
import React from "react";

interface ButtonProps {
  label: string; // O texto exibido no botão
  onClick: () => void; // A função a ser chamada quando o botão for clicado
  className?: string; // Classe adicional para personalização
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
