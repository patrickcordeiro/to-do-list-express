const express = require('express');

const app = express();

app.use(express.json()); //chamando middlewares

const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log);

app.get('/', (req, res) => { // criando rota principal 
    res.send('<h1>Minha lista de tarefas</h1>');
})

app.get('/json', (req, res) => { // devolvendo uma resposta em json
    console.log(req.body);
    res.json({title: 'Tarefa x', done: true});
})

app.listen(3000, () => { //criando servidor
    console.log('Servidor foi iniciado');
});

