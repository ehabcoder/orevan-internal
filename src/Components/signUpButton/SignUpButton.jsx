import React from "react";
import Diamond from "../../images/googleIcon.svg";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export function SignUpButton() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <>
      <button
        onClick={login}
        className="googleButton btn btn-dark text-white  w-100 "
      >
        <img className="px-1 mb-1" src={Diamond} alt="" /> or sign in with
        Google
      </button>
    </>
  );
}
