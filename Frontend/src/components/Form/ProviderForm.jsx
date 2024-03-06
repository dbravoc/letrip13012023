// ProviderForm.jsx
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProviderForm = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_person: '',
    phone_number: '',
    company_address: '',
    email_address: '',
    website_url: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/providers', {
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
      }); // Resetear el formulario
    } catch (error) {
      toast.error('Error al registrar el proveedor');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form className='flex flex-col px-auto sm:mx-64 gap-y-2' onSubmit={handleSubmit}>
      <h3 className="text-center mb-5 text-2xl font-bold tracking-tight mt-10 text-gray-900 bg-letrip rounded-xl p-2">Solicita la publicación de una experiencia</h3>
<h3 className="text-left mb-2 text-md tracking-tight font-semibold text-gray-700">Ingresa los datos de tu <span className='bg-letrip font-semibold rounded-xl p-2'>empresa.</span></h3>

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

      <label className='text-gray-700 text-sm' htmlFor="company_address" >Dirección, Ciudad y País <span className='text-xs italic'> (Para temas de facturación)</span></label>
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

      <label className='text-gray-700 text-sm' htmlFor="experience_name" >Página web o red social</label>
      <input
        id="website_url"
        name="website_url"
        type="text"
        required
        value={formData.website_url}
        onChange={handleChange}
        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
              
      />

      </form>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default ProviderForm;
