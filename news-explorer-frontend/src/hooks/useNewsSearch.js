import { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { newsApi } from "../utils/NewsApi";

export const useNewsSearch = () => {
  const { isSaved, handleSave } = useContext(SearchContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [newsData, setNewsData] = useState(null);
  const [visibleCards, setVisibleCards] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmitSearch = async (searchQuery) => {
    if (!searchQuery.trim()) {
      alert("Por favor, insira uma palavra-chave");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setHasSearched(false);

      const response = await newsApi.getNewsData(searchQuery);

      setHasSearched(true);
      setNewsData(response);

      setVisibleCards(3);
    } catch (error) {
      console.error(
        "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.",
        error,
      );
      setError(true);

      setNewsData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return {
    newsData,
    visibleCards,
    setVisibleCards,
    isLoading,
    error,
    hasSearched,
    handleSubmitSearch,
    handleShowMore,
    searchTerm,
    setSearchTerm,
    isSaved,
    handleSave,
  };
};
