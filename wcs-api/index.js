const express = require('express');
const {userRouter, tastesRouter} = require('./src/routes');
const colorsRouter = require('./src/routes/ColorsRoutes');
const cepagesRouter = require('./src/routes/CepagesRoutes');
const rolesRouter = require('./src/routes/RolesRoutes');
const terroirsRouter = require('./src/routes/TerroirsRoutes');



const app = express();

app.use(express.json());

const APIRouter = express.Router();

APIRouter.get('/version', function(req, res) {
    const { version } = require('./package.json'); 

    return res.json({ version })
})

APIRouter.use('/user', userRouter);
APIRouter.use('/tastes', tastesRouter);
APIRouter.use('/colors', colorsRouter);
APIRouter.use('/cepages', cepagesRouter);
APIRouter.use('/roles', rolesRouter);
APIRouter.use('/terroirs', terroirsRouter);



app.use('/api', APIRouter);

app.listen(8080, function() {
    console.log('API is running on 8080')
})