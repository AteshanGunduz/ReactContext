import { useState, createContext } from "react";

const UserContext = createContext();

const Provider = ({ children }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const [name1, setName1] = useState("");
  const [location1, setLocation1] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName1(name);
    setLocation1(location);
    setName("");
    setLocation("");
  };

  const valueToShare = {
    handleLocation,
    handleName,
    handleSubmit,
    name,
    location,
    name1,
    location1
  };

  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  );
};

export default UserContext;
export { Provider };
