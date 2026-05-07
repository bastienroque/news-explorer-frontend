import InputField from "./InputField";

const Login = ({ onRegisterSwitch }) => {
  return (
    <>
      <form className="auth-form">
        <InputField label="E-mail" placeholder="Insira e-mail" />
        <InputField
          label="Senha"
          placeholder="Insira a senha"
          type="password"
        />

        <button className="auth-button">Entrar</button>
      </form>
      <p className="auth-switch">
        ou <span onClick={onRegisterSwitch}>Inscreva-se</span>
      </p>
    </>
  );
};

export default Login;
