import React from 'react';
import { useForm } from 'react-hook-form';
 
export default function App() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
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