import React from "react";
import { FormFields } from "./Contact"; // Adjust the path if necessary

interface FloatingInputProps {
  id: keyof FormFields; // Ensure this matches the FormFields keys
  name: string; // Label for the input
  value: string;
  handleChange: (id: keyof FormFields, value: string) => void; // Type matches function signature
  type?: "text" | "email" | "textarea"; // Optional, defaults to "text"
  error?: string; // Optional error message
}

const FloatingInput = ({
  id,
  name,
  value,
  handleChange,
  type = "text",
  error,
}: FloatingInputProps) => {
  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea
          id={id.toString()}
          value={value}
          onChange={(e) => handleChange(id, e.target.value)}
          rows={4}
          className={`block w-full px-2.5 pb-2.5 pt-4 text-xl sm-mx:text-lg xs-mx:text-base rounded-xl text-white bg-transparent border border-textColor ${
            error ? "border-red-500" : ""
          } appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
          placeholder=" "
        />
      ) : (
        <input
          type={type}
          id={id.toString()}
          value={value}
          onChange={(e) => handleChange(id, e.target.value)}
          className={`block w-full px-2.5 pb-2.5 pt-4 text-xl sm-mx:text-lg xs-mx:text-base rounded-xl text-white bg-transparent border border-textColor ${
            error ? "border-red-500" : ""
          } appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
          placeholder=" "
        />
      )}

      <label
        htmlFor={id.toString()}
        className={`absolute text-xl sm-mx:text-lg xs-mx:text-base text-textColor duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${
          type !== "textarea"
            ? "peer-placeholder-shown:top-1/2"
            : "peer-placeholder-shown:top-6"
        } peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4`}
      >
        {name}
      </label>

      {error && (
        <div className="text-red-500 sm-mx:text-sm xs-mx:text-xs ml-1 mt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default FloatingInput;
