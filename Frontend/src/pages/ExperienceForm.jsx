import React, { useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Estilos principales
import 'react-date-range/dist/theme/default.css'; // Tema por defecto
import { ExperienceFormContext } from '../context/ExperienceFormContext'; // Asegúrate de que la ruta de importación sea correcta

const ExperienceForm = ({ mode, initialData, onSubmit }) => {
  const {
    formData,
    setFormData,
    dateRanges,
    setDateRanges,
    currentRange,
    setCurrentRange,
    handleImageUpload, // Asegúrate de que esta función esté definida en tu contexto si es necesario
    addRange,
    removeRange,
  } = useContext(ExperienceFormContext);

  useEffect(() => {
    if (mode === 'update' && initialData) {
      const formattedDates = initialData.available_dates ? initialData.available_dates.map(date => ({
        startDate: new Date(date.startDate),
        endDate: new Date(date.endDate),
        key: 'selection',
      })) : [];
      setCurrentRange(formattedDates);
      setFormData({ ...initialData, available_dates: formattedDates });
    } else if (mode === 'availability' && initialData) {
      const availabilityDates = initialData.available_dates ? initialData.available_dates.map(date => ({
        startDate: new Date(date.startDate),
        endDate: new Date(date.endDate),
        key: 'selection',
      })) : [];
      setDateRanges(availabilityDates);
    }
  }, [mode, initialData, setCurrentRange, setDateRanges, setFormData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Filtrar solo rangos de fechas válidos antes de enviar
    const validDateRanges = dateRanges.filter(range => 
      range.startDate && range.endDate && !isNaN(new Date(range.startDate).getTime()) && !isNaN(new Date(range.endDate).getTime())
    );

    // Actualizar formData con las fechas disponibles
    const updatedFormData = {
      ...formData,
      available_dates: validDateRanges.length > 0 ? JSON.stringify(validDateRanges.map(range => ({
        startDate: format(range.startDate, 'yyyy-MM-dd'),
        endDate: format(range.endDate, 'yyyy-MM-dd'),
      }))) : undefined,
    };

    // Lógica de envío adaptada al contexto
    try {
      console.log("Enviando formData:", JSON.stringify(updatedFormData));
      const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences', {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const result = await response.json();
      console.log('Experiencia creada:', result);
      
      // Resetear el formulario
      setFormData({
        experience_name: '',
        experience_duration: '',
        experience_location: '',
        target_audience_restrictions: '',
        minimum_age: '',
        minimum_group_size: '',
        group_restrictions: '',
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
        experience_accommodation: '',
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
        accident_insurance_file: '',
        available_dates: {},
      });
      setDateRanges([]); // Limpiar las fechas seleccionadas
       // Mostrar notificación de éxito
       // toast.success('Experiencia creada con éxito');
      
    } catch (error) {
      console.error('Error al crear experiencia:', error);
      // Mostrar notificación de error
   // toast.error('Error al crear la experiencia.');
    }
  };
  


  return (
    <form className='flex flex-col px-auto sm:px-72 gap-y-2' onSubmit={handleSubmit}>
<h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Datos generales <span className='text-xs italic'> (Todos los campos son requeridos)</span></h3>
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
        <option value='Curso'>Curso</option>
        <option value='Campamento formativo'>Campamento formativo</option>
        <option value='Viaje de un fin de semana'>Viaje de un fin de semana</option>
        <option value='Viaje de una semana'>Viaje de una semana</option>
        <option value='Viaje de una semana o más'>Viaje de una semana o más</option>
        </select>
        <label className='text-gray-700 text-sm' htmlFor="experience_demand_level">Nivel de exigencia</label>
        <select
          required
          id="experience_demand_level"
          name="experience_demand_level"
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
      <label className='text-gray-700 text-sm' htmlFor="experience_instructor_message">Mensaje del instructor. <span className='text-xs italic'> (Invita mediante un mensaje cautivante a la persona que está visitando la experiencia. Dirígete en primera persona hacia un "tu")</span></label>
      <textarea
        id="experience_instructor_message"
        name="experience_instructor_message"
        value={formData.experience_instructor_message}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="experience_included_description">Descripción sobre qué incluye la experiencia.<span className='text-xs italic'> (Esto describe lo que incluye la experiencia que estaría comprando el cliente. Debes escribir algo breve, simple y específico)</span></label>
      <textarea
        id="experience_included_description"
        name="experience_included_description"
        value={formData.experience_included_description}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="experience_duration">Duración (en días):</label>
      <input
        id="experience_duration"
        name="experience_duration"
        type="number"
        min="0" 
        required
        value={formData.experience_duration}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
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


{(mode !== 'update' && mode !== 'create' && mode === 'availability') && (
  <>
  <h3 className=" my-10 mb-10 text-2xl font-bold tracking-tight text-gray-900">Fotos e imágenes <span className='text-xs italic'> (Todas las imagenes son requeridas para mejorar la experiencia en Le Trip)</span></h3>


      <label className='text-gray-700 text-sm' htmlFor="card_img_1">Imagen de experiencia 1:</label>
      <input
        id="card_img_1"
        name="card_img_1"
        type="file"
        required // Cambiamos el tipo de entrada a "file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageUpload} // Manejar la carga de imágenes en una función
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      
      <label className='text-gray-700 text-sm' htmlFor="card_img_1">Imagen de experiencia 2:</label>
      <input
        id="card_img_2"
        name="card_img_2"
        type="file"
        required // Cambiamos el tipo de entrada a "file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageUpload} // Manejar la carga de imágenes en una función
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="card_img_1">Imagen de experiencia 3:</label>
      <input
        id="card_img_3"
        name="card_img_3"
        type="file"
        required // Cambiamos el tipo de entrada a "file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageUpload} // Manejar la carga de imágenes en una función
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <label className='text-gray-700 text-sm' htmlFor="card_img_4">Imagen de experiencia 4:</label>
      <input
         id="card_img_4"
         name="card_img_4"
         type="file"
        required // Cambiamos el tipo de entrada a "file"
         accept=".jpg, .jpeg, .png"
         onChange={handleImageUpload} // Manejar la carga de imágenes en una función
         className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
       />
      <label className='text-gray-700 text-sm' htmlFor="card_img_4">Imagen de experiencia 5:</label>
      <input
         id="card_img_5"
         name="card_img_5"
         type="file"
        required // Cambiamos el tipo de entrada a "file"
         accept=".jpg, .jpeg, .png"
         onChange={handleImageUpload} // Manejar la carga de imágenes en una función
         className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
       />
      <label className='text-gray-700 text-sm' htmlFor="card_img_4">Imagen de experiencia 6:</label>
      <input
         id="card_img_6"
         name="card_img_6"
         type="file"
        required // Cambiamos el tipo de entrada a "file"
         accept=".jpg, .jpeg, .png"
         onChange={handleImageUpload} // Manejar la carga de imágenes en una función
         className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
       />
      <label className='text-gray-700 text-sm' htmlFor="card_img_4">Imagen de experiencia 7:</label>
      <input
         id="card_img_7"
         name="card_img_7"
         type="file"
        required // Cambiamos el tipo de entrada a "file"
         accept=".jpg, .jpeg, .png"
         onChange={handleImageUpload} // Manejar la carga de imágenes en una función
         className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
       />
      <label className='text-gray-700 text-sm' htmlFor="card_img_4">Imagen de experiencia 8:</label>
      <input
         id="card_img_8"
         name="card_img_8"
         type="file"
        required // Cambiamos el tipo de entrada a "file"
         accept=".jpg, .jpeg, .png"
         onChange={handleImageUpload} // Manejar la carga de imágenes en una función
         className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
       />
      <label className='text-gray-700 text-sm' htmlFor="card_img_4">Imagen de experiencia 9:</label>
      <input
         id="card_img_9"
         name="card_img_9"
         type="file"
        required // Cambiamos el tipo de entrada a "file"
         accept=".jpg, .jpeg, .png"
         onChange={handleImageUpload} // Manejar la carga de imágenes en una función
         className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
       />
      <label className='text-gray-700 text-sm' htmlFor="card_img_4">Imagen de experiencia 10:</label>
      <input
         id="card_img_10"
         name="card_img_10"
         type="file"
        required // Cambiamos el tipo de entrada a "file"
         accept=".jpg, .jpeg, .png"
         onChange={handleImageUpload} // Manejar la carga de imágenes en una función
         className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
       />
      <label className='text-gray-700 text-sm' htmlFor="instructor_profile_img">Imagen de perfil del anfitrión</label>
      <input
         id="instructor_profile_img"
         name="instructor_profile_img"
         type="file"
        required // Cambiamos el tipo de entrada a "file"
         accept=".jpg, .jpeg, .png"
         onChange={handleImageUpload} // Manejar la carga de imágenes en una función
         className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
       />
  </>
)}


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
        min="0" 
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
        min="0" 
        required
        value={formData.minimum_group_size}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
<h3 className="my-10 text-2xl font-bold tracking-tight text-gray-900">Equipo</h3>
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
<label className='text-gray-700 text-sm' htmlFor="experience_accommodation">Tipo de alojamiento <span className='text-xs italic'> (Campo requerido)</span></label>
<select
  required
  id="experience_accommodation"
  name="experience_accommodation"
  value={formData.experience_accommodation}
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
      <label className='text-gray-700 text-sm' htmlFor="accident_insurance_file">Póliza del seguro</label>
      <input
        id="accident_insurance_file"
        name="accident_insurance_file"
        type="file" // Cambiado a tipo "file"
        accept=".pdf, .doc, .docx" // Aceptar solo formatos de archivo específicos, ajustar según sea necesario
        onChange={handleImageUpload} // Cambiar esto si tienes un método específico para manejar la carga de archivos que no sean imágenes
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
      />
      <button  type="submit" className="block w-full rounded-md my-10 px-3 py-4 text-center text-xl font-semibold shadow-sm hover:bg-black hover:text-letrip bg-letrip text-black">
        Subir Experiencia
        </button>
      <ToastContainer position="bottom-right" />
    </form>
  );
};
export default ExperienceForm;