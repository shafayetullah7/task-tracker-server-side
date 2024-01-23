import express, { Router } from "express";
import userRouter from "../modules/user/user.routes";

type Troute = {
  path: string;
  route: Router;
};

const router = express.Router();

const routes: Troute[] = [
  {
    path: "/user",
    route: userRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
