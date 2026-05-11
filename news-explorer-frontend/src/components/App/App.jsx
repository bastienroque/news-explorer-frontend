import { Routes, Route, useNavigate } from "react-router-dom";

import ProtectedRoute from "../../utils/ProtectedRoute";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";

import { useAuth } from "../../hooks/useAuth";
import { useModal } from "../../hooks/useModal";
import { useNewsSearch } from "../../hooks/useNewsSearch";
import { useSavedNews } from "../../hooks/useSavedNews";

import Header from "../Header/Header";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchForm/SearchResults";
import SavedNews from "../SavedNews/SavedNews";
import AuthModal from "../ModalWithForm/AuthModal";
import Register from "../ModalWithForm/Register";
import Login from "../ModalWithForm/Login";
import Success from "../ModalWithForm/Success";
import Footer from "../Footer/Footer";

function App() {
  const navigate = useNavigate();

  const { userData, setUserData, isLoggedIn, setIsLoggedIn } = useAuth();
  const {
    MODAL_STATES,
    modalState,
    setModalState,
    closeModal,
    switchLogin,
    switchRegister,
  } = useModal();

  const {
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
  } = useNewsSearch();

  const { isSaved, handleSave, handleRemove } = useSavedNews(searchTerm);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <ModalContext value={{ MODAL_STATES, setModalState, switchLogin }}>
        <AuthContext
          value={{ isLoggedIn, userData, setIsLoggedIn, setUserData }}
        >
          <SearchContext
            value={{
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
              handleRemove,
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header
                      onLoginSwitch={switchLogin}
                      onLogOut={handleLogOut}
                    />
                    <SearchForm />
                    <SearchResults
                      onShowMore={handleShowMore}
                      onLoginSwitch={switchLogin}
                    />
                    <About />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Header
                      onRegisterSwitch={switchRegister}
                      onLogOut={handleLogOut}
                    />
                    <SavedNews />
                    <Footer />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <AuthModal
              isOpen={modalState !== MODAL_STATES.CLOSED}
              onClose={closeModal}
              title={
                modalState === MODAL_STATES.LOGIN
                  ? "Entrar"
                  : modalState === MODAL_STATES.REGISTER
                    ? "Inscreva-se"
                    : modalState === MODAL_STATES.SUCCESS
                      ? "Cadastro concluído com sucesso!"
                      : ""
              }
            >
              {modalState === MODAL_STATES.LOGIN && (
                <Login onRegisterSwitch={switchRegister} />
              )}

              {modalState === MODAL_STATES.REGISTER && (
                <Register onLoginSwitch={switchLogin} />
              )}

              {modalState === MODAL_STATES.SUCCESS && (
                <Success onLoginSwitch={switchLogin} />
              )}
            </AuthModal>
          </SearchContext>
        </AuthContext>
      </ModalContext>
    </>
  );
}

export default App;
