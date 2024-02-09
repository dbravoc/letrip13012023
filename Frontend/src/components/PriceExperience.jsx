import React from 'react';

const PriceExperience = ({ experienceCard }) => {
  // Asumiendo que quieres mostrar el precio de la primera experiencia
  // O asegúrate de seleccionar la experiencia correcta de alguna manera
  const experiencePrice = experienceCard.experiences?.[0]?.experience_price;

  return (
    <div className="price-container">
      <h3 className="text-2xl font-bold mb-4">Precio de la Experiencia</h3>
      {experiencePrice ? (
        <p className="text-lg">
          $US<span className="font-semibold">{experiencePrice}</span> por persona
        </p>
      ) : (
        <p className="text-lg">Precio no disponible</p>
      )}
    </div>
  );
};

export default PriceExperience;
