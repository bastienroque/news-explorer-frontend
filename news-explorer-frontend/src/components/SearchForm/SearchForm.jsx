import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchForm = () => {
  const { searchTerm, setSearchTerm, handleSubmitSearch } =
    useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSubmitSearch(searchTerm);
  };
  return (
    <div className="search-form container">
      <div className="search-form__text">
        <h1 className="search-form__title">O que está acontecendo no mundo?</h1>
        <p className="search-form__paragraph">
          Encontre as últimas notícias sobre qualquer tema e salve elas em sua
          conta pessoal
        </p>
      </div>
      <form
        className="search-form__search-bar"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          name="search"
          value={searchTerm}
          className="search-form__input"
          type="text"
          placeholder="Inserir tema"
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit" className="search-form__search-button">
          Procurar
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
