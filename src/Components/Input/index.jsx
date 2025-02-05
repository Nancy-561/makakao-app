import { StyledInput } from "./Input.style";

export const Input = ({
  text,
  inputId,
  placeholder,
  handleChange = () => {},
  type = "text",
  inputClassName="",
  value="",
  readOnly=false
}) => {
  return (
    <StyledInput className="mb-3 text-left">
      <label className="font-inter mb-2" htmlFor={inputId}>
        {text}
      </label>
      <input
        className={`shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputClassName}`}
        id={inputId}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        readOnly={readOnly}
      />
    </StyledInput>
  );
};
