const InputField = ({
  label,
  placeholder,
  name = "name",
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        minLength="4"
        maxLength="50"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
