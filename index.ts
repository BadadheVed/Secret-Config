import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    db: process.env.DATABASE_URL,
    PORT: process.env.PORT,
  });
});
console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);

app.listen(process.env.PORT, () => {
  console.log("Server started on port ", process.env.PORT);
});
