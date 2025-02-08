import { StyledInput } from "./Input.style";

export const Input = ({
  text,
  inputId,
  placeholder,
  handleChange = () => {},
  type = "text",
  inputClassName="",
  value="",
  readOnly=false,
  labelClassName="",
  maxLength
}) => {
  return (
    <StyledInput className="mb-3 text-left">
      {text &&
      <label className={`font-inter ${labelClassName}`} htmlFor={inputId}>
        {text}
      </label>}
      <input
        className={`shadow border rounded w-full mt-2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${inputClassName}`}
        id={inputId}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        readOnly={readOnly}
        maxLength={maxLength}
      />
    </StyledInput>
  );
};
