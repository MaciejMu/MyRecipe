import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const Login = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [__, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? <BeatLoader color="#000000" /> : "Login"}
        </button>
      </form>
      <p>Don't have an account?</p>
      <Link to="/register">Join now</Link>
    </div>
  );
};
export default Login;
