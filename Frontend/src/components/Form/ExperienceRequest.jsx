import React from 'react';
import { useExperienceFormContext } from '../../context/ExperienceFormContext';
import { faCircleCheck, faHeart, faList, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ExperienceRequest = () => {
  const { formData, setFormData, submitFormData } = useExperienceFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Modificar aquí para usar fetch y enviar datos al backend
      const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud al backend');
      }

      // Opcional: respuesta del servidor si la necesitas
      const data = await response.json();

      toast.success('Publicación solicitada con éxito!');
      setFormData({}); // Resetear el formulario
    } catch (error) {
      toast.error('Error al solicitar la publicación');
      console.error('Error:', error);
    }
  };


  return (
    <>

<form className='flex flex-col px-auto sm:mx-64 gap-y-4' onSubmit={handleSubmit}>

<h3 className="text-center mb-5 text-2xl font-bold tracking-tight text-gray-900">Solicita la publicación de una experiencia</h3>
<h3 className="text-center mb-10 text-md tracking-tight text-gray-700">Ingresa los datos básicos para solicitar la publicación de tu experiencia y continuar con el <strong>proceso Le Trip</strong>. Nuestro equipo estará en contacto contigo para ir apoyándote en el proceso.</h3>
<h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Información básica de la experiencia </h3>

      <label className='text-gray-700 text-sm' htmlFor="experience_name" >Título de la experiencia. <span className='text-xs italic'> (Escribe algo simple, breve y persuasivo para los visitantes de Le Trip)</span></label>
      <input
        id="experience_name"
        name="experience_name"
        type="text"
        required
        value={formData.experience_name}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
              
      />
      <label className='text-gray-700 text-sm' htmlFor="experience_main_discipline">Disciplina principal</label>
      <select
        required
        id="experience_main_discipline"
        name="experience_main_discipline"
        value={formData.experience_main_discipline}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      >
        <option value=""></option>
        <option value="Surf">Surf</option>
        <option value="Ciclismo">Ciclismo</option>
        <option value="Pesca">Pesca</option>
        <option value="Snowsports">Snowsports</option>
        <option value="Trekking/Camping">Trekking/Camping</option>
        <option value="Escalada">Escalada</option>
        <option value="Yoga">Yoga</option>
        <option value="Escalada">Otros</option>
      </select>
      <label className='text-gray-700 text-sm' htmlFor="experience_type">Tipo de experiencia</label>
      <select
        required
        id="experience_type"
        name="experience_type"
        value={formData.experience_type}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      >
        <option value=''></option>
        <option value='Experiencia por el fin de semana'>Viaje de un fin de semana</option>
        <option value='Experiencia por semanas'>Viaje por semanas</option>
        <option value='Experiencia por meses'>Viaje por meses</option>
        </select>
        <label className='text-gray-700 text-sm' htmlFor="technical_level">Nivel técnico</label>
        <select
          required
          id="technical_level"
          name="technical_level"
          value={formData.experience_demand_level}
          onChange={handleChange}
          className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
        >
          <option value=''></option>
          <option value="Básico">Básico</option>
          <option value="Fácil">Fácil</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
          <option value="Experto">Experto</option>
          <option value="Todos los niveles">Todos los niveles</option>
        </select>
        <label className='text-gray-700 text-sm' htmlFor="experience_geography">Tipo de geografía</label>
        <select
          required
          id="experience_geography"
          name="experience_geography"
          value={formData.experience_geography}
          onChange={handleChange}
          className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
        >
          <option value=""></option>
          <option value="Océano">Océano</option>
          <option value="Montaña">Montaña</option>
          <option value="Selva">Selva</option>
          <option value="Bosque">Bosque</option>
          <option value="Río">Río</option>
          <option value="Desierto">Desierto</option>
        </select>
      <label className='text-gray-700 text-sm' htmlFor="experience_country">País de la experiencia</label>
      <input
        id="experience_country"
        name="experience_country"
        type="text"
        required
        value={formData.experience_country}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="experience_location">Ciudad</label>
      <input
        id="experience_location"
        name="experience_location"
        type="text"
        required
        value={formData.experience_location}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="itinerary">Descripción del itinerario de la experiencia.<span className='text-xs italic'></span></label>
      <textarea
        id="itinerary"
        name="itinerary"
        type="text"
        required
        value={formData.itinerary}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="dont_forget">Cosas que no puede olvidar el aficionado<span className='text-xs italic'></span></label>
      <textarea
        id="dont_forget"
        name="dont_forget"
        type="text"
        required
        value={formData.dont_forget}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />

<h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Información del anfitrión </h3>

      <label className='text-gray-700 text-sm' htmlFor="experience_instructor">Anfitrión de la experiencia</label>
      <input
        id="experience_instructor"
        name="experience_instructor"
        type="text"
        required
        value={formData.experience_instructor}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="experience_instructor_type">Tipo de anfitrión</label>
      <select
        required
        id="experience_instructor_type"
        name="experience_instructor_type"
        value={formData.experience_instructor_type}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      >
        <option value="Instructor">Instructor</option>
        <option value="Guía">Guía</option>
        <option value="Especialista">Especialista</option>
        <option value="Anfitrión">Anfitrión</option>
      </select>
      <label className='text-gray-700 text-sm' htmlFor="experience_instructor_message">Mensaje del instructor. <span className='text-xs italic'> (Invita mediante un mensaje cautivante a la persona que está visitando la experiencia.)</span></label>
      <textarea
        id="experience_instructor_message"
        name="experience_instructor_message"
        value={formData.experience_instructor_message}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
  
  <h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Información del precio </h3>

      <label className='text-gray-700 text-sm' htmlFor="experience_price">Valor de la experiencia (USD)</label>
      <input
        id="experience_price"
        name="experience_price"
        type="number"
        min="0" 
        required
        value={formData.experience_price}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <div className='grid grid-cols-4 gap-x-2'>
      <div>
      <label className='text-gray-700 text-sm' htmlFor="discount_2">Descuento por 2 aficionados</label>
      <input
        id="discount_2"
        name="discount_2"
        type="number"
        min="0"
        max="100" 
        required
        value={formData.discount_2}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      </div>
      <div>
      <label className='text-gray-700 text-sm' htmlFor="discount_2">Descuento por 3 aficionados</label>
      <input
        id="discount_3"
        name="discount_3"
        type="number"
        min="0"
        max="100"
        step="1"
        required
        value={formData.discount_3}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      </div>
      <div>
      <label className='text-gray-700 text-sm' htmlFor="discount_2">Descuento por 4 aficionados</label>
      <input
        id="discount_4"
        name="discount_4"
        type="number"
        min="0"
        max="100" 
        required
        value={formData.discount_4}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      </div>
      <div>
      <label className='text-gray-700 text-sm' htmlFor="discount_2">Descuento por 5 aficionados</label>
      <input
        id="discount_5"
        name="discount_5"
        type="number"
        min="0"
        max="100" 
        required
        value={formData.discount_5}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      </div>
      </div>

<h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Restricciones <span className='text-xs italic'> (Todos los campos son requeridos)</span></h3>
      <label className='text-gray-700 text-sm' htmlFor="target_audience_restrictions">Restricciones de la experiencia<span className='text-xs italic'> (Menciona las restricciones que pueden haber en una experiencia, tales como estado de salud, condición física, entre otros. Escribe algo breve y específico) </span></label>
      <input
        id="target_audience_restrictions"
        name="target_audience_restrictions"
        type="text"
        required
        value={formData.target_audience_restrictions}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="minimum_age">Edad mínima</label>
      <input
        id="minimum_age"
        name="minimum_age"
        type="number"
        required
        value={formData.minimum_age}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="minimum_group_size">Cantidad mínima del grupo</label>
      <input
        id="minimum_group_size"
        name="minimum_group_size"
        type="number"
        required
        value={formData.minimum_group_size}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
<h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Equipo y vestuario</h3>
      <li className='grid grid-cols-2 list-none pb-5'>
      <label className='text-gray-700 text-sm' htmlFor="included_equipment_rental">Alquiler de equipos incluido:</label>
      <input
        id="included_equipment_rental"
        name="included_equipment_rental"
        type="checkbox"
        checked={formData.included_equipment_rental}
        onChange={handleChange}
      />
      </li>
      <label className='text-gray-700 text-sm' htmlFor="equipment_required">Equipo requerido <span className='text-xs italic'> (Campo requerido)</span></label>
      <input
        id="equipment_required"
        name="equipment_required"
        type="text"
        required
        value={formData.equipment_required}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
<h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Entrenamiento</h3>
      
      <li className='grid grid-cols-2 list-none pb-5 gap-y-5'>
      <label className='text-gray-700 text-sm' htmlFor="included_practical_lessons">Lecciones prácticas incluidas:</label>
      <input
        id="included_practical_lessons"
        name="included_practical_lessons"
        type="checkbox"
        checked={formData.included_practical_lessons}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="included_theoretical_lessons">Lecciones teóricas incluidas:</label>
      <input
        id="included_theoretical_lessons"
        name="included_theoretical_lessons"
        type="checkbox"
        checked={formData.included_theoretical_lessons}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="included_yoga">Yoga incluido:</label>
      <input
        id="included_yoga"
        name="included_yoga"
        type="checkbox"
        checked={formData.included_yoga}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="included_training">Entrenamiento incluido:</label>
      <input
        id="included_training"
        name="included_training"
        type="checkbox"
        checked={formData.included_training}
        onChange={handleChange}
      />
      </li>
<h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Alojamiento</h3>
<label className='text-gray-700 text-sm' htmlFor="experience_acommodation">Tipo de alojamiento <span className='text-xs italic'> (Campo requerido)</span></label>
<select
  required
  id="experience_acommodation"
  name="experience_acommodation"
  value={formData.experience_acommodation}
  onChange={handleChange}
  className="text-sm block w-full mt-1 p-2 mb-5 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
>
  <option value=""></option>
  <option value="Hotel">Hotel</option>
  <option value="Alojamiento rural">Alojamiento rural</option>
  <option value="Refugio de montaña">Refugio de montaña</option>
  <option value="Chalet/lodge">Chalet/lodge</option>
  <option value="Camping">Camping</option>
  <option value="Cabaña">Cabaña</option>
  <option value="Hostal">Hostal</option>
  <option value="Casa">Casa</option>
  <option value="Otro">Otro</option>
  <option value="No incluido">No incluido</option>
</select>
      <li className='grid grid-cols-2 list-none pb-5 gap-y-5'>
      <label className='text-gray-700 text-sm' htmlFor="meal_breakfast">Desayuno incluido:</label>
      <input
        id="meal_breakfast"
        name="meal_breakfast"
        type="checkbox"
        checked={formData.meal_breakfast}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="meal_lunch">Almuerzo incluido:</label>
      <input
        id="meal_lunch"
        name="meal_lunch"
        type="checkbox"
        checked={formData.meal_lunch}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="meal_dinner">Cena incluida:</label>
      <input
        id="meal_dinner"
        name="meal_dinner"
        type="checkbox"
        checked={formData.meal_dinner}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="meal_snacks_and_drinks">Aperitivos y bebidas incluidos:</label>
      <input
        id="meal_snacks_and_drinks"
        name="meal_snacks_and_drinks"
        type="checkbox"
        checked={formData.meal_snacks_and_drinks}
        onChange={handleChange}
      />
      </li> 
       
      <label className='text-gray-700 text-sm' htmlFor="acommodation">Descripción del alojamiento de la experiencia.<span className='text-xs italic'></span></label>
      <textarea
        id="acommodation"
        name="acommodation"
        value={formData.acommodation}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
<h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Transporte </h3>
      <li className='grid grid-cols-2 list-none pb-5 gap-y-5'>
      <label className='text-gray-700 text-sm' htmlFor="transport_airport">Transporte desde el aeropuerto incluido</label>
      <input
        id="transport_airport"
        name="transport_airport"
        type="checkbox"
        checked={formData.transport_airport}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="transport_during_experience">Transporte durante la experiencia incluido:</label>
      <input
        id="transport_during_experience"
        name="transport_during_experience"
        type="checkbox"
        checked={formData.transport_during_experience}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="included_experience_video">Video de la experiencia incluido:</label>
      <input
        id="included_experience_video"
        name="included_experience_video"
        type="checkbox"
        checked={formData.included_experience_video}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="included_entry_fees">Tarifas de entrada incluidas:</label>
      <input
        id="included_entry_fees"
        name="included_entry_fees"
        type="checkbox"
        checked={formData.included_entry_fees}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="included_lift_ticket">Ticket de andarivel incluido:</label>
      <input
        id="included_lift_ticket"
        name="included_lift_ticket"
        type="checkbox"
        checked={formData.included_lift_ticket}
        onChange={handleChange}
      />
    </li>
<h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Seguridad</h3>
      
      <li className='grid grid-cols-2 list-none pb-5 gap-y-5'>
      <label className='text-gray-700 text-sm' htmlFor="certified_instructor">Instructor certificado:</label>
      <input
        id="certified_instructor"
        name="certified_instructor"
        type="checkbox"
        checked={formData.certified_instructor}
        onChange={handleChange}
      />
      <label className='text-gray-700 text-sm' htmlFor="included_accident_insurance">Seguro de accidentes incluido:</label>
      <input
        id="included_accident_insurance"
        name="included_accident_insurance"
        type="checkbox"
        checked={formData.included_accident_insurance}
        onChange={handleChange}
      />
      </li>

      <label className='text-gray-700 text-sm' htmlFor="accident_insurance_link">Link al seguro de accidentes</label>
      <input
        id="accident_insurance_link"
        name="accident_insurance_link"
        type="text"
        required
        value={formData.accident_insurance_link}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
        

      <button  type="submit" className="block w-full rounded-md my-10 px-3 py-4 text-center text-xl font-semibold shadow-sm hover:bg-black hover:text-letrip bg-letrip text-black">
        Solicitar publicación
    </button>
    <ToastContainer position="bottom-right" />
</form>
</>
  )}


      export default ExperienceRequest;