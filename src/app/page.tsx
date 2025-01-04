"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import TextField from "../components/TextField";
import Category from "../components/Category";
import axios from "axios"; // Usando axios para fazer a requisição

interface Video {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/videos");
        const fetchedVideos: Video[] = response.data;

        setVideos(fetchedVideos);
        setLoading(false);
      } catch (error) {
        console.error("Error loading videos:", error);
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  // Categorizar os vídeos
  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Fullstack",
    "DevOps",
    "Testing",
  ];
  const categorizedVideos = categories.reduce((acc, category) => {
    acc[category] = videos.filter((video) => video.category === category);
    return acc;
  }, {} as Record<string, Video[]>);

  if (loading) {
    return <div>Carregando vídeos...</div>;
  }

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner
        title="Bem-vindo ao Aluraflix!"
        description="Aqui você encontra os melhores vídeos para sua jornada."
        buttonLabel="Explore agora"
        onButtonClick={() => alert("Explorar")}
      />

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">
          Bem-vindo ao Aluraflix!
        </h1>

        {/* Categorias de Vídeos */}
        <div>
          {Object.entries(categorizedVideos).map(
            ([category, categoryVideos]) => (
              <Category
                key={category}
                title={category}
                videos={categoryVideos}
              />
            )
          )}
        </div>

        {/* Campo de Texto */}
        <div className="my-8">
          <TextField label="Comentários" placeholder="Deixe seus comentários" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default HomePage;
