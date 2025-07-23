import { Link } from "react-router-dom"; // for routing using <Link> element
import styles from "../css/WelcomeHomePage.module.css"; // WelcomeHomePage.module.css file
//import accounts from "../data/accounts"; // database soon
import { useState } from "react";
import FacebookWord from "../assets/icons/facebook-word.png";
import ProfilePicture from "../assets/pp-images/man-profilepicture.jpeg";
import UploadPhotoLogo from "../assets/icons/upload-img-icon.png";
import ShowerBoy from "../assets/pp-images/shower-pp.jpg";
import ManPP from "../assets/pp-images/man2-pp.jpg";
import UglyPP from "../assets/pp-images/ugly-pp.jpg";
import LoveEmoji from "../assets/icons/love.png";
import HeartEmoji from "../assets/icons/heart.png";
import LikeEmoji from "../assets/icons/like.png";
import LikeIcon from "../assets/icons/like-logo.svg";
import CommentIcon from "../assets/icons/comment-icon.svg";
import ShareIcon from "../assets/icons/share-logo.svg";
import OpenMouthPP from "../assets/pp-images/upmouth-pp.jpg";
import TeenBoy from "../assets/pp-images/boy-pp.jpg";
import ShowerLittleBoy from "../assets/pp-images/showerBoy-ppavif.avif";
import VerifiedIcon from "../assets/icons/verified-icon.svg";
import LikedIcon from "../assets/icons/liked.svg";
import GuestPicture from "../assets/pp-images/newPostPicture.jpg";

//import Reels from './Reels';

