import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const SavedNewsHeader = () => {
  const { userData } = useContext(AuthContext);
  const { isSaved = [] } = useContext(SearchContext);

  const uniqueKeywords = [...new Set(isSaved.map((item) => item.keyword))];

  return (
    <div className="saved-news-header container">
      <p className="saved-news-header__paragraph">Artigos salvos</p>
      <h2 className="saved-news-header__title">
        {userData.username}, você tem {isSaved.length}{" "}
        {isSaved.length === 1 ? "artigo" : "artigos"}{" "}
        {isSaved.length === 1 ? "salvo" : "salvos"}
      </h2>
      {isSaved.length > 0 && (
        <p className="saved-news-header__keywords">
          Por palavras-chave: <span>{uniqueKeywords.join(", ")}</span>
        </p>
      )}
    </div>
  );
};

export default SavedNewsHeader;
