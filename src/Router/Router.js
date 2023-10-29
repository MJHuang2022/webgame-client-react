import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Page/Home";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import ModifyPwd from '../Auth/ModPwd';
import ForgotPwd from '../Auth/ForgotPwd';
import ResetPwd from '../Auth/ResetPwd';
import RootLayout from "../RootLayout";
import User from "../User/User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="modifypwd" element={<ModifyPwd />} />
      <Route path="forgotpwd" element={<ForgotPwd />} />
      <Route path="resetpwd" element={<ResetPwd />} />
      <Route path="user" element={<User />} />
    </Route>
  )
);

export default router;
