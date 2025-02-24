import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  user?: string | JwtPayload; // Extending Request to include user field
}
function authenticate(req: CustomRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send({ message: "Don't have token, Unauthorized" });
  } else {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        res.status(401).send({ message: "Some error Unauthorized" });
      } else {
        req.user = decoded;
        next();
      }
    });
  }
}

export default authenticate;
