import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartupPage from "./components/StartupPage";
import LoginPage from "./components/LoginPage";
import WelcomeHomePage from "./components/WelcomeHomePage";
import Friends from "./components/Friends";
import Messages from "./components/Messages";
import Reels from "./components/Reels";
import Notifications from "./components/Notifications";
import MarketPlace from "./components/MarketPlace";

const UnavailableMssg = (
  <h1 style={{ textAlign: "center" }}>
    404 Oops! We couldn’t find that page.
    <br />
    Please double-check the web address or <a href="/">click here to go home</a>
    .
  </h1>
);

function App() {
  if (window.innerWidth >= "480") {
    return (
      <h1 style={{ textAlign: "center" }}>
        Sorry , This application only works on phone devices
      </h1>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={UnavailableMssg}></Route>
          <Route path="/" element={<StartupPage />}></Route>
          <Route path="/loginPage" element={<LoginPage />}></Route>
          <Route path="/homePage" element={<WelcomeHomePage />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/watch" element={<Reels />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/marketplace" element={<MarketPlace />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
