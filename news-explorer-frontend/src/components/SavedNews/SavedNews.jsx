import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import SavedNewsHeader from "../SavedNews/SavedNewsHeader";
import NewsCardList from "../Main/NewsCardList";

const SavedNews = () => {
  const { isSaved } = useContext(SearchContext);
  return (
    <>
      <SavedNewsHeader />
      {isSaved.length > 0 && (
        <div className="saved-news-cards container">
          <NewsCardList />
        </div>
      )}
    </>
  );
};

export default SavedNews;
