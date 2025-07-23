import { Header1 } from "./WelcomeHomePage";
import GoBackIcon from "../assets/icons/gback-icon.svg";
import { Link } from "react-router-dom";
import styles from "../css/MarketPlace.module.css";
import Iphone13 from "../assets/marketplace-images/iphone13pro.jpeg";
import JeepWrangler from "../assets/marketplace-images/jeep-wrangler.jpeg";
import Dress from "../assets/marketplace-images/dress.avif";
import Pug from "../assets/marketplace-images/pugavif.avif";

function MarketHeader() {
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
          <h2>Marketplace</h2>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
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

      <header id="BottomHeader" className={styles.BottomHeader}>
        <div
          id="Person-Icon"
          style={{
            backgroundColor: "#e3dede",
            height: "25px",
            width: "25px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
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
        <div>Inbox</div>
        <div>Sell</div>
        <div>Categories</div>
        <div>Search</div>
      </header>

      {/* thin line after header */}
      <hr
        style={{
          height: "0.5px",
          width: "95%",
          margin: "auto",
          backgroundColor: "#bab8b8",
        }}
      />
    </>
  );
}

function Products() {
  return (
    <>
      <header className={styles.productsHeader}>
        <h4>Today's picks</h4>
        <div id="destination" className={styles.productsDestination}>
          <p>Egypt</p>
          <p>5 km</p>
        </div>
      </header>

      <section className={styles.ProductsSection}>
        <div id="Product">
          <img src={Iphone13} alt="apple" />
          <strong>$499</strong>
          <p>Iphone 13 pro max</p>
        </div>
        <div id="Product">
          <img src={JeepWrangler} alt="jeep" />
          <strong>$35,095</strong>
          <p>Jeep Wrangler for Sale</p>
        </div>
        <div id="Product">
          <img src={Dress} alt="dress" />
          <strong>$30</strong>
          <p>Tie-belt shirt dress</p>
        </div>
        <div id="Product">
          <img src={Pug} alt="pug" />
          <strong>$800</strong>
          <p>Pure Pug puppy</p>
        </div>
      </section>
      <br />
    </>
  );
}

function MarketPlace() {
  return (
    <>
      <Header1 />
      <MarketHeader />
      <Products />
    </>
  );
}

export default MarketPlace;
