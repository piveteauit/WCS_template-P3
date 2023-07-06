const express = require('express');
const userRouter = require('./src/routes/UserRoutes');
const tastesRouter = require ('./src/routes/TastesRoutes')
const colorsRouter = require('./src/routes/ColorsRoutes');
const cepagesRouter = require('./src/routes/CepagesRoutes');
const rolesRouter = require('./src/routes/RolesRoutes');
const terroirsRouter = require('./src/routes/TerroirsRoutes');
const operatorsRouter = require("./src/routes/OperatorsRoutes");
const bottlePerCepageRouter = require("./src/routes/BottlePerCepageRoutes");
const tastingSheetRouter = require("./src/routes/TastingSheetRoutes");
const bottleRouter = require("./src/routes/BottleRoutes");
const tastingResultRouter = require("./src/routes/TastingResultRoutes");
const workshopRouter =require("./src/routes/WorkshopRoutes");
const selectForUserRouter = require("./src/routes/SelectForUserRoutes");


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











