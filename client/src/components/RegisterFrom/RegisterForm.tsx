import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import style from "./RegisterForm.module.scss";
import Button from "../Button/Button";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            required
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            required
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
    </div>
  );
};

export default RegisterForm;
