import { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { newsApi } from "../utils/NewsApi";

export const useSavedNews = (searchTerm) => {
  const [isSaved, setIsSaved] = useState(() => {
    return JSON.parse(localStorage.getItem("saved-news")) || [];
  });

  const handleSave = async (data) => {
    try {
      const keyword = searchTerm;
      const savedCard = await newsApi.saveNewsCard(data, keyword);

      setIsSaved((prev) => [savedCard, ...prev]);
    } catch (error) {
      console.error("Erro ao salvar artigo :", error);
    }
  };

  const handleRemove = async (data) => {
    try {
      const keyword = searchTerm;
      const removedCard = await newsApi.removeNewsCard(data, keyword);

      setIsSaved((prev) => prev.filter((card) => card.url !== removedCard.url));
    } catch (error) {
      console.error("Erro ao remover artigo :", error);
    }
  };

  return { isSaved, setIsSaved, handleSave, handleRemove };
};
