const app = require('./app');

const dotenv = require('dotenv')
//config 
const connectDatabase = require('./config/database')
dotenv.config({ path: "backend/config/config.env" })

// Handling uncaught Exception 
process.on('uncaughtException', (err) => {
    console.log(`Error ${err.message}`);
    console.log('Shutting down server due to uncaught Exception  ');

    process.exit(1);

})



// connecting DataBase 
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on  http://localhost:${process.env.PORT}`);
})



// unhandled promise rejection 
process.on("unhandledRejection", (err) => {
    console.log(`Error ${err.message}`);
    console.log('Shutting down server due to Unhandled Promise rejection ');

    server.close(() => {
        process.exit(1);
    })
})