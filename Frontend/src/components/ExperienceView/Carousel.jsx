import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Importar los íconos y demás componentes necesarios como antes...

const Carousel = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  if (!selectedExperience) {
    return <div>No se encontró la experiencia</div>;
  }

  // Extraer las URLs de las imágenes desde el registro de Supabase
  const imageUrls = [];
  for (let i = 1; i <= 10; i++) {
    const imgUrl = selectedExperience[`card_img_${i}`];
    if (imgUrl) {
      imageUrls.push(imgUrl);
    }
  }

  // Componente de Carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
  const prevImage = () => setCurrentImageIndex((currentImageIndex - 1 + imageUrls.length) % imageUrls.length);

  // Componentes de la vista y el carrusel integrados...
  return (
    <>
      <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 mb-4">{selectedExperience.experience_name}</h2>
      <div className="carousel-container">
        {imageUrls.length > 0 && (
          <div>
            <img src={imageUrls[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
            <button onClick={prevImage}>Anterior</button>
            <button onClick={nextImage}>Siguiente</button>
          </div>
        )}
      </div>
      {/* Resto del componente Carousel... */}
    </>
  );
};

export default Carousel;
