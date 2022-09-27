import express from "express";
import "dotenv/config";
import categoriesRouter from "./routes/categories.routes";
import productsRouter from "./routes/products.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

app.get("/", (req, resp) => {
  return resp.json({
    message: "Entrega S3-17-HuuRR",
  });
});

const port = process.env.PORT || 3333;

export default app.listen(port, () => {
  startDatabase();
  console.log("Server running on " + port);
});
