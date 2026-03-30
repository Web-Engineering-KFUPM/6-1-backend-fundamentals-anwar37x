import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from the back-end server");
});

app.get("/about", (req, res) => {
    res.send("This is the about route");
});

app.get("/student", (req, res) => {
    res.json({
        name: "Anwar Almutairi",
        major: "Software Engineering",
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});