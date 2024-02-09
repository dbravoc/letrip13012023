const SelectAvailableDates = ({ experience }) => {
    if (!experience || !experience.available_dates) {
      return <p>No hay fechas disponibles.</p>;
    }
  
    const dates = JSON.parse(experience.available_dates);
    return (
      <div>
      <h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Selecciona una fecha disponible</h3>
        <ul>
          {dates.map((date, index) => (
            <li key={index}>{`${date.startDate} al ${date.endDate}`}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default SelectAvailableDates
  