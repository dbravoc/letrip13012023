const express = require('express');
const app = express();
const cors = require('cors');
const supabase = require('./db');

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear el cuerpo de las solicitudes en formato JSON

// Endpoint para obtener experiencias con fechas disponibles
app.get('/experiences', async (req, res) => {
    try {
        // Obtener experiencias
        const { data: experiencesData, error: experiencesError } = await supabase
            .from('experiences')
            .select('*');

        if (experiencesError) throw experiencesError;

        // Obtener fechas disponibles
        const { data: availableDatesData, error: availableDatesError } = await supabase
            .from('available_experiences')
            .select('*');

        if (availableDatesError) throw availableDatesError;

        // Combinar fechas con experiencias
        const combinedData = experiencesData.map(exp => {
            return {
                ...exp,
                available_dates: availableDatesData
                    .filter(date => date.experience_uuid === exp.experience_uuid)
                    .map(date => date.available_date)
            };
        });

        res.json(combinedData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Endpoint para crear una nueva experiencia
app.post('/experiences', async (req, res) => {
    try {
        const { experience_name } = req.body;

        // Insertar la nueva experiencia en Supabase
        const { data, error } = await supabase
            .from('experiences')
            .insert([
                { experience_name: experience_name },
            ])
            .select();

        if (error) throw error;

        res.status(201).json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
