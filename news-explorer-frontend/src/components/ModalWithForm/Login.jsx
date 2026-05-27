import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import InputField from "./InputField";

const Login = ({ onRegisterSwitch }) => {
  const {
    formValues,
    formErrors,
    isValid,
    apiError,
    handleLoginChange,
    handleLogin,
    visibleErrors,
  } = useForm();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isValid) {
    }
  }, [formErrors, isValid]);

  return (
    <>
      <form className="auth-form" onSubmit={handleLogin} noValidate>
        <InputField
          name="email"
          label="E-mail"
          placeholder="Insert your e-mail"
          value={formValues.email}
          onChange={handleLoginChange}
        />
        <p className="input-field__error">{visibleErrors.email}</p>
        <InputField
          name="password"
          label="Senha"
          placeholder="Insert your password"
          type="password"
          value={formValues.password}
          onChange={handleLoginChange}
        />
        <p className="input-field__error">{visibleErrors.password}</p>

        <button type="submit" className="auth-button">
          Entrar
        </button>
        {apiError && <p className="input-field__error">{apiError}</p>}
      </form>
      <p className="auth-switch">
        ou <span onClick={onRegisterSwitch}>Inscreva-se</span>
      </p>
    </>
  );
};

export default Login;
