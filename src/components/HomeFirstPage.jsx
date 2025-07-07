import styles from "../css/HomeFirstPage.module.css";
import Posts from "./Posts";

import FbLogoName from "../assets/icons/facebook-name-logo.png";
import SearchIcon from "../assets/icons/search-icon.svg";
import MenuIcon from "../assets/icons/menu-svgrepo.svg";
import HomeIcon from "../assets/icons/home-icon.svg"; // color:  #0033FF
import FriendsIcon from "../assets/icons/friends-duo-icon.png";
import ChatsIcon from "../assets/icons/fb-chats-icon.svg";
import VideoIcon from "../assets/icons/fb-reels-icon.png";
import NotificationIcon from "../assets/icons/bell.png";
import MarketIcon from "../assets/icons/store-icon.svg";
import MyFace from "../assets/images/my-face.jpg";
import UploadIcon from "../assets/icons/upload-img-icon.png";
import MarkPhoto from "../assets/images/mark-zuckerberg-story.avif";
import AdelEmamPhoto from "../assets/images/adel-emam-story.jpg";
import NancyAjramPhoto from "../assets/images/nancy-ajram-story.jpeg";
import WillSmithPhoto from "../assets/images/willsmith-story.jpeg";
import JackiChanPhoto from "../assets/images/jackie-chan-story.jpg";

function TopNavBar() {
  return (
    <div>
      <div
        className={styles.upperPart}
        style={{
          display: "flex",
          flexDirection: "row",
          height: "44px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            style={{ margin: "0 10px" }}
            height="20px"
            src={FbLogoName}
            alt="fb_logo_name_svg"
          />
        </div>
        <div style={{ padding: "0 5px" }}>
          <img
            style={{
              backgroundColor: "#e4dede",
              padding: "2px",
              borderRadius: "50%",
            }}
            height="30px"
            src={SearchIcon}
            alt="search-icon"
          />
          <img
            style={{
              backgroundColor: "#e4dede",
              padding: "2px",
              borderRadius: "50%",
              margin: "0 5px",
            }}
            height="30px"
            src={MenuIcon}
            alt="menu-icon-svg"
          />
        </div>
      </div>

      <div
        className={styles.BottomPart}
        style={{
          height: "48px",
          display: "flex",
          alignItems: " center",
          justifyContent: " space-evenly",
        }}
      >
        <img height="25px" src={HomeIcon} alt="home-icon" />
        <img height="25px" src={FriendsIcon} alt="friends-icon" />
        <img height="25px" src={ChatsIcon} alt="chats-icon" />
        <img height="25px" src={VideoIcon} alt="reels-icon" />
        <img height="25px" src={NotificationIcon} alt="bell-icon" />
        <img height="25px" src={MarketIcon} alt="market-icon" />
      </div>
    </div>
  );
}

function MiddleNavBar() {
  return (
    <div
      className={styles.MiddleNavBar}
      style={{
        height: "66px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <img
        style={{ height: "40px", borderRadius: "50%" }}
        src={MyFace}
        alt="my-face"
      />

      <input
        type="text"
        placeholder="What's on your mind?"
        style={{
          borderRadius: "20px",
          border: "none",
          backgroundColor: "rgb(237 235 235 / 87%)",
          padding: "10px 15px",
          width: "60%",
          color: "black",
          fontSize: "1rem",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={UploadIcon} alt="upload-img" style={{ width: "25px" }} />
        <p style={{ fontSize: " 0.8rem" }}>Photo</p>
      </div>
    </div>
  );
}

function StoriesNavBar() {
  return (
    <div
      className={styles.StoriesNavBar}
      style={{
        height: "211px",
        display: "flex",
        flexDirection: "row",
        padding: "0 5px",
        width: "100%",
        whiteSpace: "nowrap",
        overflowX: "auto",
      }}
    >
      <div className={styles.FirststoryCard}>
        <img src={MyFace} alt="my-face" />
        <p>Create Story</p>
      </div>
      <div className={styles.storyCard}>
        <img src={MarkPhoto} alt="mark-photo" />
        <p>Mark ZuckerBerg</p>
      </div>
      <div className={styles.storyCard}>
        <img src={AdelEmamPhoto} alt="adel-emam" />
        <p>Adel Emam</p>
      </div>
      <div className={styles.storyCard}>
        <img src={NancyAjramPhoto} alt="nancy-photo" />
        <p>Nancy Ajram</p>
      </div>
      <div className={styles.storyCard}>
        <img src={WillSmithPhoto} alt="will-smith" />
        <p>Will Smith</p>
      </div>
      <div className={styles.storyCard}>
        <img src={JackiChanPhoto} alt="jackie-chan" />
        <p>Jackie Chan</p>
      </div>
    </div>
  );
}

function HomeFirstPage(props) {
  // Assume that props.name is the person name
  return (
    <div className={styles.HomeFirstPageContainer}>
      <TopNavBar />
      <hr style={{ backgroundColor: "#c6c2c2" }} />
      <MiddleNavBar />
      <hr style={{ height: "2px", backgroundColor: "#c6c2c2" }} />
      <StoriesNavBar />
      <hr style={{ height: "3px", backgroundColor: "#c6c2c2" }} />
      <Posts />
      <hr style={{ height: "3px", backgroundColor: "#c6c2c2" }} />
    </div>
  );
}

export default HomeFirstPage;
