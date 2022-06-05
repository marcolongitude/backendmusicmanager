import { Router } from "express";

// import { sessionRoutes } from "./session.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
// router.use("/session", sessionRoutes);

export { router };