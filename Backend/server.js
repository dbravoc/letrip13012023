const express = require('express');
const app = express();
const cors = require('cors');
const supabase = require('./db');

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear el cuerpo de las solicitudes en formato JSON

// Endpoint para obtener experiencias
app.get('/experiences', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('experiences')
            .select('*');

        if (error) throw error;

        res.json(data);
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
