import { Router } from "express";

const usuarioRouter = Router();

usuarioRouter.get('/', (req, res) => {
    res.send("Welcome")
});

export default usuarioRouter;