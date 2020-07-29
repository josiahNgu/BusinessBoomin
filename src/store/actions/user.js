import axios from "../../axios";
import * as actionTypes from "./actionTypes";

const setUserData = (user) => {
  return {
    type: actionTypes.SET_USER,
    user: user,
  };
};
const getUserDataFailed = (err) => {
  return {
    type: actionTypes.SET_USER_FAILED,
    err: err,
  };
};
const setAuthenticationStatus = () => {
  return {
    type: actionTypes.IS_AUTHENTICATED,
    isAuthenticated: true,
  };
};
export const getAuthenticatedUserData = () => {
  let idToken = localStorage.getItem("idToken");

  const FirebaseIdToken = "Bearer:" + idToken;
  axios.defaults.headers.common["authorization"] = FirebaseIdToken;
  // axios.get("/user").then(res => {
  //   console.log(res.data.userData.credentials);
  // });
  return (dispatch) => {
    axios
      .get("/user")
      .then((res) => {
        dispatch(setUserData(res));
        dispatch(setAuthenticationStatus());
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status.toString() === "403") {
          localStorage.removeItem("tokenId");
          window.location.reload();
        }
        dispatch(getUserDataFailed(err.response.data));
      });
  };
};
