import React from 'react';
import { useExperienceFormContext } from '/Users/capitan/letrip13012023/Frontend/src/context/ExperienceFormContext.jsx'; // Asegúrate de que la ruta sea correcta

const BasicsCreate = () => {
  const { formData, setFormData, submitFormData } = useExperienceFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Llamada a la función submitFormData del contexto
    await submitFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>

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
      <button  type="submit" className="block w-full rounded-md my-10 px-3 py-4 text-center text-xl font-semibold shadow-sm hover:bg-black hover:text-letrip bg-letrip text-black">
        Solicitar publicación
    </button>
</form>

  )}


      export default BasicsCreate;