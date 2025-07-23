import { Header1 } from "./WelcomeHomePage";
import MessengerImage from "../assets/images/messenger-blurple_logo.png";

function Messages() {
  function errorHandling() {
    alert("You can download from PlayStore , If you don't have it !");
  }

  return (
    <div>
      <Header1 />
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexDirection: "column",
          padding: "20% 5%",
          textAlign: "center",
        }}
      >
        <img
          style={{ height: "63px", width: "62px", margin: "auto" }}
          src={MessengerImage}
          alt="messenger-image"
        />

        <p style={{ fontSize: "1.6rem", fontWeight: "400" }}>
          Use Messenger to keep chatting
        </p>
        <p style={{ color: "gray" }}>
          Chats on mobile browsers are not available.
        </p>
        <button style={{
            backgroundColor:"#4444f6ff",
            color:"white",
            padding:'10px 0',
            borderRadius:'10px',
            border:'none',
            fontWeight:'bold',
            fontSize:'0.9rem'
        }} onClick={errorHandling}>Go to Messenger</button>
      </div>
    </div>
  );
}

export default Messages;
