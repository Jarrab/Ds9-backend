
import { TOKEN_SECRET } from "../../config.js";
import jwt from "jsonwebtoken";

export function createToken(payLoad) {
  return new promise((resolve, reject) => {
    jwt.sign(
      { id: userSved._id },
      TOKEN_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
