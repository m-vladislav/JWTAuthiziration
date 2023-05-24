import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const start = async () =>  {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`server started in PORT - ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start();