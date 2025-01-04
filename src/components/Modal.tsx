import React, { useState } from "react";

interface VideoData {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  category: string;
  featured: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: VideoData) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<VideoData>({
    title: "",
    description: "",
    imageUrl: "",
    videoUrl: "",
    category: "Fullstack",
    featured: false,
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 text-center font-bold text-blue-600">
          Editar Card
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              URL da Imagem
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="videoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              URL do Vídeo
            </label>
            <input
              type="url"
              id="videoUrl"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Categoria
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="Fullstack">Fullstack</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="DevOps">DevOps</option>
              <option value="Database">Database</option>
              <option value="Testing">Testing</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="featured"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              Destaque
            </label>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Salvar
            </button>
            <button
              type="reset"
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={() =>
                setFormData({
                  title: "",
                  description: "",
                  imageUrl: "",
                  videoUrl: "",
                  category: "Fullstack",
                  featured: false,
                })
              }
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
