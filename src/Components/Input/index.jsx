import { StyledInput } from "./Input.style";

export const Input = ({ text, inputId, placeholder, type = "text" }) => {
  return (
    <StyledInput className="mb-4 text-left">
      <label className="font-inter mb-2" htmlFor={inputId}>
        {text}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={inputId}
        type={type}
        placeholder={placeholder}
      />
    </StyledInput>
  );
};
