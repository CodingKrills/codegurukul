import React from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase";
import config from "./config.js";
 
export default function App() {
  //let firebaseNew = firebase.initializeApp(config.firebase)
  var phoneNumber;
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
    });
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="phone" ref={register({ required: true })} placeholder="Phone" />
      {errors.phone && 'phone is required.'}
      <br></br>
      <input name="otp" ref={register} placeholder="Otp" />
      <input type="submit" />
    </form>
  );
}