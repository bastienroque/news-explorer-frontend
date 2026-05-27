import { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { NewsApi } from "../utils/NewsApi";

export const useNewsSearch = () => {
  const { isSaved, handleSave } = useContext(SearchContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [newsData, setNewsData] = useState(null);
  const [visibleCards, setVisibleCards] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmitSearch = async (searchQuery) => {
    try {
      setIsLoading(true);
      setError(null);
      setHasSearched(false);

      const api = new NewsApi(import.meta.env.VITE_API_URL);

      const response = await api.getNewsData(searchQuery);

      setHasSearched(true);
      setNewsData(response);

      setVisibleCards(3);
    } catch (error) {
      console.error(
        "Sorry, something went wrong during your request. There may be a connection issue, or the server may be down. Please try again later.",
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
