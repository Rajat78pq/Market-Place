import loginService from "../../services/auth/login.service";

export default class LoginController {
  static async login(req: any, res: any) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required" });
    } else {
      const result = await loginService.postLogin(email, password);
      return res.status(200).send(result);
    }
  }
}
