const InputField = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        minLength="4"
        maxLength="50"
        required
      />
    </div>
  );
};

export default InputField;
