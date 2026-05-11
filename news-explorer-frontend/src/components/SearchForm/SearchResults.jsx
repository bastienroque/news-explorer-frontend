import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import NewsCardList from "../Main/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import { useNewsSearch } from "../../hooks/useNewsSearch";

const SearchResults = ({ onShowMore }) => {
  const { newsData, error, hasSearched } = useContext(SearchContext);
  const { isLoading } = useNewsSearch();

  if (!hasSearched) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="search-results container">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="search-results container">
      {error && <p>Um erro ocorreu</p>}
      {newsData && newsData.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <h2 className="search-results__title">Procurar resultados</h2>
          <NewsCardList />
          <button
            className="search-results__show-more-btn"
            onClick={onShowMore}
          >
            Mostrar mais
          </button>
        </>
      )}
    </div>
  );
};

export default SearchResults;
