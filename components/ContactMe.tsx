import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
  number: string
}

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    window.location.href = `mailto:sheheryar.qazi92@gmail.com?subject=${data.name} &body=Hello my name is ${data.name} 
    message :  ${data.message}   
   contact number:   ${data.number} 
   email : (${data.email})`;
  };

  return (
    <div
      className="h-screen    text-center
      flex   flex-col justify-center 
      items-center     md:space-y-5
      "
    >
      <h3 className="text-gray-500 tracking-[20px] uppercase text-xl">
        Contact
      </h3>

      {/* CONTACT ME DETAILS */}
      <div
        className="flex flex-col space-y-2 text-gray-500 
     px-5  
"
      >
        <h4 className="font-semibold text-xl text-center">
          I have got just what you need.
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>

        <div className="flex items-center space-x-2 justify-center  ">
          <PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-bounce" />
          <p className="text-xl">+92 317 2271834</p>
        </div>
        <div className="flex items-center space-x-2 justify-center  ">
          <MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
          <p className="text-xl">Karachi, Pakistan</p>
        </div>
        <div className="flex items-center space-x-2 justify-center cursor-pointer px-5">
          <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse " />
          <p className="text-xl ">sheheryar.qazi92@gmail.com</p>
        </div>
      </div>
      {/* CONTACT ME DETAILS */}

      {/* FORM */}
      <form
        className="flex flex-col w-[80%] md:w-[40%] mx-auto space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
          className="content_input"
          type="text"
        />
        <input
          placeholder="Email"
          {...register("email")}
          className="content_input"
          type="email"
        />

        <input
          placeholder="Number"
          {...register("number")}
          type="number"
          className="content_input"
        />
        <textarea
          placeholder="Message"
          {...register("message")}
          className="content_input"
        />
        <button
          type="submit"
          className="bg-[#F7AB04] py-5 px-10 rounded-md text-gray-500  font-bold text-lg"
        >
          Submit
        </button>
      </form>
      {/* FORM */}
    </div>
  );
}

export default ContactMe;
