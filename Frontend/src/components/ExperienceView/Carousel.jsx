import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = ({ experienceCard }) => {
  const { id } = useParams();
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  if (!selectedExperience) {
    return <div className="text-center">No se encontró la experiencia</div>;
  }

  const imageUrls = [];
  for (let i = 1; i <= 10; i++) {
    const imgUrl = selectedExperience[`card_img_${i}`];
    if (imgUrl) {
      imageUrls.push(imgUrl);
    }
  }

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
    <h2 className="text-3xl text-left sm:px-32 font-bold tracking-tight text-gray-900 mb-4">{selectedExperience.experience_name}</h2>

      <div className="carousel-container flex justify-center items-center flex-col">
        {imageUrls.length > 0 && (
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center overflow-hidden gap-x-5">
            <button onClick={prevImage} className="px-4 py-2  text-black font-bold transition duration-300"> <FontAwesomeIcon icon={faChevronLeft} /> </button>
              {displayedImages.map((url, index) => (
                <img key={index} src={url} alt={`Imagen ${currentImageIndex + index + 1}`} className="w-1/4 h-full object-cover rounded-2xl" />
              ))}
            <button onClick={nextImage} className="px-4 py-2  text-black font-bold transition duration-300"> <FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
          </div>
        )}
      </div>
      {/* Resto del componente Carousel... */}
    </>
  );
};

export default Carousel;
