import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createToken } from "../libs/jwt.js";

export class userController {
  static async login(req, res) {
    
  }

  static async register(req, res) {
    const { name, email, password, address, phone } = req.body;

    try {
      const passwHash = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: passwHash,
        address,
        phone,
      });

      const userSved = await newUser.save();
      await createToken({id:userSved._id});
      res.cookie("token", token);
      res.json({
        message: "user created",
      });
      /* res.json({
        id: userSved._id,
        name: userSved.name,
        email: userSved.email,
      });*/
    } catch (e) {
      console.log(e);
    }
  }

  static async logout(req, res){

  }

  static async profile(req, res){

  }

  static async profileUpdate(req, res){

  }
}
