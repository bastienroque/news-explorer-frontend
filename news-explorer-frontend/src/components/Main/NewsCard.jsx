import { useLocation } from "react-router-dom";
import profile_picture from "../../assets/profile_picture.jpg";
import BookmarkIcon from "../../assets/bookmark-icon.svg?react";
import TrashIcon from "../../assets/trash-icon.svg?react";

const NewsCard = () => {
  const isHome = location.pathname === "/";

  return (
    <article className="news-card">
      <div className="news-card__header">
        {/* Conditional according to card state */}
        <div className="news-card__tag">Palavra-chave</div>
        <div className="news-card__controls">
          {/* This tooltip has several messages to show 
          <div className="news-card__tooltip">Exemplo</div>*/}
          {isHome ? (
            <button className="news-card__action-btn">
              <BookmarkIcon className="news-card__action-btn_icon" />
            </button>
          ) : (
            <button className="news-card__action-btn">
              <TrashIcon className="news-card__action-btn_icon" />
            </button>
          )}
        </div>
      </div>
      <img className="news-card__image" src={profile_picture} alt="temporary" />
      <div className="news-card__text-content">
        <p className="news-card__date">Variavel data do artigo</p>
        <h3 className="news-card__title">Variavel titulo do artigo</h3>
        <p className="news-card__description">Variavel descrição do artigo</p>
        <span className="news-card__source">Variavel revista do artigo</span>
      </div>
    </article>
  );
};

export default NewsCard;
