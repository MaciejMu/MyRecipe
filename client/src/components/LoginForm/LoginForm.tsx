import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Button from "../Button/Button";
import style from "./LoginForm.module.scss";
import Modal from "../Modal/Modal";

const Login = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [__, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      const result = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      });
      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      setModalText("You are successfully logged in");
      openModal();
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.message) {
        setModalText(error.response?.data.message);
        openModal();
      } else {
        setModalText("Something went wrong");
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
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              id="username"
              value={username.trim()}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              id="password"
              value={password.trim()}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {isLoading ? (
            <BeatLoader color="#000000" />
          ) : (
            <Button type="submit" disabled={isLoading}>
              Login
            </Button>
          )}
        </form>
        <span>
          <p>Don't have an account?</p>
          <Link to="/register">Join now</Link>
        </span>
      </section>
    </>
  );
};

export default Login;
