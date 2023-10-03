"use client";

import "./Form.css";

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
      <form className=" flex flex-col gap-[20px] tablet:flex-row tablet:justify-between desktop:w-[630px] desktop:flex-col  desktop:justify-normal desktop:gap-[40px]">
        <div className="tablet:w-[221px] desktop:flex desktop:w-full desktop:gap-[20px]">
          <label className="flex flex-col gap-[4px] desktop:w-full">
            <span className="label-contact-form">
              {contacts.form.name.label}
            </span>
            <input
              className="input-contact-form mb-[25px]  placeholder:opacity-20"
              placeholder={contacts.form.name.placeholder}
              type="text"
            />
          </label>
          <label className="flex flex-col gap-[4px] desktop:w-full">
            <span className="label-contact-form">
              {contacts.form.email.label}
            </span>
            <input
              className="input-contact-form mb-[24px]  placeholder:opacity-20"
              placeholder={contacts.form.email.placeholder}
              type="email"
            />
          </label>
        </div>
        <div className="tablet:w-full">
          <label className="flex flex-col gap-[4px]">
            <span className="label-contact-form">
              {contacts.form.textarea.label}
            </span>
            <textarea className="input-contact-form mb-[16px] h-[193px] tablet:h-[221px] desktop:h-[174px]"></textarea>
          </label>
          <button
            className="text-right text-[30px] font-medium tablet:ml-auto tablet:block desktop:text-[32px]"
            type="submit"
          >
            {contacts.form.btnText}
          </button>
        </div>
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
