import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchForm/SearchResults";
import SavedNews from "../SavedNews/SavedNews";
import AuthModal from "../ModalWithForm/AuthModal";
import Register from "../ModalWithForm/Register";
import Login from "../ModalWithForm/Login";

function App() {
  const [modalType, setModalType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const closeModal = () => {
    setModalType(null);
  };

  const handleLogin = () => {
    setModalType("login");
  };

  const handleRegister = () => {
    setModalType("register");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header
                onRegisterSwitch={handleRegister}
                onLoginSwitch={handleLogin}
                onClose={closeModal}
              />
              <SearchForm />
              <SearchResults />
              <About />
              <Footer />
            </div>
          }
        />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Header
                onRegisterSwitch={handleRegister}
                onLoginSwitch={handleLogin}
              />
              <SavedNews />
              <Footer />
            </ProtectedRoute>
          }
        />
      </Routes>
      <AuthModal
        isOpen={modalType !== null}
        onClose={closeModal}
        title={modalType === "login" ? "Entrar" : "Inscreva-se"}
      >
        {modalType === "login" ? (
          <Login onRegisterSwitch={handleRegister} onClose={closeModal} />
        ) : (
          <Register onLoginSwitch={handleLogin} onClose={closeModal} />
        )}
      </AuthModal>
    </>
  );
}

export default App;
