// Tipos de Parametros:
// Query params: req.query (Filtros, ordenação, paginação, ... (GET))
// Route params: req.params (identificar o recurso na alteração ou remoção (PUT/DELETE))
// Body: req.body (Criação ou alteração de registro (POST/PUT))

const http = require('http');
const cors = require('cors');
const Express = require('express');
const mongoose = require('mongoose');

const { setupWebSocket } = require('./websocket');
const routes = require('./routes');

const app = Express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistackweek@cluster0-s2sc9.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(Express.json());
app.use(routes);

server.listen(3333);