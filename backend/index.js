import express from "express";

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/register", (req, res) => {
    console.log(req.body);
});

app.listen(3000, () =>
  console.log(`server is running on http://localhost:3000/regisrter`),
);

