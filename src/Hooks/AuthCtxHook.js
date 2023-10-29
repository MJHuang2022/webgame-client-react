import { useEffect, useCallback, useState, useRef } from "react";
import _ from "lodash";
import {
  getUserAuthInfo,
  setUserAuthInfo,
  removeUserAuthInfo,
  setUserProperty,
  removeUserProperty,
  getUserProperty,
} from "../LocalStorage/UserStroage";

const TOKEN_EXPIRATION_PERIOD_TIME = 60 * 60 * 1000;

const useAuthCtxHook = () => {
  const [isSignined, setIsSignined] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [tokenExpirationDate, setTokenExpirationDate] = useState(null);
  const signOutTimer = useRef(null);

  const signinCallback = useCallback((userInfo, exirationDate = null) => {
    const { jwt } = userInfo;
    const userProperty = _.omit(userInfo, ["jwt"]);
    setIsSignined(true);
    setUser(userProperty);
    setToken(jwt);
    if (!exirationDate) {
      exirationDate = new Date(
        new Date().getTime() + TOKEN_EXPIRATION_PERIOD_TIME
      ).toISOString();
    }
    setTokenExpirationDate(exirationDate);

    // save the data to loacl storage
    const authUser = _.pick(userInfo, ["email", "jwt"]);
    setUserAuthInfo({ ...authUser, tokenExpirationDate: exirationDate });
    setUserProperty(userProperty);
  }, []);

  const signoutCallback = useCallback(() => {
    setIsSignined(false);
    setUser(null);
    setToken("");
    setTokenExpirationDate(null);
    
    removeUserAuthInfo();
    removeUserProperty();
  }, []);

  const updateUserProperty = useCallback((userProperty) => {
    setUser(userProperty);
    setUserProperty(userProperty);
  }, []);

  useEffect(() => {
    const authData = getUserAuthInfo();
    const userProperty = getUserProperty();
    if (
      authData &&
      authData.jwt &&
      new Date(authData.tokenExpirationDate) > new Date()
    ) {
      const { email, jwt, tokenExpirationDate } = authData;
      signinCallback({ email, jwt, ...userProperty }, tokenExpirationDate);
    }
  }, [signinCallback]);

  useEffect(() => {
    if (tokenExpirationDate) {
      const leftTime = new Date(tokenExpirationDate) - new Date();
      signOutTimer.current = setTimeout(signoutCallback, leftTime);
    } else {
      clearTimeout(signOutTimer.current);
    }
  }, [tokenExpirationDate, signoutCallback]);

  return {
    isSignined,
    user,
    token,
    signinCallback,
    signoutCallback,
    updateUserProperty,
  };
};

export default useAuthCtxHook;
