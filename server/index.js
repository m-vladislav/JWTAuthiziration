import dotenv from 'dotenv';
import express from 'express';
// import cors from "cors";
// import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

const start = async () =>  {
    try {
        app.listen(PORT, () => console.log(`server started in PORT - ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start();
 