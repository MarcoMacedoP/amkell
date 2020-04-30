import * as React from "react";

type InputProps = {
  label: string;
  isTextArea?: boolean;
  name: string;
  value: any;
  onChange: (event: any) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  isTextArea,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col my-4 bg-white z-20">
      <label htmlFor="">{label}</label>
      {isTextArea ? (
        <textarea
          className="border rounded-lg p-2 h-24"
          name={name}
          id="name"
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type="text"
          className="border rounded-lg p-2 h-8"
          name={name}
          id="name"
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};
