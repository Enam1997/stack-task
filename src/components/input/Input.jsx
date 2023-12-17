import React from "react";

const Input = ({
  type,
  placeholder,
  value,
  onChangeFunction,
  onBlurFunction,
  lebelValue,
  error,
}) => {
  return (
    <div>
      <label className={"block text-sm font-medium text-gray-700"}>
        {lebelValue}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeFunction}
        onBlur={onBlurFunction}
        className={`w-full border border-solid rounded px-3 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        } flex items-center focus:shadow-2xl focus:outline-none focus:border-primary-color focus:ring-1 focus:ring-primary-100 focus:shadow-input`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
