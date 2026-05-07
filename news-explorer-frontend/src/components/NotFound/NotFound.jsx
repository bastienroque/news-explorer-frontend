import nada_encontrado from "../../assets/nada-encontrado-icon.svg";

const NotFound = () => {
  return (
    <div className="not-found container">
      <img
        className="not-found__icon"
        src={nada_encontrado}
        alt="gray nothing found icon"
      />
      <h3 className="not-found__title">Nada encontrado</h3>
      <p className="not-found__paragraph">
        Desculpe, mas nada corresponde aos seus termos de pesquisa.
      </p>
    </div>
  );
};

export default NotFound;
