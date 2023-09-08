import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import style from "./RegisterForm.module.scss";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalText, setModalText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("http://localhost:3001/user/register", {
        username,
        password,
        confirmPassword,
      });
      setModalText(
        "Registration Completed! You will be redirected to the login page."
      );
      openModal();
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      if (error instanceof AxiosError) {
        setModalText(error.response?.data.message);
        openModal();
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        modalText={modalText}
      />
      <section className={style.section}>
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              id="username"
              minLength={4}
              maxLength={10}
              value={username.trim()}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              id="password"
              value={password.trim()}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              required
              type="password"
              id="confirmPassword"
              value={confirmPassword.trim()}
              minLength={4}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          {isLoading ? (
            <BeatLoader color="#000000" />
          ) : (
            <Button type="submit" disabled={isLoading}>
              Register
            </Button>
          )}
        </form>
        <span>
          <p>Have an account?</p>
          <Link to="/login">Log in</Link>
        </span>
      </section>
    </>
  );
};

export default RegisterForm;
