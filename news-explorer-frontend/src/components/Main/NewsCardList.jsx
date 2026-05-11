import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import NewsCard from "./NewsCard";

const NewsCardList = () => {
  const { newsData, isSaved, visibleCards } = useContext(SearchContext);

  const isHome = location.pathname === "/";

  return (
    <>
      {isHome ? (
        <div className="news-card-list">
          {newsData.slice(0, visibleCards).map((newData, index) => (
            <NewsCard key={index} newsData={newData} />
          ))}
        </div>
      ) : (
        isSaved && (
          <div className="news-card-list">
            {isSaved.map((newData, index) => (
              <NewsCard key={index} newsData={newData} />
            ))}
          </div>
        )
      )}
    </>
  );
};

export default NewsCardList;