function Header1(props) {
  
  return (
    <>
      {/* Header part1*/}
      <header className={styles.homePageHeader1}>
        <div className={styles.upperPart}>
          <img height="20px" src={FacebookWord} alt="facebook-word" />

          <div style={{ display: "flex", width: "22%", gap: "5%" }}>
            {/* Search Icon */}
            <svg
              style={{
                backgroundColor: "#e3e3e3",
                padding: "7px",
                borderRadius: "50%",
              }}
              height="22px"
              width="auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            {/* Menu Icon */}
            <svg
              style={{
                backgroundColor: "#e3e3e3",
                padding: "7px",
                borderRadius: "50%",
              }}
              height="22px"
              width="auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>
        <div className={styles.bottomPart}>
          <Link style={{ height: "25px" }} to="/homePage">
            <svg
              height="25px"
              fill={props.homePageColor}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </Link>
          <Link  style={{ height: "25px"}} to="/friends">
            <svg
              height="25px"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M423 1121 c-89 -22 -153 -96 -161 -185 -5 -67 9 -112 52 -162 l34
-40 -55 -28 c-68 -36 -137 -114 -164 -186 -25 -67 -35 -190 -20 -246 15 -57
75 -110 133 -119 24 -4 142 -5 264 -3 l221 3 36 28 c42 32 62 66 72 120 l7 37
122 0 c140 0 176 14 203 78 18 44 13 149 -11 205 -19 47 -88 121 -127 137 -30
13 -30 13 -11 34 48 52 57 134 21 192 -41 68 -139 95 -208 59 -94 -48 -116
-177 -44 -257 9 -10 11 -18 5 -18 -5 0 -33 -18 -61 -40 l-51 -40 -42 21 c-24
12 -44 22 -46 24 -1 1 13 18 31 37 62 66 73 154 30 239 -43 84 -141 131 -230
110z m135 -73 c67 -41 90 -134 52 -209 -53 -102 -203 -114 -269 -20 -104 145
64 323 217 229z m421 -69 c25 -25 31 -39 31 -74 0 -85 -75 -134 -154 -101 -71
30 -85 130 -25 180 45 38 107 36 148 -5z m9 -255 c88 -37 136 -114 137 -222 0
-105 -10 -112 -165 -112 -131 0 -121 -5 -135 75 -8 45 -36 105 -73 154 -31 42
-24 56 48 94 61 31 130 36 188 11z m-370 -59 c100 -55 157 -148 168 -276 8
-90 -9 -139 -58 -169 -31 -18 -50 -20 -258 -20 -208 0 -227 2 -258 20 -60 37
-78 126 -47 243 24 93 78 162 159 204 54 28 79 33 161 30 66 -3 89 -8 133 -32z"
                />
              </g>
            </svg>
          </Link>
          <Link style={{ height: "25px" }} to="/messages">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M480 1137 c-174 -59 -293 -183 -344 -356 -20 -67 -21 -207 -2 -277
20 -75 73 -168 129 -227 l49 -52 -7 -92 c-6 -78 -4 -94 8 -99 9 -3 52 16 99
43 l83 48 112 -3 c172 -6 294 40 403 148 99 99 150 225 150 370 0 239 -149
436 -379 504 -82 24 -220 21 -301 -7z m252 -32 c26 -3 80 -22 119 -42 349
-175 348 -675 -3 -847 -87 -43 -173 -56 -283 -43 -46 5 -81 5 -88 -1 -7 -5
-37 -23 -68 -40 l-56 -32 5 74 4 74 -55 55 c-35 36 -69 84 -94 133 -38 78 -38
78 -38 204 0 126 0 126 38 204 50 100 122 173 219 220 71 36 169 57 228 50 14
-2 46 -6 72 -9z"
                />
                <path
                  d="M620 811 c-91 -82 -165 -155 -165 -163 0 -7 28 -26 62 -43 34 -16 64
-33 68 -36 3 -4 -26 -57 -65 -119 -70 -109 -78 -137 -36 -128 18 4 346 295
346 307 0 13 -20 25 -82 52 -32 13 -58 27 -58 31 0 4 31 56 69 115 67 106 76
133 42 133 -9 0 -90 -67 -181 -149z m25 -72 c-32 -49 -26 -58 51 -89 30 -13
53 -26 52 -30 -5 -11 -138 -133 -138 -126 0 4 12 24 26 46 14 21 23 43 20 49
-4 6 -34 22 -66 37 -33 15 -60 28 -60 31 0 7 125 122 133 123 4 0 -4 -18 -18
-41z"
                />
              </g>
            </svg>
          </Link>
          <Link style={{ height: "25px" }} to="/watch">
            <svg
              height="25px"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M148 1107 c-47 -17 -47 -22 -48 -380 l0 -338 25 -24 24 -25 231 0
230 0 0 -65 0 -64 -147 0 c-82 0 -154 0 -160 0 -14 -1 -18 -40 -5 -42 4 0 155
-1 336 -2 335 -2 380 2 349 34 -8 8 -59 12 -165 13 l-153 1 -3 63 -3 62 234 0
c221 0 234 1 255 20 26 24 24 -4 24 408 0 294 0 305 -20 325 -20 20 -30 20
-502 21 -265 1 -491 -2 -502 -7z m966 -53 c17 -16 17 -637 0 -654 -7 -7 -160
-9 -485 -8 l-474 3 -3 324 c-1 213 1 328 8 336 15 18 936 18 954 -1z"
                />
                <path
                  d="M460 950 c-19 -19 -20 -33 -20 -223 0 -185 2 -205 18 -220 10 -10 27
-17 38 -16 23 0 312 187 327 210 24 39 1 63 -162 167 -87 56 -164 102 -170
102 -6 0 -20 -9 -31 -20z m181 -127 c76 -49 139 -91 139 -95 0 -3 -55 -41
-122 -84 -68 -42 -133 -84 -145 -92 l-23 -14 0 186 c0 102 3 186 6 186 4 0 69
-39 145 -87z"
                />
              </g>
            </svg>
          </Link>

          <Link style={{ height: "25px" }} to="/notifications">
            <svg
              height="25px"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M579 1185 c-29 -16 -59 -56 -59 -79 0 -8 -27 -29 -59 -46 -158 -84
-244 -251 -218 -421 11 -75 -1 -130 -43 -196 -55 -87 -32 -185 54 -224 31 -14
65 -19 138 -19 l96 0 19 -37 c54 -111 212 -111 266 0 l19 37 96 0 c73 0 107 5
138 19 85 39 110 139 55 222 -41 61 -54 120 -43 196 24 174 -61 338 -219 423
-32 17 -59 38 -59 46 0 24 -31 64 -61 80 -35 18 -86 17 -120 -1z m114 -57 l22
-23 -37 -3 c-21 -2 -55 -2 -76 0 l-37 3 23 23 c13 13 34 22 52 22 18 0 39 -9
53 -22z m89 -106 c62 -27 144 -105 174 -164 31 -61 44 -153 31 -225 -12 -71 3
-142 43 -203 47 -71 36 -137 -27 -169 -30 -15 -696 -15 -726 0 -63 32 -74 99
-27 167 39 58 54 131 43 207 -18 127 17 235 104 316 54 51 79 66 138 86 59 19
189 12 247 -15z m-52 -832 c0 -6 -11 -22 -25 -35 -34 -35 -96 -35 -130 0 -14
13 -25 29 -25 35 0 6 34 10 90 10 56 0 90 -4 90 -10z"
                />
              </g>
            </svg>
          </Link>

              <Link style={{height:'25px'}} to='/marketplace'>
          <svg
            id="MarketPlace-Icon"
            height="25px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M2.7,9.45a4.235,4.235,0,0,0,.3.3V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.752a4.235,4.235,0,0,0,.3-.3,4,4,0,0,0,.731-3.456L20.97,1.758A1,1,0,0,0,20,1H4a1,1,0,0,0-.97.758L1.972,5.994A4,4,0,0,0,2.7,9.45ZM13,21H11V16h2Zm6,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v6H5V10.9A3.989,3.989,0,0,0,8.914,9.61c.026.03.053.059.08.089A4.086,4.086,0,0,0,12.041,11a4.039,4.039,0,0,0,2.965-1.3c.027-.03.054-.059.08-.089A3.989,3.989,0,0,0,19,10.9ZM3.911,6.479,4.781,3H19.219l.87,3.479A2.029,2.029,0,0,1,18.12,9,2.041,2.041,0,0,1,16.1,7.14l-.042-.5a1,1,0,0,0-1.993.166v0a2.006,2.006,0,0,1-.529,1.539A2.059,2.059,0,0,1,11.959,9,2.029,2.029,0,0,1,9.937,6.806v0a1,1,0,0,0-.914-1.079.989.989,0,0,0-1.079.913l-.042.5A2.041,2.041,0,0,1,5.88,9,2.029,2.029,0,0,1,3.911,6.479Z" />
          </svg></Link>
        </div>
      </header>
      <hr />
    </>
  );
}

