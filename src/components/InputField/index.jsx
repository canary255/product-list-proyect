export const InputField = ({
  label = "",
  id,
  type = "text",
  onChange,
  required = false,
}) => {
  return (
    <div className="inputWithLabel">
      <label htmlFor={id}>
        {label}
        {required ? <b>*</b> : null}
      </label>
      <input
        onChange={(e) => {
          onChange(e);
        }}
        type={type}
        id={id}
        required={required}
      />
    </div>
  );
};
