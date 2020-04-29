import * as React from "react";

type InputProps = {
  label: string;
  isTextArea?: boolean;
};

export const Input: React.FC<InputProps> = ({ label, isTextArea }) => {
  return (
    <div className="flex flex-col my-4 bg-white z-20">
      <label htmlFor="">{label}</label>
      {isTextArea ? (
        <textarea
          name=""
          className="border rounded-lg p-2 h-24"
          id=""
        ></textarea>
      ) : (
        <input type="text" className="border rounded-lg p-2 h-8" />
      )}
    </div>
  );
};
