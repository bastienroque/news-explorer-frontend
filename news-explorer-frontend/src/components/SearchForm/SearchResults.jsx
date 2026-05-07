import NewsCardList from "../Main/NewsCardList";
import NotFound from "../NotFound/NotFound";

const SearchResults = () => {
  return (
    <div className="search-results container">
      <h2 className="search-results__title">Procurar resultados</h2>
      <NewsCardList />
      <button className="search-results__show-more-btn">Mostrar mais</button>
      <NotFound />
    </div>
  );
};

export default SearchResults;
