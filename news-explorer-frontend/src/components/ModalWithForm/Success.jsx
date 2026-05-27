const Success = ({ onLoginSwitch }) => {
  return (
    <>
      <form className="auth-form">
        <span className="auth-success">
          <span onClick={onLoginSwitch}>Entrar</span>
        </span>
      </form>
    </>
  );
};

export default Success;
