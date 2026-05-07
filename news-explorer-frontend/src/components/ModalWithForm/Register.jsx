import InputField from "./InputField";

const Register = ({ onLoginSwitch }) => {
  return (
    <>
      <form className="auth-form">
        <InputField label="E-mail" placeholder="Insira e-mail" />
        <InputField
          label="Senha"
          placeholder="Insira a senha"
          type="password"
        />
        <InputField
          label="Nome de usuário"
          placeholder="Insira seu nome de usuário"
        />

        <button className="auth-button" type="button">
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
