import SavedNewsHeader from "../SavedNews/SavedNewsHeader";
import NewsCardList from "../Main/NewsCardList";

const SavedNews = () => {
  return (
    <>
      <SavedNewsHeader />
      <div className="saved-news-cards container">
        <NewsCardList />
      </div>
    </>
  );
};

export default SavedNews;
