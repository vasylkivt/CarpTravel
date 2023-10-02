"use client";

import contacts from "@/data/section/contacts";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form className=" flex flex-col">
        <label className="flex flex-col gap-[4px]">
          <span className="text-[12px] font-extralight leading-[2] tracking-[2.4px]">
            {contacts.form.name.label}
          </span>
          <input
            className="mb-[25px] bg-white/5 pl-[8px] text-[13px] font-extralight leading-[1.85] outline-none  placeholder:opacity-20"
            placeholder={contacts.form.name.placeholder}
            type="text"
          />
        </label>
        <label className="flex flex-col gap-[4px]">
          <span className="text-[12px] font-extralight leading-[2] tracking-[2.4px]">
            {contacts.form.email.label}
          </span>
          <input
            className="text-[13px]leading-[1.85] mb-[24px] bg-white/5 pl-[8px] font-extralight outline-none  placeholder:opacity-20"
            placeholder={contacts.form.email.placeholder}
            type="email"
          />
        </label>
        <label className="flex flex-col gap-[4px]">
          <span className="text-[12px] font-extralight leading-[2] tracking-[2.4px]">
            {contacts.form.textarea.label}
          </span>
          <textarea className="mb-[16px] h-[193px] bg-white/5 pl-[8px] text-[13px] font-extralight  leading-[1.85] outline-none"></textarea>
        </label>
        <button
          className=" text-right text-[30px] font-medium desktop:text-[32px]"
          type="submit"
        >
          {contacts.form.btnText}
        </button>
      </form>
      {/* <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register("firstName")} />
          <input {...register("lastName", { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          <input {...register("age", { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
          <input type="submit" />
        </form> */}
    </>
  );
};
export default Form;

//Забезпечте валідацію форми з використанням react-hook-form та Tailwind CSS для стилізації помилок валідації
// має змінюватися фон коли щось введено у інпутах
