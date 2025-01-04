import express, { Application } from 'express';
import mg from 'morgan'
import routes from './routes';



const app: Applicatuion = express();
app.set('port', process.env.PORT || 3060);



app.use(express.json());
app.use(mg('dev'));

// aqui se establecen las rutas
app.use('/api', routes)

app.listen(app.get('port'), () => console.log(`SERVER IS RUNNING IN PORT ${app.get('port')}`));


