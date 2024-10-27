import { Button } from "@mantine/core";
import FloatingInput from "./FloatingInput";
import { useState } from "react";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import Validation from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FireBase";
import toast from "react-hot-toast";
import React from "react";

export type FormFields = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const initialForm: FormFields = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormFields>(initialForm);
  const [formError, setFormError] = useState<{
    [key in keyof FormFields]: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (id: keyof FormFields, value: string) => {
    const error = Validation(id, value); // Validate on change
    setFormError({ ...formError, [id]: error }); // Update error state
    setFormData({ ...formData, [id]: value }); // Update form data
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newFormError: { [key in keyof FormFields]: string } = {
      name: "",
      email: "",
      message: "",
    };

    for (const key in formData) {
      const error = Validation(
        key as keyof FormFields,
        formData[key as keyof FormFields]
      );

      if (error.length > 0) {
        newFormError[key as keyof FormFields] = error;
        valid = false;
      }
    }

    setFormError(newFormError);

    if (valid) {
      try {
        setFormData(initialForm); // Reset form to initial state
        await addDoc(collection(db, "portfolio"), formData);
        toast.success("Form submitted successfully!", { duration: 4000 });
      } catch (error) {
        if (error instanceof Error) {
          toast.error("Error submitting form to the server: " + error.message, {
            duration: 4000,
          });
        } else {
          toast.error("An unknown error occurred.", { duration: 4000 });
        }
      }
    } else {
      toast.error("Please fill in all fields correctly", { duration: 4000 });
    }
  };

  return (
    <div
      className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono"
      id="Contact"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4"
      >
        <div className="text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
          Let's Connect
          <IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" />
        </div>
        <FloatingInput
          id="name"
          name="Name" // Updated to use name instead of label
          value={formData.name}
          handleChange={handleChange}
          error={formError.name}
        />
        <FloatingInput
          id="email"
          name="Email" // Updated to use name instead of label
          type="email"
          value={formData.email}
          handleChange={handleChange}
          error={formError.email}
        />
        <FloatingInput
          id="message"
          name="Message" // Updated to use name instead of label
          type="textarea"
          value={formData.message}
          handleChange={handleChange}
          error={formError.message}
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          className="!text-bgColor !font-bold"
          rightSection={<IconArrowRight size={20} />}
          fullWidth
          variant="filled"
          size="md"
          radius="lg"
          color="#64FFDA"
        >
          Send
        </Button>
      </div>
    </div>
  );
}