function Header2() {
  const [postMessage, setPostMessage] = useState("");
  const [showPostButton, setShowPostButton] = useState(false);
  const [userName, setUserName] = useState("Guest");

  return (
    <>
      {/* Header Part 2 */}
      <header className={styles.homePageHeader2}>
        <img
          style={{ height: "40px", borderRadius: "50%" }}
          src={ProfilePicture}
          alt="p-pic"
        />

        <textarea
          onKeyUp={(textarea) => {
            if (!textarea.target.value) {
              console.log("Text area is now empty");
              setShowPostButton(false); // Hides the button
            } else {
              setPostMessage(textarea.target.value);
              console.log(`Typed: ${postMessage}`);
              setShowPostButton(true); // Shows the button
            }
          }}
          className={styles.WhatsOnMindInput}
          autoComplete="false"
          autoCorrect="false"
          spellCheck="false"
          placeholder="What's on your mind?"
        ></textarea>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {showPostButton ? (
            <Link
              to="/homePage"
              onClick={(btn) => {
                setShowPostButton(false); // Hide Post button

                console.log(`New Post by ${userName}: ${postMessage}`);
                window.localStorage.setItem("postMessage", postMessage);
                window.localStorage.setItem("userName", userName);
                console.log("Posted to localStorage successfully !!");
              }}
              style={{
                color: "black",
                padding: "40% 30%",
                margin: "0 4px",
                fontWeight: "700",
                borderRadius: "10px",
                backgroundColor: "#03a9f4",
                border: "none",
              }}
            >
              Post
            </Link>
          ) : (
            <>
              <img height="25px" src={UploadPhotoLogo} alt="upload-pic" />
              <p style={{ fontSize: "80%" }}>Photo</p>
            </>
          )}
        </div>
      </header>
      <hr
        style={{
          height: "3px",
          backgroundColor: "rgb(200 200 200 / 80%)",
          border: "none",
        }}
      />
    </>
  );
}

