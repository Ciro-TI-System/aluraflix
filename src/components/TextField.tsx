import React from "react";

interface TextFieldProps {
  label: string; // O texto do rótulo acima do campo de texto
  placeholder: string; // O texto do placeholder dentro do campo
}

const TextField: React.FC<TextFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="mb-4">
      {/* Rótulo do campo */}
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>

      {/* Campo de texto */}
      <input
        id={label}
        type="text"
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default TextField;
