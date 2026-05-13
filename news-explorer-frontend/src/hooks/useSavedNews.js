import { useState } from "react";
import { saveNewsCard, removeNewsCard } from "../utils/storage";

export const useSavedNews = (searchTerm) => {
  const [isSaved, setIsSaved] = useState(() => {
    return JSON.parse(localStorage.getItem("saved-news")) || [];
  });

  const handleSave = async (data) => {
    try {
      const keyword = searchTerm;
      const savedCard = await saveNewsCard(data, keyword);

      const updated = JSON.parse(localStorage.getItem("saved-news")) || [];
      setIsSaved(updated);
    } catch (error) {
      console.error("Erro ao salvar artigo :", error);
    }
  };

  const handleRemove = async (data) => {
    try {
      const keyword = searchTerm;
      const removedCard = await removeNewsCard(data, keyword);

      setIsSaved((prev) => prev.filter((card) => card.url !== removedCard.url));
    } catch (error) {
      console.error("Erro ao remover artigo :", error);
    }
  };

  return { isSaved, setIsSaved, handleSave, handleRemove };
};
