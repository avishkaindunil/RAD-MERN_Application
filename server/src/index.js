import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

// MongoDB Connection
const mongoURI = "mongodb+srv://avishka:Avishka99@recipe.vcuqtln.mongodb.net/recipe?retryWrites=true&w=majority";

mongoose.connect(
    mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => {
    console.log("MongoDB Connected");
    // Start the server after successful database connection
    app.listen(3001, () => {
        console.log("Server Started on Port 3001");
    });
})
.catch((err) => {
    console.error("MongoDB Connection Error:", err);
});
