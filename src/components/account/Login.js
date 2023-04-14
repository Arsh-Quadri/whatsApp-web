import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useContext } from 'react';
import { AccountContext } from "../context/AccountProvider";
import { adduser } from "../../service/Api";

const Login = () => {
  const { setAccount } = useContext(AccountContext);
  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential)
    setAccount(decoded)
    await adduser(decoded)
  }
  const onLoginError = (res) => {
    console.log(res)

  }

  return (
    <div className="h-[100vh] w-full bg-gray-200 flex top-0">

      {/* restricted for smaller devices */}
      <div className="h-full w-full bg-green-500 z-30 restricted">
        {/* <div className="card1 w-[55%] h-[50%] mt-[15vh] m-auto z-50 rounded-2xl"></div> */}
        <img src="https://seeklogo.com/images/W/whatsapp-logo-6DD2604E64-seeklogo.com.png"
          className=' card-image m-auto mt-[30vh]   w-[100px] -z-10' alt="" />
        <div>
          <p className="pt-5 px-10 text-white text-sm"> <span className="text-2xl">This version is not for smaller devices</span> <br /> <div className="pt-5">open desktop to get better view</div></p>
        </div>
      </div>


      <div className="box ForRest mt-[12%] bg-green-100 w-[20rem] px-12 hidden md:block h-[13rem] ml-auto mr-auto rounded-md shadow-lg shadow-gray-500">
        <img className=" ml-auto mr-auto w-[70px] py-5"
          src="https://seeklogo.com/images/W/whatsapp-logo-6DD2604E64-seeklogo.com.png"
          alt="Whatsapp"
        />
        <p className="text-lg font-semibold text-green-800 pb-3">Let us know who you are</p>
        {/* <button
          className="bg-green-700 px-6 py-2 my-2 text-white font-semibold text-lg rounded-lg hover:bg-green-800">Sign in
        </button> */}
        <div className="w-full ml-3">
          <GoogleLogin
            // buttonText="Login with Go"
            onSuccess={onLoginSuccess}
            onError={onLoginError}
            width='208px'
          /></div>
      </div>
    </div>
  );
};

export default Login;
