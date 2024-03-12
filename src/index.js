import express from 'express';
import taskRoutes from './routes/tasks.routes.js'
import indexRoutes from './routes/index.routes.js'

import morgan from 'morgan';

const app = express();

app.use(express.json())

app.use(indexRoutes)
app.use(taskRoutes)

app.listen(4000);

// routes 
app.get('/task/index', (req,res) => {
    res.render('views/index')
})

// middlewares 
app.use(morgan('dev'));
