import React from 'react';

const PriceExperience = ({ ExperienceCard }) => {
  // Verificar si ExperienceCard existe y tiene la propiedad experience_price
  const experiencePrice = ExperienceCard?.experience_price;

  return (
    <div className="price-container">
      <h3 className="text-2xl font-bold mb-4">Precio de la Experiencia</h3>
      {experiencePrice ? (
        // Si experiencePrice existe, mostrar el precio
        <p className="text-lg">
          $US<span className="font-semibold">{experiencePrice}</span> por persona
        </p>
      ) : (
        // Si experiencePrice no existe, mostrar un mensaje predeterminado
        <p className="text-lg">Precio no disponible</p>
      )}
    </div>
  );
};

export default PriceExperience;
