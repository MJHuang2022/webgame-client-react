const AUTH_DATA_NAME = "authData";
const USER_PROPERTY_DATA_NAME = "userProperty";

export const getUserAuthInfo = () => {
  return JSON.parse(localStorage.getItem(AUTH_DATA_NAME));
};
export const setUserAuthInfo = (authInfo) => {
  localStorage.setItem(AUTH_DATA_NAME, JSON.stringify(authInfo));
};
export const removeUserAuthInfo = () => {
  localStorage.removeItem(AUTH_DATA_NAME);
};

export const getUserProperty = () => {
  return JSON.parse(localStorage.getItem(USER_PROPERTY_DATA_NAME));
};
export const setUserProperty = (userProperty) => {
  localStorage.setItem(USER_PROPERTY_DATA_NAME, JSON.stringify(userProperty));
};
export const removeUserProperty = () => {
  localStorage.removeItem(USER_PROPERTY_DATA_NAME);
};
