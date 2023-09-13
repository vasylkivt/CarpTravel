"use client";

import { useForm } from "react-hook-form";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h2>
        <span>CONTACT</span>
        <span>US</span>
      </h2>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("firstName")} />
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <input type="submit" />
      </form>
    </>
  );
};

export default Contacts;

//Забезпечте валідацію форми з використанням react-hook-form та Tailwind CSS для стилізації помилок валідації
