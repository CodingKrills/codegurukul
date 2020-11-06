import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase";

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAVQPcBDPbiTwMOp6nZ5tVAqQVZ88uE0q0',
      authDomain: 'parama-fashion.firebaseapp.com',
      databaseURL: 'https://parama-fashion.firebaseio.com',
      projectId: 'parama-fashion',
      storageBucket: 'parama-fashion.appspot.com',
      messagingSenderId: '690905698735'
    }
    const fbase = firebase.initializeApp(config);
    var phoneNumber;
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
      console.log(data);
      phoneNumber = data.phone;
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
  
    const onOTPSubmit = (data) => {
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
  }
  
  render() {
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="phone" ref={register({ required: true })} placeholder="Phone" />
        {errors.phone && 'phone is required.'}
        <input type="submit" />
        </form>
        <form onSubmit={handleSubmit(onOTPSubmit)}>
        <input name="otp" ref={register} placeholder="Otp" />
        <input type="submit" value="done"/>
        </form>
      </div>
    )
  }
}

export default App;