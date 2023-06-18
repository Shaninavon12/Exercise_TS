import { query } from "./executeQuery";
import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
	res.json(query());
});

app.listen(port, () => console.log(` port: ${port}`));
