import { FormFields } from "./Contact"; // Adjust the path if necessary
import React from "react";

interface FloatingInputProps {
  id: keyof FormFields; // Ensure this matches the FormFields keys
  label: string;
  value: string;
  handleChange: (id: keyof FormFields, value: string) => void; // Ensure type matches
  type?: "text" | "email" | "textarea"; // Optional, defaults to "text"
  error?: string; // Optional error message
}

export default function FloatingInput({
  id,
  label,
  value,
  handleChange,
  type = "text",
  error,
}: FloatingInputProps) {
  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea
          id={id.toString()} // Convert to string
          className="block w-full px-2.5 pb-2.5 pt-4 text-xl text-textColor bg-transparent border border-white rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer transition duration-300 ease-in-out"
          placeholder=" "
          value={value}
          onChange={(e) => handleChange(id, e.target.value)} // Pass the correct type
        />
      ) : (
        <input
          type={type}
          id={id.toString()} // Convert to string
          className="block w-full px-2.5 pb-2.5 pt-4 text-xl text-textColor bg-transparent border border-white rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer transition duration-300 ease-in-out"
          placeholder=" "
          value={value}
          onChange={(e) => handleChange(id, e.target.value)} // Pass the correct type
        />
      )}

      <label
        htmlFor={id.toString()} // Convert to string
        className="absolute text-xl text-textColor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-bgColor px-2 transition-all ease-in-out peer-focus:px-2 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>

      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}
