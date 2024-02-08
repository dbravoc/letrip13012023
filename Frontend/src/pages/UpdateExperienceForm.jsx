const UpdateExperienceForm = ({ selectedExperienceData }) => {
  const handleSubmit = (formData) => {
    // Lógica para actualizar la experiencia
  };

  return (
    <ExperienceForm mode="update" initialData={selectedExperienceData} onSubmit={handleSubmit} />
  );
};

export default UpdateExperienceForm;

