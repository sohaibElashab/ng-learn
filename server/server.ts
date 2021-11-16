import * as express from 'express';
const db = require('./db/Tasks');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.post('/tasks', async (req, res) => {
  const results = await db.addTask(req.body);
  res.status(200).json({ id: results[0] });
});

app.get('/tasks', async (req, res) => {
  const tasks = await db.getTasks();
  res.status(200).send(tasks);
});

app.delete('/tasks/:id', async (req, res) => {
  await db.deleteTask(req.params.id);
  res.status(200).json({ succes: true });
});

app.put('/tasks/:id', async (req, res) => {
  const id = await db.updateTask(req.params.id, req.body);
  res.status(200).json({ id });
});

app.listen(5000 , () => {
    console.log("server is listening on 5000")
});