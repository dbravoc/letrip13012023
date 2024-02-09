const SelectAvailableDates = ({ experience }) => {
    if (!experience || !experience.available_dates) {
      return <p>No hay fechas disponibles.</p>;
    }
  
    const dates = JSON.parse(experience.available_dates);
    return (
      <div>
        <h3>Fechas disponibles para la experiencia</h3>
        <ul>
          {dates.map((date, index) => (
            <li key={index}>{`Desde: ${date.startDate}, Hasta: ${date.endDate}`}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default SelectAvailableDates
  