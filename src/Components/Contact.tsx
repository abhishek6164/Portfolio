import { Button } from "@mantine/core";
import FloatingInput from "./FloatingInput";
import { useState } from "react";
import Validation from "./Validation"; // Import the validation function
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FireBase";
import toast from "react-hot-toast";

// Define and export the FormFields type
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
    setFormData({ ...formData, [id]: value });
    setFormError({ ...formError, [id]: "" }); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh

    let valid = true;

    // Initialize newFormError with default values
    const newFormError: { [key in keyof FormFields]: string } = {
      name: "",
      email: "",
      message: "",
    };

    // Validate each field
    for (const key in formData) {
      const error = Validation(
        key as keyof FormFields,
        formData[key as keyof FormFields]
      ); // Cast key to keyof FormFields

      // Assign error message to the appropriate key if validation fails
      if (error.length > 0) {
        newFormError[key as keyof FormFields] = error; // Assign error message to the appropriate key
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
    <div className="px-16 mt-20 mx-20 font-mono mt-24 my-10 ">
      <h1 className="text-4xl mb-5 font-bold flex justify-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>

      <form
        className="w-[70%] mt-12 m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl transition-transform transition-shadow duration-300 hover:scale-[1.02] hover:shadow-[0_0_10px_#64FFDA80]"
        onSubmit={handleSubmit} // Call handleSubmit on form submit
      >
        <div className="text-3xl text-white font-semibold">Let's Connect</div>
        <FloatingInput
          id="name" // Correctly matches keyof FormFields
          label="Name"
          value={formData.name}
          handleChange={handleChange}
          error={formError.name}
        />
        <FloatingInput
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          handleChange={handleChange}
          error={formError.email}
        />
        <FloatingInput
          id="message"
          label="Message"
          type="textarea"
          value={formData.message}
          handleChange={handleChange}
          error={formError.message}
        />
        <Button
          type="submit"
          className="mt-5 rounded-xl bg-primaryColor text-black text-xl hover:bg-customGreen hover:text-black"
          fullWidth
        >
          Send &#8594;
        </Button>
      </form>
    </div>
  );
}
