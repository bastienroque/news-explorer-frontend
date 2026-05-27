import { useState } from "react";

export const useModal = () => {
  const MODAL_STATES = {
    CLOSED: "closed",
    LOGIN: "login",
    REGISTER: "register",
    SUCCESS: "success",
  };
  const [modalState, setModalState] = useState(MODAL_STATES.CLOSED);

  const closeModal = () => {
    setModalState(MODAL_STATES.CLOSED);
  };

  const switchLogin = () => {
    setModalState(MODAL_STATES.LOGIN);
  };

  const switchRegister = () => {
    setModalState(MODAL_STATES.REGISTER);
  };

  return {
    MODAL_STATES,
    modalState,
    setModalState,
    closeModal,
    switchLogin,
    switchRegister,
  };
};
