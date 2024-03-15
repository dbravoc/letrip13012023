import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = ({ experienceCard }) => {
  const { id } = useParams();
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  if (!selectedExperience) {
    return <div className="text-center">Cargando...</div>;
  }

  const imageUrls = [];
  for (let i = 1; i <= 10; i++) {
    const imgUrl = selectedExperience[`card_img_${i}`];
    if (imgUrl) {
      imageUrls.push(imgUrl);
    }
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesToShow = window.innerWidth < 640 ? 1 : 3;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + imagesToShow < imageUrls.length) ? prevIndex + imagesToShow : 0);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - imagesToShow >= 0) ? prevIndex - imagesToShow : (imageUrls.length - (imageUrls.length % imagesToShow || imagesToShow)));
  };

  const displayedImages = imageUrls.slice(currentImageIndex, currentImageIndex + imagesToShow);

  return (
    <>
      <h2 className="md:mx-36 py-2 text-3xl text-left font-bold tracking-tight text-gray-900 mb-10">{selectedExperience.experience_name}</h2>
      <div className="relative carousel-container flex justify-center items-center">
        {imageUrls.length > 0 && (
          <div className="flex justify-between items-center w-full">
            <button onClick={prevImage} className="absolute z-30 left-0 px-2 py-2 text-black font-bold transition duration-300"> 
              <FontAwesomeIcon icon={faChevronLeft} /> 
            </button>
            {displayedImages.map((url, index) => (
              <img key={index} src={url} alt={`Imagen ${currentImageIndex + index + 1}`} className="block w-full h-auto object-cover rounded-2xl" />
            ))}
            <button onClick={nextImage} className="absolute z-30 right-0 px-2 py-2 text-black font-bold transition duration-300"> 
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Carousel;
