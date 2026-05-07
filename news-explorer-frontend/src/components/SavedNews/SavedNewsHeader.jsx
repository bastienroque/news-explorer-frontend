import { useState } from "react";

const SavedNewsHeader = () => {
  return (
    <div className="saved-news-header container">
      <p className="saved-news-header__paragraph">Artigos salvos</p>
      <h2 className="saved-news-header__title">
        Nome , você tem Número artigos salvos
      </h2>
      <p className="saved-news-header__paragraph">Por palavras-chave:</p>
    </div>
  );
};

export default SavedNewsHeader;
