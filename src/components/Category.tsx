import React from "react";
import CardVideo from "./CardVideo";

interface CategoryProps {
  title: string;
  videos: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

const Category: React.FC<CategoryProps> = ({ title, videos }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <CardVideo
            key={video.id}
            title={video.title}
            description={video.description}
            imageUrl={video.imageUrl}
            onClick={() => alert(`Assistir ${video.title}`)} // Aqui pode ser substituído pela lógica de navegação ou modificação de estado
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
