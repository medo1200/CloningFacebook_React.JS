import { Header1 } from "./WelcomeHomePage";
import GoBackIcon from "../assets/icons/gback-icon.svg";
import { Link } from "react-router-dom";
import ForyouIcon from "../assets/icons/foryou-icon.svg";
import ReelIcon from "../assets/icons/video-reel.svg";
import FollowingIcon from "../assets/icons/following-iconsvg.svg";
import SavedIcon from "../assets/icons/saved-icon.svg";

function ReelsHeader() {
  return (
    <>
      <header
        id="UpperHeader"
        style={{
          padding: "2% 2%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "2%", alignItems: "center" }}>
          <Link style={{ height: "30px" }} to="/homePage">
            {" "}
            <img style={{ height: "30px" }} src={GoBackIcon} alt="goback" />
          </Link>
          <h2>Videos</h2>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            id="Person-Icon"
            style={{
              backgroundColor: "#e3dede",
              height: "38px",
              width: "38px",
              borderRadius: "50%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 208 190"
            >
              <image
                x="52"
                y="30"
                width="105"
                height="118"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAB2CAYAAADLAr10AAACR0lEQVR4nO3c0U7rMBQF0ZT//2eQEIY2bZrYdew9Zdb7LekZOVcI25eF67PhyZHfl/bQLWG2YL475UF7xlmLn0H6A54ZZy12FsmRRgYqIueR+FAz4qxFzSUtUkKgImY2SZGSAhUR80mJlBiomD6jhEjJgYqpc5odiRComDarmZFIgYop8/qY8UNVZ9ZKIq6iYvjMXEkARgKY8bojv+qKoXNzJQGMXknvsIqKYbNzJQEYCcBIAEZqN+z/VyMBGAnASABGAjASgJEAjARgJAAjARgJwEgARgIwEoCRAIzUzj+f64+RAIwE4ObINm6O1C1PVdTzVIXuedKvjif99JgHm4/7lwebC68I2OHrbp+XbfxIXU1eW7OSFsoLoDakhPIqtR2zQ8XNxJsjb3lzZKMRsaLn4G3G3mZ8ih7BUN+bfMP+UhmM/l0lSZIkjXHm7w7vdLfdUafMs/eH/scwW7rNttcHGWfbyzN+9QOMc1zzrFv/oXHaVc+8JZKBXlc199pIBurn8OxrIhmov0PzPxrJQOfZbXAkkoHO97TDXiQDjbPZ4lkkA433sMdWJAPNc9fEUxUAj1aSq2i+my7rSAbK8dvG1x2AkQCuX3e+6vJ893ElAZSV5CrKdXElARgJ4OKrLp8rCcBIAEYCMBKAkQCMBGAkACMBGAnASABGAjASgJEAjARgJAAjAbjHIZ97HAjcd5fNfXcUbtjP5YZ9Es8nZXp6Pqkw1Dx3TTzYnKXqYHNhqHGargi4ZqzzdLkR5Zqx+jk2+2VZvgDHsTmnydNH+wAAAABJRU5ErkJggg=="
              />
            </svg>
          </div>
          <div
            id="Search-Icon"
            style={{
              backgroundColor: "#e3dede",
              height: "38px",
              width: "38px",
              borderRadius: "50%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 43 39"
            >
              <image
                x="8"
                y="7"
                width="25"
                height="25"
                href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAt0lEQVRIib2VSQ6AMAhFqXfw/qfxQu6MqZouagwp8GnAn3RhGV4HoYV03YrVijUdteRu2MjBA4BA3CgBED8R9DW4AoWYoX+fnAHAoMWzIkHmUTbIxgweAKQlIIe5sAZZA2Ei5MwEdMhORFc2pGRcNofUPyDHZL/6So3vO6jsD/PszCxkrXchIKgdzXZX63iL+AEmQPXmjngZNRUNgsK0p+L1iawPERRdhENQRqVzUFpfbKA2KhHRAzPOJNeebPTEAAAAAElFTkSuQmCC"
              />
            </svg>
          </div>
        </div>
      </header>

      <header
        id="BottomHeader"
        style={{
          display: "flex",
          padding: "15px 2%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ color: "gray" }}>Play videos automatically</p>
        <input
          type="range"
          style={{ width: "30px", scale: "1.5", marginRight: "10px" }}
          min="0"
          max="1"
        />
      </header>

      <hr style={{ height: "2px", backgroundColor: "#bab8b8" }} />

      <div
        style={{
          display: "flex",
          padding: "15px 10px",
          overflowX: "scroll",
          gap: "5%",
          alignItems: "center",
        }}
      >
        <div
          id="For-you"
          style={{
            display: "flex",
            padding: "8px 12px",
            gap: "5%",
            borderRadius: "20px",
            backgroundColor: "#9ac2f251",
            minWidth: "fit-content",
            alignItems: "center",
          }}
        >
          <img height="20px" src={ForyouIcon} alt="foryou" />

          <p style={{ textWrap: "nowrap", fontWeight: "500", color: "blue" }}>
            For you
          </p>
        </div>
        <div
          id="Reels"
          style={{
            display: "flex",
            padding: "8px 12px",
            gap: "5%",
            justifyContent: "space-between",
            borderRadius: "20px",
            minWidth: "fit-content",
            alignItems: "center",
          }}
        >
          <img height="20px" src={ReelIcon} alt="reel-icon" />
          <p style={{ textWrap: "nowrap", fontWeight: "500" }}>Reels</p>
        </div>
        <div
          id="Following"
          style={{
            display: "flex",
            padding: "8px 12px",
            gap: "5%",
            justifyContent: "space-between",
            borderRadius: "20px",
            minWidth: "fit-content",
            alignItems: "center",
          }}
        >
          <img height="20px" src={FollowingIcon} alt="following-icon" />
          <p style={{ textWrap: "nowrap", fontWeight: "500" }}>Following</p>
        </div>
        <div
          id="Saved "
          style={{
            display: "flex",
            padding: "8px 12px",
            gap: "5%",
            justifyContent: "space-between",
            borderRadius: "20px",
            minWidth: "fit-content",
            alignItems: "center",
          }}
        >
          <img height="18px" src={SavedIcon} alt="following-icon" />
          <p style={{ textWrap: "nowrap", fontWeight: "500" }}>Saved</p>
        </div>
      </div>
      <hr />
    </>
  );
}

function VideoPosts() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>No reels yet</h2>

      <div id="post">
        <header></header>
        <main></main>
        <footer></footer>
      </div>

      <div id="post">
        <header></header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}

function Reels() {
  return (
    <div>
      <Header1 />
      <ReelsHeader />

      <VideoPosts />
    </div>
  );
}

export default Reels;
