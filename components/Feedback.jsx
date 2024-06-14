import React, { useEffect, useRef, useState } from "react";
import TextInput from "./textinput/TextInput";
import TextArea from "./textinput/textArea";
import style from "../pages/feedback/feedback.module.css";
import SuccesAnimation from "./SuccesAnimation";

const Feedback = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const nameRef = useRef();
  const surRef = useRef();
  const mailRef = useRef();
  const orderRef = useRef();
  const msgRef = useRef();

  function sendFeedBack() {
    if (nameRef.current.value != "" && mailRef.current.value != "") {
      setShowSuccess(true);
      console.log(
        nameRef.current.value,
        surRef.current.value,
        mailRef.current.value,
        orderRef.current.value,
        msgRef.current.value
      );
    }
  }

  useEffect(() => {
    if (showSuccess) {
      const showTimer = setTimeout(() => {
        setShowSuccess(false);
      }, 1550);

      return () => clearTimeout(showTimer);
    }
  }, [showSuccess]);

  return (
    <div className={style.contextContainer}>
      <h1>Feedback</h1>
      <div className={style.section}>
        <TextInput placeHolder={"Name"} type={"text"} referance={nameRef} />
        <TextInput placeHolder={"Surname"} type={"text"} referance={surRef} />
      </div>
      <div className={style.section}>
        <TextInput placeHolder={"Email"} type={"email"} referance={mailRef} />
        <TextInput
          placeHolder={"Order №"}
          type={"number"}
          referance={orderRef}
        />
      </div>
      <div>
        <TextArea placeHolder={"Messages"} referance={msgRef} />
      </div>
      <button className={style.sendBtn} onClick={sendFeedBack}>
        Send
      </button>
      {showSuccess && (
        <SuccesAnimation
          text={`Dear, ${nameRef.current.value}, your message has been sent successfully`}
        />
      )}
    </div>
  );
};

export default Feedback;
