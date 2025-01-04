import React, { useState } from "react";

interface TextFieldProps {
  label: string; // O texto do rótulo acima do campo de texto
  placeholder: string; // O texto do placeholder dentro do campo
}

const TextField: React.FC<TextFieldProps> = ({ label, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Comentário enviado: ${inputValue}`);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div>
        {/* Rótulo do campo */}
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
          {label}
        </label>

        {/* Campo de texto */}
        <input
          id={label}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default TextField;
