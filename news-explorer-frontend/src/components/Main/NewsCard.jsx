import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";
import BookmarkIcon from "../../assets/bookmark-icon.svg?react";
import BookmarkIconActive from "../../assets/bookmark-icon-active.svg?react";
import TrashIcon from "../../assets/trash-icon.svg?react";

const NewsCard = ({ newsData }) => {
  const { isSaved, handleSave, handleRemove } = useContext(SearchContext);
  const { isLoggedIn } = useContext(AuthContext);
  const { switchLogin } = useContext(ModalContext);

  const [isHovered, setIsHovered] = useState(false);

  const savedCards = isSaved.some((item) => item.url === newsData.url);
  const isHome = location.pathname === "/";
  const date = new Date(newsData.publishedAt);
  const dateFormatted = date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let tooltipText = null;

  if (isHome && !isLoggedIn) {
    tooltipText = "Faça o login para salvar os artigos";
  }

  if (!isHome) {
    tooltipText = "Remover dos artigos salvos";
  }

  const InfoToolTip = ({ isHovered, text }) => {
    if (!isHovered || !text) return null;

    return <div className="infotooltip">{text}</div>;
  };

  return (
    <article className="news-card">
      <div className="news-card__header">
        <div className="news-card__controls">
          {isHome ? (
            <div className="news-card__controls">
              {" "}
              <InfoToolTip isHovered={isHovered} text={tooltipText} />
              {isLoggedIn ? (
                <button
                  className="news-card__action-btn"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() =>
                    savedCards ? handleRemove(newsData) : handleSave(newsData)
                  }
                >
                  {" "}
                  {savedCards ? (
                    <BookmarkIconActive className="news-card__action-btn_icon-active" />
                  ) : (
                    <BookmarkIcon className="news-card__action-btn_icon" />
                  )}{" "}
                </button>
              ) : (
                <button
                  className="news-card__action-btn"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={switchLogin}
                >
                  <BookmarkIcon className="news-card__action-btn_icon" />{" "}
                </button>
              )}
            </div>
          ) : (
            <div className="news-card__controls">
              {" "}
              <InfoToolTip isHovered={isHovered} text={tooltipText} />
              <div className="news-card__tag">{newsData.keyword}</div>{" "}
              <button
                className="news-card__action-btn"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => handleRemove(newsData)}
              >
                {" "}
                <TrashIcon className="news-card__action-btn_icon" />{" "}
              </button>{" "}
            </div>
          )}
        </div>
      </div>

      <a href={newsData.url} target="_blank">
        <img
          className="news-card__image"
          src={newsData.urlToImage}
          alt={newsData.title}
        />
        <div className="news-card__text-content">
          <p className="news-card__date">{dateFormatted}</p>
          <h3 className="news-card__title">{newsData.title}</h3>
          <p className="news-card__description">{newsData.description}</p>
          <span className="news-card__source">
            {newsData.source.name.toUpperCase()}
          </span>
        </div>
      </a>
    </article>
  );
};

export default NewsCard;
