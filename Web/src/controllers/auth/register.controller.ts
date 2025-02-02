import oauth2client from "../../utils/googleAuth";
import RegisterService from "../../services/auth/register.service";
import axios from "axios";

export default class RegisterController {
  static async register(req: any, res: any) {
    const data = req.body;
    const code = req.query.code;
    console.log(code);
    if (code) {
      const googleRes = await oauth2client.getToken(code);
      oauth2client.setCredentials(googleRes.tokens);
      const userRes = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
      );
      const { email, name, picture } = await userRes.data;
      console.log(email, name, picture);
      const result = await RegisterService.postRegister(email);
      return res.status(200).send(result);
    } else {
      const result = await RegisterService.postRegister(
        data.email,
        data.password
      );
      return res.status(200).send(result);
    }
  }
}
