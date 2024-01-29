import React, { useState } from 'react';

const ExperienceForm = () => {
  const [formData, setFormData] = useState({
    experience_name: '',
    experience_description: '',
    experience_duration: '',
    experience_location: '',
    target_audience_restrictions: '',
    minimum_age: '',
    minimum_group_size: '',
    group_restrictions: '',
    discount_percentage: '',
    equipment_required: '',
    certified_instructor: false,
    included_practical_lessons: false,
    included_theoretical_lessons: false,
    included_yoga: false,
    included_training: false,
    included_experience_video: false,
    included_accident_insurance: false,
    included_equipment_rental: false,
    included_entry_fees: false,
    included_lift_ticket: false,
    accommodation_other: '',
    meal_breakfast: false,
    meal_lunch: false,
    meal_dinner: false,
    meal_snacks_and_drinks: false,
    transport_airport: false,
    transport_during_experience: false,
    experience_type: '',
    experience_country: '',
    experience_instructor_message: '',
    experience_main_discipline: '',
    experience_geography: '',
    experience_demand_level: '',
    experience_price: '',
    experience_instructor: '',
    experience_instructor_type: '',
    card_img_1: '',
    card_img_2: '',
    card_img_3: '',
    card_img_4: '',
    experience_included_description: '',
    instructor_profile_img: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/experiences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      console.log('Experiencia creada:', result);
      // Resetear el formulario
      setFormData({
        experience_name: '',
        experience_description: '',
        experience_duration: '',
        experience_location: '',
        target_audience_restrictions: '',
        minimum_age: '',
        minimum_group_size: '',
        group_restrictions: '',
        discount_percentage: '',
        equipment_required: '',
        certified_instructor: false,
        included_practical_lessons: false,
        included_theoretical_lessons: false,
        included_yoga: false,
        included_training: false,
        included_experience_video: false,
        included_accident_insurance: false,
        included_equipment_rental: false,
        included_entry_fees: false,
        included_lift_ticket: false,
        accommodation_other: '',
        meal_breakfast: false,
        meal_lunch: false,
        meal_dinner: false,
        meal_snacks_and_drinks: false,
        transport_airport: false,
        transport_during_experience: false,
        experience_type: '',
        experience_country: '',
        experience_instructor_message: '',
        experience_main_discipline: '',
        experience_geography: '',
        experience_demand_level: '',
        experience_price: '',
        experience_instructor: '',
        experience_instructor_type: '',
        card_img_1: '',
        card_img_2: '',
        card_img_3: '',
        card_img_4: '',
        experience_included_description: '',
        instructor_profile_img: '',
      });
    } catch (error) {
      console.error('Error al crear experiencia:', error);
    }
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <label htmlFor="experience_name">Nombre de la Experiencia:</label>
      <input
        id="experience_name"
        name="experience_name"
        type="text"
        value={formData.experience_name}
        onChange={handleChange}
        placeholder="Introduce el nombre de la experiencia"
      />

      <label htmlFor="experience_description">Descripción Corta:</label>
      <textarea
        id="experience_description"
        name="experience_description"
        value={formData.experience_description}
        onChange={handleChange}
        placeholder="Descripción de la experiencia"
      />

      <label htmlFor="experience_duration">Duración (en horas):</label>
      <input
        id="experience_duration"
        name="experience_duration"
        type="number"
        value={formData.experience_duration}
        onChange={handleChange}
        placeholder="Duración de la experiencia"
      />

      <label htmlFor="experience_location">Ubicación:</label>
      <input
        id="experience_location"
        name="experience_location"
        type="text"
        value={formData.experience_location}
        onChange={handleChange}
        placeholder="Ubicación de la experiencia"
      />

      <label htmlFor="target_audience_restrictions">Restricciones para el público objetivo:</label>
      <input
        id="target_audience_restrictions"
        name="target_audience_restrictions"
        type="text"
        value={formData.target_audience_restrictions}
        onChange={handleChange}
        placeholder="Restricciones para el público objetivo"
      />

      <label htmlFor="minimum_age">Edad mínima:</label>
      <input
        id="minimum_age"
        name="minimum_age"
        type="number"
        value={formData.minimum_age}
        onChange={handleChange}
        placeholder="Edad mínima requerida"
      />

      <label htmlFor="minimum_group_size">Tamaño mínimo del grupo:</label>
      <input
        id="minimum_group_size"
        name="minimum_group_size"
        type="number"
        value={formData.minimum_group_size}
        onChange={handleChange}
        placeholder="Tamaño mínimo del grupo"
      />

      <label htmlFor="group_restrictions">Restricciones de grupo:</label>
      <input
        id="group_restrictions"
        name="group_restrictions"
        type="text"
        value={formData.group_restrictions}
        onChange={handleChange}
        placeholder="Restricciones de grupo"
      />

      <label htmlFor="discount_percentage">Porcentaje de descuento:</label>
      <input
        id="discount_percentage"
        name="discount_percentage"
        type="number"
        value={formData.discount_percentage}
        onChange={handleChange}
        placeholder="Porcentaje de descuento"
      />

      <label htmlFor="equipment_required">Equipo requerido:</label>
      <input
        id="equipment_required"
        name="equipment_required"
        type="text"
        value={formData.equipment_required}
        onChange={handleChange}
        placeholder="Equipo requerido"
      />

      <label htmlFor="certified_instructor">Instructor certificado:</label>
      <input
        id="certified_instructor"
        name="certified_instructor"
        type="checkbox"
        checked={formData.certified_instructor}
        onChange={handleChange}
      />

      <label htmlFor="included_practical_lessons">Lecciones prácticas incluidas:</label>
      <input
        id="included_practical_lessons"
        name="included_practical_lessons"
        type="checkbox"
        checked={formData.included_practical_lessons}
        onChange={handleChange}
      />

      <label htmlFor="included_theoretical_lessons">Lecciones teóricas incluidas:</label>
      <input
        id="included_theoretical_lessons"
        name="included_theoretical_lessons"
        type="checkbox"
        checked={formData.included_theoretical_lessons}
        onChange={handleChange}
      />

      <label htmlFor="included_yoga">Yoga incluido:</label>
      <input
        id="included_yoga"
        name="included_yoga"
        type="checkbox"
        checked={formData.included_yoga}
        onChange={handleChange}
      />

      <label htmlFor="included_training">Entrenamiento incluido:</label>
      <input
        id="included_training"
        name="included_training"
        type="checkbox"
        checked={formData.included_training}
        onChange={handleChange}
      />

      <label htmlFor="included_experience_video">Video de la experiencia incluido:</label>
      <input
        id="included_experience_video"
        name="included_experience_video"
        type="checkbox"
        checked={formData.included_experience_video}
        onChange={handleChange}
      />

      <label htmlFor="included_accident_insurance">Seguro de accidentes incluido:</label>
      <input
        id="included_accident_insurance"
        name="included_accident_insurance"
        type="checkbox"
        checked={formData.included_accident_insurance}
        onChange={handleChange}
      />

      <label htmlFor="included_equipment_rental">Alquiler de equipos incluido:</label>
      <input
        id="included_equipment_rental"
        name="included_equipment_rental"
        type="checkbox"
        checked={formData.included_equipment_rental}
        onChange={handleChange}
      />

      <label htmlFor="included_entry_fees">Tarifas de entrada incluidas:</label>
      <input
        id="included_entry_fees"
        name="included_entry_fees"
        type="checkbox"
        checked={formData.included_entry_fees}
        onChange={handleChange}
      />

      <label htmlFor="included_lift_ticket">Boleto de ascensor incluido:</label>
      <input
        id="included_lift_ticket"
        name="included_lift_ticket"
        type="checkbox"
        checked={formData.included_lift_ticket}
        onChange={handleChange}
      />

      <label htmlFor="accommodation_other">Otro tipo de alojamiento:</label>
      <input
        id="accommodation_other"
        name="accommodation_other"
        type="text"
        value={formData.accommodation_other}
        onChange={handleChange}
        placeholder="Otro tipo de alojamiento"
      />

      <label htmlFor="meal_breakfast">Desayuno incluido:</label>
      <input
        id="meal_breakfast"
        name="meal_breakfast"
        type="checkbox"
        checked={formData.meal_breakfast}
        onChange={handleChange}
      />

      <label htmlFor="meal_lunch">Almuerzo incluido:</label>
      <input
        id="meal_lunch"
        name="meal_lunch"
        type="checkbox"
        checked={formData.meal_lunch}
        onChange={handleChange}
      />

      <label htmlFor="meal_dinner">Cena incluida:</label>
      <input
        id="meal_dinner"
        name="meal_dinner"
        type="checkbox"
        checked={formData.meal_dinner}
        onChange={handleChange}
      />

      <label htmlFor="meal_snacks_and_drinks">Aperitivos y bebidas incluidos:</label>
      <input
        id="meal_snacks_and_drinks"
        name="meal_snacks_and_drinks"
        type="checkbox"
        checked={formData.meal_snacks_and_drinks}
        onChange={handleChange}
      />

      <label htmlFor="transport_airport">Transporte desde el aeropuerto incluido:</label>
      <input
        id="transport_airport"
        name="transport_airport"
        type="checkbox"
        checked={formData.transport_airport}
        onChange={handleChange}
      />

      <label htmlFor="transport_during_experience">Transporte durante la experiencia incluido:</label>
      <input
        id="transport_during_experience"
        name="transport_during_experience"
        type="checkbox"
        checked={formData.transport_during_experience}
        onChange={handleChange}
      />

      <label htmlFor="experience_type">Tipo de experiencia:</label>
      <input
        id="experience_type"
        name="experience_type"
        type="text"
        value={formData.experience_type}
        onChange={handleChange}
        placeholder="Tipo de experiencia"
      />

      <label htmlFor="experience_country">País de la experiencia:</label>
      <input
        id="experience_country"
        name="experience_country"
        type="text"
        value={formData.experience_country}
        onChange={handleChange}
        placeholder="País de la experiencia"
      />

      <label htmlFor="experience_instructor_message">Mensaje del instructor:</label>
      <textarea
        id="experience_instructor_message"
        name="experience_instructor_message"
        value={formData.experience_instructor_message}
        onChange={handleChange}
        placeholder="Mensaje del instructor"
      />

      <label htmlFor="experience_main_discipline">Disciplina principal de la experiencia:</label>
      <input
        id="experience_main_discipline"
        name="experience_main_discipline"
        type="text"
        value={formData.experience_main_discipline}
        onChange={handleChange}
        placeholder="Disciplina principal de la experiencia"
      />

      <label htmlFor="experience_geography">Geografía de la experiencia:</label>
      <input
        id="experience_geography"
        name="experience_geography"
        type="text"
        value={formData.experience_geography}
        onChange={handleChange}
        placeholder="Geografía de la experiencia"
      />

      <label htmlFor="experience_demand_level">Nivel de demanda de la experiencia:</label>
      <input
        id="experience_demand_level"
        name="experience_demand_level"
        type="text"
        value={formData.experience_demand_level}
        onChange={handleChange}
        placeholder="Nivel de demanda de la experiencia"
      />

      <label htmlFor="experience_price">Precio de la experiencia:</label>
      <input
        id="experience_price"
        name="experience_price"
        type="number"
        value={formData.experience_price}
        onChange={handleChange}
        placeholder="Precio de la experiencia"
      />

      <label htmlFor="experience_instructor">Instructor de la experiencia:</label>
      <input
        id="experience_instructor"
        name="experience_instructor"
        type="text"
        value={formData.experience_instructor}
        onChange={handleChange}
        placeholder="Instructor de la experiencia"
      />

      <label htmlFor="experience_instructor_type">Tipo de instructor:</label>
      <input
        id="experience_instructor_type"
        name="experience_instructor_type"
        type="text"
        value={formData.experience_instructor_type}
        onChange={handleChange}
        placeholder="Tipo de instructor"
      />

      <label htmlFor="card_img_1">Imagen de la tarjeta 1:</label>
      <input
        id="card_img_1"
        name="card_img_1"
        type="text"
        value={formData.card_img_1}
        onChange={handleChange}
        placeholder="URL de la imagen 1"
      />

      <label htmlFor="card_img_2">Imagen de la tarjeta 2:</label>
      <input
        id="card_img_2"
        name="card_img_2"
        type="text"
        value={formData.card_img_2}
        onChange={handleChange}
        placeholder="URL de la imagen 2"
      />

      <label htmlFor="card_img_3">Imagen de la tarjeta 3:</label>
      <input
        id="card_img_3"
        name="card_img_3"
        type="text"
        value={formData.card_img_3}
        onChange={handleChange}
        placeholder="URL de la imagen 3"
      />

      <label htmlFor="card_img_4">Imagen de la tarjeta 4:</label>
      <input
        id="card_img_4"
        name="card_img_4"
        type="text"
        value={formData.card_img_4}
        onChange={handleChange}
        placeholder="URL de la imagen 4"
      />

      <label htmlFor="experience_included_description">Descripción incluida de la experiencia:</label>
      <textarea
        id="experience_included_description"
        name="experience_included_description"
        value={formData.experience_included_description}
        onChange={handleChange}
        placeholder="Descripción incluida de la experiencia"
      />

      <label htmlFor="instructor_profile_img">Imagen de perfil del instructor:</label>
      <input
        id="instructor_profile_img"
        name="instructor_profile_img"
        type="text"
        value={formData.instructor_profile_img}
        onChange={handleChange}
        placeholder="URL de la imagen de perfil del instructor"
      />

      <button type="submit">Crear Experiencia</button>
    </form>
  );
};

export default ExperienceForm;
