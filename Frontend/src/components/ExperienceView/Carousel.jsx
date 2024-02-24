import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Importar los íconos y demás componentes necesarios como antes...

const Carousel = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  if (!selectedExperience) {
    return <div></div>;
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
  const imagesToShow = 3; // Número de imágenes a mostrar a la vez

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + imagesToShow < imageUrls.length) ? prevIndex + imagesToShow : 0);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - imagesToShow >= 0) ? prevIndex - imagesToShow : (imageUrls.length - (imageUrls.length % imagesToShow || imagesToShow)));
  };

  // Calcular el rango de imágenes a mostrar
  const displayedImages = imageUrls.slice(currentImageIndex, currentImageIndex + imagesToShow);

  return (
    <>
      <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 mb-4">{selectedExperience.experience_name}</h2>
      <div className="carousel-container">
        {imageUrls.length > 0 && (
          <div>
            {displayedImages.map((url, index) => (
              <img key={index} src={url} alt={`Imagen ${currentImageIndex + index + 1}`} style={{ width: '33%', display: 'inline-block' }} />
            ))}
            <div>
              <button onClick={prevImage}>Anterior</button>
              <button onClick={nextImage}>Siguiente</button>
            </div>
          </div>
        )}
      </div>
      {/* Resto del componente ExperienceView... */}
    </>
  );
};

export default Carousel;
