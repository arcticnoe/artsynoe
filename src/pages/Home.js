// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-primary text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Artsy Noe</h1>
      <p className="mb-8">Explora mis proyectos de pintura en vidrio.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Aquí van las imágenes de la galería */}
        <div className="bg-white rounded shadow p-4">
          <img src="/path-to-image" alt="Glass painting 1" />
          <p className="mt-2">Pintura en vidrio 1</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
