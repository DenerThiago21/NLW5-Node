import express from 'express';
import './database';


const app = express();

/**
 * GET    -> busca
 * POST   -> criação
 * PUT    -> alteração
 * DELETE -> deletar
 * PATCH  -> alterar uma informação específica
 */
app.get('/', (request, response) => {
    return response.json({
        message: 'hi guys'
    });
});

app.post('/', (request, response) => {
    return response.json({
        message: 'Salvo com sucesso'
    });
});

app.listen(8000, () => console.log('Server running port 8000'));