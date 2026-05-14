import { useState } from "react";
import { saveNewsCard, removeNewsCard } from "../utils/storage";

export const useSavedNews = (searchTerm, userData) => {
  const storageKey = `saved-news-${userData?.email?.toLowerCase() || "guest"}`;

  const [isSaved, setIsSaved] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  });

  const handleSave = async (data) => {
    try {
      const keyword = searchTerm;

      await saveNewsCard(data, keyword, userData?.email);

      const updated = JSON.parse(localStorage.getItem(storageKey)) || [];

      setIsSaved(updated);
    } catch (error) {
      console.error("Erro ao salvar artigo :", error);
    }
  };

  const handleRemove = async (data) => {
    try {
      const keyword = searchTerm;

      const removedCard = await removeNewsCard(data, keyword, userData?.email);

      setIsSaved((prev) => prev.filter((card) => card.url !== removedCard.url));
    } catch (error) {
      console.error("Erro ao remover artigo :", error);
    }
  };

  return { isSaved, setIsSaved, handleSave, handleRemove };
};
