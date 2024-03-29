import React from 'react';
import { useParams } from 'react-router-dom';


const Galeria = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  if (!selectedExperience) {
    return <div>No se encontraron imágenes</div>;
  }

  // Las URLs de las imágenes se obtienen directamente del selectedExperience
  const imagenes = [
    selectedExperience.card_img_1,
    selectedExperience.card_img_2,
    selectedExperience.card_img_3,
    selectedExperience.card_img_4,
    selectedExperience.card_img_5,
    selectedExperience.card_img_6,
    selectedExperience.card_img_7,
    selectedExperience.card_img_8,
    selectedExperience.card_img_9,
    selectedExperience.card_img_10,

    // Añade más URLs como necesites
  ];

  return ( //GRID: seccion fotos, seccion informacion + invitacion anfitrion, reserva


<div className='mx-6'>
  {imagenes.map((imagen, index) => (
    imagen ? (
      <img key={index} src={imagen} alt={`Experience Image ${index + 1}`} className="object-cover rounded-3xl w-auto h-auto m-2" />
    ) : null
  ))}
</div>

  );
  
};

export default Galeria;