function Stories() {
  const paragraphStyle = {
    position: "absolute",
    width: "100%",
    color: "white",
    fontSize: "0.9rem",
    bottom: "5%",
  };

  return (
    <>
      <section className={styles.storiesContainer}>
        <div className={styles.mainStoryCard}>
          <img src={ProfilePicture} alt="mine-pic" />
          <p className={styles.plusSymbol}>+</p>
          <p className={styles.createStory}>Create Story</p>
        </div>

        <div className={styles.storyCard}>
          <img
            style={{ position: "absolute", left: "-30%" }}
            src={ShowerBoy}
            alt="oldMan-pic"
          />
          <p style={paragraphStyle}>Papa</p>
        </div>

        <div className={styles.storyCard}>
          <img
            style={{ position: "absolute", left: "-40%" }}
            src={ManPP}
            alt="random-pic"
          />
          <p style={paragraphStyle}>Mr.Burger</p>
        </div>

        <div className={styles.storyCard}>
          <img src={UglyPP} alt="random_pic" />
          <p style={paragraphStyle}>Alien Guy</p>
        </div>

        <div className={styles.storyCard}>
          <img src={OpenMouthPP} alt="open-mouth" />
          <p style={paragraphStyle}>George</p>
        </div>

        <div className={styles.storyCard}>
          <img src={TeenBoy} alt="teen-boy" />
          <p style={paragraphStyle}>John Mike</p>
        </div>
        <div className={styles.storyCard}>
          <img src={ShowerLittleBoy} alt="shower_Little_boy" />
          <p style={paragraphStyle}>Chucky Boy</p>
        </div>
        <div className={styles.storyCard} style={{ backgroundColor: "black" }}>
          <p style={paragraphStyle}>No story here</p>
        </div>
      </section>
      <hr
        style={{ height: "5px", border: "none", backgroundColor: "#cac7c7" }}
      />
    </>
  );
}

