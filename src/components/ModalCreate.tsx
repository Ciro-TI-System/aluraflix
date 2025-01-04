import React, { useState } from "react";

interface VideoData {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  category: string;
  featured: boolean;
}

interface ModalCreateProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCreate: React.FC<ModalCreateProps> = ({ isOpen, onClose }) => {
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onClose();
      } else {
        console.error("Failed to create video");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
          Adicionar Novo Vídeo
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Fullstack">Fullstack</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="DevOps">DevOps</option>
              <option value="Database">Database</option>
              <option value="Testing">Testing</option>
            </select>
          </div>
          <div className="flex items-center">
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
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Adicionar Vídeo
            </button>
            <button
              type="reset"
              className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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

export default ModalCreate;
