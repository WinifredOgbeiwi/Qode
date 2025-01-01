
// import { FaEye, FaEyeSlash } from "react-icons/fa";

import { InputProps } from "@/app/utils/type";

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  id,
  onchange,
  value,
  // passwordVisibility,
  // setPasswordVisibility,
  disabled,
}) => {
  return (
    <div className="flex flex-col relative ">
      <label htmlFor={id} className="mt-5">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={`w-full bg-white px-3 border-2 border-black h-14 mt-1 rounded-[2px] outline-none ${ disabled ? "text-gray-500" : "text-black"}`}
        onChange={onchange}
        value={value}
        required
        disabled={disabled}
      />

      {/* {id === "password" && (
        <div
          className="absolute right-2 top-[50px] hover:cursor-pointer"
          onClick={() => setPasswordVisibility(!passwordVisibility)}
        >
          {!passwordVisibility ? <FaEye /> : <FaEyeSlash />}
        </div>
      )} */}
    </div>
  );
};
export default Input;
