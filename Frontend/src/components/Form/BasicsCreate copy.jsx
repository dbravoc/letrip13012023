import React from 'react';
import { useExperienceFormContext } from '../../context/ExperienceFormContext';
import { faCircleCheck, faHeart, faList, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProviderForm from './ProviderForm';



const BasicsCreate = () => {
  const { formData, setFormData, submitFormData } = useExperienceFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await submitFormData(formData);
        toast.success('Publicación solicitada con éxito!'); // Mostrar notificación de éxito
        setFormData({}); // Resetear el formulario
      } catch (error) {
        toast.error('Error al solicitar la publicación'); // Mostrar notificación de error
        console.error('Error:', error);
      }
    };
    
  return (
    <>
<form className='mt-36 flex flex-col gap-y-2 ' onSubmit={handleSubmit}>
<h3 className="text-center text-2xl font-bold tracking-tight mt-20 text-gray-900 rounded-xl p-2">Solicita la publicación de una experiencia</h3>

<div className='grid grid-cols-2 gap-x-20'>
  <div className='col-span-1'>
  <ProviderForm></ProviderForm>
  </div>

  <div className='col-span-1'>

<h3 className="text-left mb-5 mt-8 font-semibold text-md tracking-tight text-gray-700">Ingresa los datos de la <span className='bg-letrip font-semibold rounded-xl p-2'>experiencia</span> que quieres publicar.</h3>

      <label className='text-gray-700 text-sm' htmlFor="experience_name" >Título de la experiencia. <span className='text-xs italic'> (Escribe algo simple, breve y persuasivo para los visitantes de Le trip)</span></label>
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
    {/* <label className='text-gray-700 text-sm' htmlFor="experience_duration">Duración (en días):</label>
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
  */}
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
        
        </div>
        </div>

      <button  type="submit" className="block w-full rounded-md my-10 px-3 py-4 text-center text-xl font-semibold shadow-sm hover:bg-black hover:text-letrip bg-letrip text-black">
        Solicitar publicación
    </button>

    <ToastContainer position="bottom-right" />
</form>
</>
  )}


      export default BasicsCreate;