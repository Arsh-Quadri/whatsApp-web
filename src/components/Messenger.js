import React from "react";
import Login from "./account/Login";
import { useContext } from "react";
import { AccountContext } from "./context/AccountProvider";
import Chat from "./chat/Chat";

const Messenger = () => {

  const { account } = useContext(AccountContext)
  return (
    <div className="h-full">
      {
        account ? <Chat />
          :
          <Login />
      }


    </div>
  );
};

export default Messenger;
