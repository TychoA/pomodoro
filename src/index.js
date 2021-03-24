import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
