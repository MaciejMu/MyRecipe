import { useEffect, useState } from "react";
import getUserId from "../../hooks/getUserId";
import axios from "axios";

function UserName() {
  const [username, setUsername] = useState();
  const userID = getUserId();

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await axios.get(
          `http://localhost:3001/user/name/${userID}`
        );
        setUsername(response.data);
      };
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  });
  return <>{username ? username : null}</>;
}

export default UserName;
