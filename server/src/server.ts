import express, { Application } from 'express';
import cors from 'cors'
import router from './routes';
import prisma from './databases';

const app: Application = express();
const port = 3000;

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
app.use(cors());

app.use(express.json())
app.use(router);

prisma.$connect()
    .then(() => console.log('Database is connected'))
    .catch((erro) => console.log(erro))