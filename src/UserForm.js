import React, { useContext } from "react";
import UserContext from "./UserContext";

const Form = () => {
  const {
    handleName,
    handleLocation,
    handleSubmit,
    name,
    location
  } = useContext(UserContext);
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input className="input" value={name} onChange={handleName} />
      </div>

      <div className="input-item">
        <label className="label">Update Location: </label>
        <input className="input" value={location} onChange={handleLocation} />
      </div>
      <button>Gönder</button>
    </form>
  );
};

export default Form;
