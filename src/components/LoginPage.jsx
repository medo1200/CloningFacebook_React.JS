import styles from "../css/LoginPage.module.css";
import FacebookLogo from "../assets/icons/fb-logo.png";
import MetaIcon from "../assets/icons/meta-icon.png";
import { useState } from "react";


function LoginPage({ onLogin }) {
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(username, password);
  }


  return (
    <div className={styles.LoginPageContainer}>
      <div>
        {/* Language Change */}
        <p style={{ margin: "30px 0" }}>English (UK)</p>

        {/* Facebook logo first */}
        <img src={FacebookLogo} alt="facebook-logo-icon" height="60px" />

        {/* My form data */}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Mobile number or email address" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <br />
          <button  type="submit" className={styles.loginButton}>
            Log in
          </button>
        </form>
        <a >Forgotten Password?</a>
      </div>

      
      <footer>
        <button>Create new account</button>
        <img src={MetaIcon} height="15px" alt="meta-icon" />
      </footer>
    </div>
  );
}

export default LoginPage;
