import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import InputField from "./InputField";

const Register = ({ onLoginSwitch }) => {
  const {
    formValues,
    formErrors,
    isValid,
    handleRegisterChange,
    handleRegister,
    visibleErrors,
  } = useForm();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isValid) {
    }
  }, [formErrors, isValid]);

  return (
    <>
      <form className="auth-form" onSubmit={handleRegister} noValidate>
        <InputField
          name="email"
          label="E-mail"
          placeholder="Insert your email"
          value={formValues.email}
          onChange={handleRegisterChange}
        />
        <p className="input-field__error">
          {visibleErrors.email || formErrors.email}
        </p>
        <InputField
          name="password"
          label="Senha"
          placeholder="Insert your password"
          type="password"
          value={formValues.password}
          onChange={handleRegisterChange}
        />
        <p className="input-field__error">{visibleErrors.password}</p>
        <InputField
          name="username"
          label="Nome de usuário"
          placeholder="Insert your username"
          value={formValues.username}
          onChange={handleRegisterChange}
        />
        <p className="input-field__error">{visibleErrors.username}</p>

        <button className="auth-button" type="submit">
          Inscrever-se
        </button>
      </form>
      <p className="auth-switch">
        ou <span onClick={onLoginSwitch}>Entre</span>
      </p>
    </>
  );
};

export default Register;
