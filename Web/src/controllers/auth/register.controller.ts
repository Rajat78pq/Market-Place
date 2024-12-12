import RegisterService from "../../services/auth/register.service";

export default class RegisterController {
  static async register(req: any, res: any) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required" });
    } else {
      const result = await RegisterService.postRegister(email, password);
      return res.status(200).send(result);
    }
  }
}
