import express, { Application } from "express"
import { PostRouter } from "./modules/post/post.router";

const app : Application = express();

app.use(express.json());

app.use("/posts", PostRouter);

app.get("/", (req, res) => {
    res.send("Hello Salah!")
})

export default app;