import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ModalContext } from "../context/ModalContext";

export const useForm = () => {
  const initialValues = { email: "", password: "", username: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const { setIsLoggedIn, setUserData } = useContext(AuthContext);
  const { MODAL_STATES, setModalState } = useContext(ModalContext);

  const validateRegister = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email é necessário";
    } else if (!regex.test(values.email)) {
      errors.email = "Formato de email incorreto";
    }

    if (!values.password) {
      errors.password = "Senha é necessária";
    } else if (values.password.length < 4) {
      errors.password = "Por favor use uma senha maior";
    }

    if (!values.username) {
      errors.username = "Nome de usuário é necessário";
    } else if (values.username.length < 4) {
      errors.username = "Por favor use um nome de usuário maior";
    }
    return errors;
  };

  const validateLogin = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email é necessário";
    } else if (!regex.test(values.email)) {
      errors.email = "Formato de email incorreto";
    }

    if (!values.password) {
      errors.password = "A Senha é necessária";
    }

    return errors;
  };

  const visibleErrors = Object.keys(formErrors).reduce((acc, key) => {
    if (touched[key]) {
      acc[key] = formErrors[key];
    }
    return acc;
  }, {});

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => {
      const updated = { ...prev, [name]: value };

      setFormErrors(validateRegister(updated));

      return updated;
    });

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => {
      const updated = { ...prev, [name]: value };

      setFormErrors(validateLogin(updated));

      return updated;
    });

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setTouched({
      email: true,
      password: true,
      username: true,
    });

    const errors = validateRegister(formValues);

    setFormErrors(errors);
    setIsValid(true);

    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      setModalState(MODAL_STATES.SUCCESS);
      setUserData({ email: formValues.email, name: formValues.username });
    } else {
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setTouched({
      email: true,
      password: true,
    });

    const errors = validateLogin(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;
    setFormValues({ ...initialValues });
    setFormErrors({});
    setIsLoggedIn(true);
    setModalState(MODAL_STATES.CLOSED);
  };

  return {
    formValues,
    formErrors,
    setFormErrors,
    setFormValues,
    isValid,
    handleRegisterChange,
    handleRegister,
    handleLoginChange,
    handleLogin,
    setTouched,
    visibleErrors,
  };
};
