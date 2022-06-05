import express from "express";

import {
    register,
} from "../core/use-cases/users";

const usersRoutes = express.Router();

usersRoutes.post("/", register);

export { usersRoutes };