function Posts({ newText, newUserName = "Guest" }) {
  const [like, setLike] = useState(false);
  const [likeNewPost, setLikeNewPost] = useState(false);
  const [papaLike, setPapaLike] = useState(false);
  const [alienLike, setAlienLike] = useState(false);
  const [adamLike, setAdamLike] = useState(false);

  function handleLikes() {
    setLike(!like);
  }

  function handleNewPost() {
    setLikeNewPost(!likeNewPost);
  }

  function handlePapaLikes() {
    setPapaLike(!papaLike);
  }

  function handleAlienLikes() {
    setAlienLike(!alienLike);
  }

  function handleAdamLikes() {
    setAdamLike(!adamLike);
  }

  return (
    <section id="posts">
      {/* New Post from user */}
      {newText && (
        <div className={styles.postCard}>
          <header>
            <div>
              <Link to="#">
                <img
                  style={{ opacity: "80%" }}
                  src={GuestPicture}
                  alt="mine-pic"
                />
              </Link>
              <p>
                <Link to="#" style={{ color: "black" }}>
                  {newUserName}
                </Link>
              </p>
            </div>

            <svg
              onClick={() => {
                // Deleting data with (3 dots button)
                window.localStorage.removeItem("postMessage");
                window.localStorage.removeItem("userName");
                console.log("Cleared data from localStorage!");
                newText = null; // Clear saved name
              }}
              fill="none"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
                fill="#4A5568"
              />
              <path
                d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
                fill="#4A5568"
              />
              <path
                d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
                fill="#4A5568"
              />
            </svg>
          </header>
          <main>
            <p>{newText}</p>
          </main>

          <footer>
            <div className={styles.upperFooter}>
              <div id="icons">
                <img src={LikeEmoji} alt="like-emoji" />
              </div>
              {likeNewPost ? <p>You Liked this</p> : <p></p>}
            </div>

            <div className={styles.bottomFooter} style={{gridTemplateColumns:'1fr 1fr'}}>
              {likeNewPost ? (
                <div onClick={handleNewPost} className={styles.likeContainer}>
                  <img height="25px" src={LikedIcon} alt="like-icon" />
                  <p></p>
                </div>
              ) : (
                <div onClick={handleNewPost} className={styles.likeContainer}>
                  <img height="25px" src={LikeIcon} alt="like-icon" />
                  <p></p>
                </div>
              )}

              <div className={styles.commentContainer}>
                <img height="25px" src={CommentIcon} alt="PIC" />
                <p></p>
              </div>
              
            </div>
          </footer>

          <hr
            style={{
              height: "4px",
              border: "none",
              backgroundColor: "#cac7c7",
            }}
          />
        </div>
      )}

      {/* Post 1 - (Mr.Tegar) */}
      <div className={styles.postCard}>
        <header>
          <div>
            <Link to="https://www.facebook.com/0100000000T/">
              <img src={ProfilePicture} alt="mine-pic" />
            </Link>
            <p>
              <Link
                to="https://www.facebook.com/0100000000T/"
                style={{ color: "black" }}
              >
                Mr.Tegar
              </Link>
              <img src={VerifiedIcon} alt="verified_ico" />
            </p>
          </div>

          <svg
            fill="none"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
              fill="#4A5568"
            />
            <path
              d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
              fill="#4A5568"
            />
            <path
              d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
              fill="#4A5568"
            />
          </svg>
        </header>
        <main>
          <p>
            {" "}
            👋 Hey there! I’m{" "}
            <Link
              to="https://www.facebook.com/0100000000T/"
              style={{ color: "red" }}
            >
              <strong>Omar Tegar</strong>
            </Link>{" "}
            Welcome to my Facebook-style feed! Here’s a quick snapshot of what I
            built—and what I can do for you: <br /> <br />
            <strong>🖥️ Front-End •</strong> HTML5 & CSS3 for clean, responsive
            layouts • JavaScript & React.js for dynamic, component-driven UIs{" "}
            <br /> <br />
            <strong>⚙️ Back-End •</strong> Node.js runtime with • Express.js
            framework for fast, scalable APIs <br /> <br />
            🔧 Skills at a glance • Building full-stack web apps from scratch •
            Designing intuitive user interfaces • Crafting RESTful services and
            handling real-time data <br /> <br />
            Feel free to explore, poke around the code, and drop me a message if
            you’d like to collaborate. Let’s build something awesome together!
            🚀
          </p>
        </main>

        <footer>
          <div className={styles.upperFooter}>
            <div id="icons">
              <img src={LoveEmoji} alt="love-emoji" />
              <img src={HeartEmoji} alt="heart-emoji" />
              <img src={LikeEmoji} alt="like-emoji" />
            </div>
            {like ? <p>You and 1.6M others</p> : <p>Admin and 1.6M others</p>}
          </div>

          <div className={styles.bottomFooter}>
            {like ? (
              <div onClick={handleLikes} className={styles.likeContainer}>
                <img height="25px" src={LikedIcon} alt="like-icon" />
                <p>1.3M</p>
              </div>
            ) : (
              <div onClick={handleLikes} className={styles.likeContainer}>
                <img height="25px" src={LikeIcon} alt="like-icon" />
                <p>1.3M</p>
              </div>
            )}

            <div className={styles.commentContainer}>
              <img height="25px" src={CommentIcon} alt="PIC" />
              <p>110K</p>
            </div>
            <div className={styles.shareContainer}>
              <img height="25px" src={ShareIcon} alt="share-icon" />
              <p>290K</p>
            </div>
          </div>
        </footer>

        <hr
          style={{ height: "4px", border: "none", backgroundColor: "#cac7c7" }}
        />
      </div>
      {/* Post 2 - (Papa) */}
      <div className={styles.postCard}>
        <header>
          <div>
            <img
              style={{ height: "50px", borderRadius: "50%" }}
              src={ShowerBoy}
              alt="mine-pic"
            />
            <p>Papa</p>
          </div>

          <svg
            fill="none"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
              fill="#4A5568"
            />
            <path
              d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
              fill="#4A5568"
            />
            <path
              d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
              fill="#4A5568"
            />
          </svg>
        </header>
        <main>
          <p>
            Finally wrapped up my first week of the summer internship at
            TechNova! 🚀 Learned so much about agile workflows and even got to
            debug my first live issue. Big thanks to the team for the warm
            welcome. Who else is jumping into something new this season? 🙌💼{" "}
            <br /> <strong>#FirstWeek #InternLife</strong>
          </p>
        </main>

        <footer>
          <div className={styles.upperFooter}>
            <div id="icons">
              <img src={LoveEmoji} alt="love-emoji" />
              <img src={HeartEmoji} alt="heart-emoji" />
              <img src={LikeEmoji} alt="like-emoji" />
            </div>
            {papaLike ? (
              <p>You and 911K others</p>
            ) : (
              <p>Tom Niky and 911K others</p>
            )}
          </div>

          {/* bottom */}
          <div className={styles.bottomFooter}>
            {papaLike ? (
              <div onClick={handlePapaLikes} className={styles.likeContainer}>
                <img height="25px" src={LikedIcon} alt="like-icon" />
                <p>812K</p>
              </div>
            ) : (
              <div onClick={handlePapaLikes} className={styles.likeContainer}>
                <img height="25px" src={LikeIcon} alt="like-icon" />
                <p>812K</p>
              </div>
            )}

            <div className={styles.commentContainer}>
              <img height="25px" src={CommentIcon} alt="PIC" />
              <p>22K</p>
            </div>
            <div className={styles.shareContainer}>
              <img height="25px" src={ShareIcon} alt="share-icon" />
              <p>133K</p>
            </div>
          </div>
        </footer>

        <hr
          style={{ height: "4px", border: "none", backgroundColor: "#cac7c7" }}
        />
      </div>
      {/* Post 3 - (Alien Guy) */}
      <div className={styles.postCard}>
        <header>
          <div>
            <img src={UglyPP} alt="mine-pic" />
            <p>Alien Guy</p>
          </div>

          <svg
            fill="none"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
              fill="#4A5568"
            />
            <path
              d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
              fill="#4A5568"
            />
            <path
              d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
              fill="#4A5568"
            />
          </svg>
        </header>
        <main>
          <p>
            <strong>@CampusCMO</strong>: “Shoutout to @SaraLopez, our rising
            marketing star 🚀—she just led a campus-wide campaign that boosted
            club event attendance by 40%! Her knack for storytelling and
            data-driven strategy is pure 🔥. Can’t wait to see where her
            marketing major takes her next! 💼📈 #MarketingMajor #FutureCMO
            #CampusSuccess”
          </p>
        </main>

        <footer>
          <div className={styles.upperFooter}>
            <div id="icons">
              <img src={LoveEmoji} alt="love-emoji" />
              <img src={HeartEmoji} alt="heart-emoji" />
              <img src={LikeEmoji} alt="like-emoji" />
            </div>
            {alienLike ? (
              <p>You and 13K others</p>
            ) : (
              <p>Mary Kim and 13K others</p>
            )}
          </div>

          {/* bottom */}
          <div className={styles.bottomFooter}>
            {alienLike ? (
              <div onClick={handleAlienLikes} className={styles.likeContainer}>
                <img height="25px" src={LikedIcon} alt="like-icon" />
                <p>9K</p>
              </div>
            ) : (
              <div onClick={handleAlienLikes} className={styles.likeContainer}>
                <img height="25px" src={LikeIcon} alt="like-icon" />
                <p>9K</p>
              </div>
            )}

            <div className={styles.commentContainer}>
              <img height="25px" src={CommentIcon} alt="PIC" />
              <p>920</p>
            </div>
            <div className={styles.shareContainer}>
              <img height="25px" src={ShareIcon} alt="share-icon" />
              <p>1K</p>
            </div>
          </div>
        </footer>

        <hr
          style={{ height: "4px", border: "none", backgroundColor: "#cac7c7" }}
        />
      </div>

      {/* Post 4 - (ادم الجوهري) Programming Tip (Well-Formatted) */}
      <div className={styles.postCard}>
        <header>
          <div>
            <img src={ManPP} alt="mine-pic" />
            <p>آدم الجوهري</p>
          </div>

          <svg
            fill="none"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z"
              fill="#4A5568"
            />
            <path
              d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z"
              fill="#4A5568"
            />
            <path
              d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z"
              fill="#4A5568"
            />
          </svg>
        </header>
        <main>
          <p>
            <strong>@AdamElGohary</strong>: 🧠💡
            <strong>عارف إنك ممكن تتعامل مع الكمبيوتر كأنه طفل صغير؟</strong>
            <br />
            البرمجة ببساطة هي إنك بتقوله يعمل خطوات بالترتيب...
            <br />
            زي ما تقول لطفل: "افتح الباب، امشي خطوتين، اقفل النور" 👶💻
            <br />
            <br />
            بس بدل ما تقول بصوتك، بتكتب أوامر بلغة هو بيفهمها 👨‍💻 (زي Python أو
            Java مثلاً).
            <br />
            <br />✅{" "}
            <strong>لو فهمت كده... يبقى بدأت فعليًا تفهم يعني إيه كود!</strong>
            <br />
            #برمجة_ببساطة #معلومة_سريعة #تعلم_البرمجة
          </p>
        </main>

        <footer>
          <div className={styles.upperFooter}>
            <div id="icons">
              <img src={LoveEmoji} alt="love-emoji" />
              <img src={HeartEmoji} alt="heart-emoji" />
              <img src={LikeEmoji} alt="like-emoji" />
            </div>
            {adamLike ? (
              <p>You and 9K others</p>
            ) : (
              <p>Salma Gad and 9K others</p>
            )}
          </div>

          <div className={styles.bottomFooter}>
            {adamLike ? (
              <div onClick={handleAdamLikes} className={styles.likeContainer}>
                <img height="25px" src={LikedIcon} alt="like-icon" />
                <p>7.2K</p>
              </div>
            ) : (
              <div onClick={handleAdamLikes} className={styles.likeContainer}>
                <img height="25px" src={LikeIcon} alt="like-icon" />
                <p>7.2K</p>
              </div>
            )}

            <div className={styles.commentContainer}>
              <img height="25px" src={CommentIcon} alt="comment-icon" />
              <p>650</p>
            </div>
            <div className={styles.shareContainer}>
              <img height="25px" src={ShareIcon} alt="share-icon" />
              <p>810</p>
            </div>
          </div>
        </footer>

        <hr
          style={{ height: "4px", border: "none", backgroundColor: "#cac7c7" }}
        />
      </div>
    </section>
  );
}

function WelcomeHomePage() {
  // https://website/homePage
  const [msgFromLocalStorage, setMsgFromLocalStorage] = useState(
    localStorage.getItem("postMessage")
  );
  const [userNamefromLocalStorage, setUserNamefromLocalStorage] = useState(
    localStorage.getItem("userName")
  );

  setInterval(() => {
    setMsgFromLocalStorage(localStorage.getItem("postMessage"));
    setUserNamefromLocalStorage(localStorage.getItem("userName"));
  }, 1000);

  return (
    <div>
      <Header1 homePageColor="blue"/>
      <Header2 />
      <Stories />
      <Posts
        newUserName={userNamefromLocalStorage}
        newText={msgFromLocalStorage}
      />
    </div>
  );
}

export default WelcomeHomePage;
export { Header1, Header2 };
