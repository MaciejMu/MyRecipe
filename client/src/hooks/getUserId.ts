const getUserId = () => {
  return window.localStorage.getItem("userID");
};

export default getUserId;
