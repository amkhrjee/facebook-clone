import React from "react";
import { Button } from "@material-ui/core";
import "./login.css";
import { auth, provider } from "../Firebase/firebase";
import { useStateValue } from "../Context API/StateProvider";
import { actionTypes } from "../Context API/reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //Sign In
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
        console.log(res);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="facebook_logo"
        />
        <img
          style={{ height: "40px", marginTop: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1960px-Facebook_Logo_%282019%29.svg.png"
          alt="facebook_text_logo"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
