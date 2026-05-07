const SearchForm = () => {
  return (
    <div className="search-form container">
      <div className="search-form__text">
        <h1 className="search-form__title">O que está acontecendo no mundo?</h1>
        <p className="search-form__paragraph">
          Encontre as últimas notícias sobre qualquer tema e salve elas em sua
          conta pessoal
        </p>
      </div>
      <div className="search-form__search-bar">
        <input
          name="search input"
          className="search-form__input"
          type="text"
          placeholder="Inserir tema"
        />
        <button className="search-form__search-button">Procurar</button>
      </div>
    </div>
  );
};

export default SearchForm;
