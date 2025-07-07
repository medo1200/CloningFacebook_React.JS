import "./App.css";
import { useState } from "react";
import database from "./data/users";
import LoginPage from "./components/LoginPage";
import HomeFirstPage from "./components/HomeFirstPage";


function PhoneValidation() {
      // If device greater than 480px width
    return (
      <h1 style={{ textAlign: "center" }}>
        Sorry , This application for phones only
      </h1>
    );
}


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  if (window.innerWidth >= "480") {
    PhoneValidation();
  } else {
    // Simple login handler
    function handleLogin(username, password) {
      const user = database.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        setLoggedInUser(user);
      } else {
        alert("Invalid username or password");
      }
    }

    return loggedInUser ? (
      <HomeFirstPage name={loggedInUser.name} />
    ) : (
      <LoginPage onLogin={handleLogin} />
    );
  }
}

export default App;
