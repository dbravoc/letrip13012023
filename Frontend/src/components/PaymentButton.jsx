import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PaymentButton = ({ experienceCard }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedExperience = experienceCard.find(e => e.experience_uuid.toString() === id);

    if (!selectedExperience) {
        return <div>Cargando experiencia...</div>;
    }

    const handlePayment = () => {
        navigate(`/formulariopago/${selectedExperience.experience_uuid}`);
        window.open('https://mpago.la/1yqEPhC', '_blank', 'noopener,noreferrer');
    };

    return (
        <button onClick={handlePayment} className="block w-full rounded-md bg-letrip px-3 py-5 text-center text-xl font-semibold text-gray-900 shadow-sm hover:bg-yellow-400">
            Comprar experiencia
        </button>
    );
};

export default PaymentButton;
