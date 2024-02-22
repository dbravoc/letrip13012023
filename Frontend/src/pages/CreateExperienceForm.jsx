import React from 'react';
import { toast } from 'react-toastify'; // Importa toast
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos si aún no lo has hecho en tu aplicación
import ExperienceForm from './ExperienceForm'; // Asegúrate de que la ruta sea correcta
import { ToastContainer } from 'react-toastify';

const CreateExperience = () => {
  const handleSubmit = async (formData) => {
    try {
      // Aquí implementas cómo manejar la creación de la experiencia.
      // Esto puede involucrar llamar a una API y manejar la respuesta.
      // Ejemplo de solicitud POST a una API (ajusta la URL y la estructura de formData según sea necesario)
      const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Algo salió mal al crear la experiencia');

      // Si la respuesta es exitosa
      toast.success('Experiencia creada con éxito');
    } catch (error) {
      toast.error(`Error al crear la experiencia: ${error.message}`);
    }
  };

  return <ExperienceForm mode="create" onSubmit={handleSubmit} />;
};

export default CreateExperience;
