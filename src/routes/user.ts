import { Request, Response, Router } from "express";
import { users } from "../data/mock-users";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

export default router;
