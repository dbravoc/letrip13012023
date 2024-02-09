import React from 'react';

// Componente PriceExperience que acepta ExperienceCard como prop
const PriceExperience = ({ ExperienceCard }) => {
  return (
    <div className="price-container">
      <h3 className="text-2xl font-bold mb-4">Valor de la Experiencia</h3>
      <p className="text-lg">
      US$<span className="font-semibold">{ExperienceCard.experience_price}</span> por persona
      </p>
    </div>
  );
};

export default PriceExperience;
