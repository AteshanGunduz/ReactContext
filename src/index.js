import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Name from "./NameComponent";
import Location from "./LocationComponent";
import UserForm from "./UserForm";
import "./styles.css";
import { Provider } from "./UserContext";

function App() {
  return (
    <div className="App">
      <h2 className="is-size-4">React Context API</h2>
      <div className="container">
        <UserForm />

        <h2 className="is-size-4">Display </h2>
        <Name />
        <Location />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider>
    <App />
  </Provider>
);
