import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InboundForm = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_person: '',
    phone_number: '',
    company_address: '',
    email_address: '',
    website_url: '',
    inbound_experience_name:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://letrip13012023-backend.vercel.app/providers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      const data = await response.json();
      toast.success('Proveedor registrado con éxito!');
      console.log('Respuesta del servidor:', data);
      setFormData({
        company_name: '',
        contact_person: '',
        phone_number: '',
        company_address: '',
        email_address: '',
        website_url: '',
        inbound_experience_name:''
      }); // Resetear el formulario
    } catch (error) {
      toast.error('Error al registrar el proveedor');
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className='flex justify-center'>
    <form className='flex flex-col px-auto gap-y-2 sm:w-2/5' onSubmit={handleSubmit}>

    <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 rounded-xl p-2 z-10">Solicita publicar tus experiencias con <span className='bg-letrip font-semibold rounded-xl p-2'>Le trip</span></h2>

     <h2 className="text-left mt-8 mb-2 text-md tracking-tight font-semibold text-gray-700">Ingresa los datos de tu <span className='bg-letrip font-semibold rounded-xl p-2'>empresa.</span></h2>

      <label className='text-gray-700 text-sm' htmlFor="company_name" >Nombre de la empresa</label>
      <input
        id="company_name"
        name="company_name"
        type="text"
        required
        value={formData.company_name}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
              
      />

      <label className='text-gray-700 text-sm' htmlFor="contact_person" >Persona de contacto </label>
      <input
        id="contact_person"
        name="contact_person"
        type="text"
        required
        value={formData.contact_person}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
              
      />

      <label className='text-gray-700 text-sm' htmlFor="phone_number" >Número de teléfono </label>
      <input
        id="phone_number"
        name="phone_number"
        type="text"
        required
        value={formData.phone_number}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
              
      />

      <label className='text-gray-700 text-sm' htmlFor="company_address" >Dirección, Ciudad y País</label>
      <input
        id="company_address"
        name="company_address"
        type="text"
        required
        value={formData.company_address}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
              
      />

      <label className='text-gray-700 text-sm' htmlFor="email_address" >Correo electrónico </label>
      <input
        id="email_address"
        name="email_address"
        type="text"
        required
        value={formData.email_address}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
              
      />

      <label className='text-gray-700 text-sm' htmlFor="website_url" >Página web o red social</label>
      <input
        id="website_url"
        name="website_url"
        type="text"
        required
        value={formData.website_url}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
              
      />
      <label className='text-gray-700 text-sm' htmlFor="inbound_experience_name" >Nombre de la experiencia</label>
      <input
        id="inbound_experience_name"
        name="inbound_experience_name"
        type="text"
        required
        value={formData.inbound_experience_name}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
              
      />

      <button  type="submit" className="block w-full rounded-md my-10 px-3 py-4 text-center text-xl font-semibold shadow-sm z-10 hover:bg-black hover:text-letrip bg-letrip text-black">
        Enviar solicitud
      </button>
      </form>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
};


  export default InboundForm;
