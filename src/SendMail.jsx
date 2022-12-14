import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const SendMail = () => {

  const dispatch = useDispatch();

  const currentUser = useSelector(s => s.user.user)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const newEmailRef = doc(collection(db, "emails"));
      await setDoc(newEmailRef,{
      to: formData.to,
      from: currentUser.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

 

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="text"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required!</p>}

        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required!</p>
        )}
        <input
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required!</p>
        )}

        <div className="sendMail__options">
          <Button className="sendMail__send" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
