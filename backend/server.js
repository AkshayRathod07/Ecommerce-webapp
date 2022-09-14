const app = require('./app');

const dotenv = require('dotenv')

//config 
const connectDatabase = require('./config/database')
dotenv.config({ path: "backend/config/config.env" })

// connecting DataBase 
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`server is working on  http://localhost:${process.env.PORT}`);
})