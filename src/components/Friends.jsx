import { Header1 } from "./WelcomeHomePage";
import styles from "../css/Friends.module.css";
import BoyPic from "../assets/pp-images/boy-pp.jpg";
import MarkZuckerberg from "../assets/pp-images/markzuckerberg-pp.jpg";
import VerifiedIcon from "../assets/icons/verified-icon.svg";
import WillSmith from "../assets/pp-images/willsmith-pp.jpg";
import AdelImam from "../assets/pp-images/adelimam-pp.jpg";
import KhaledElnabawy from "../assets/pp-images/khalednabawy-pp.jpg";
import AmrDiab from "../assets/pp-images/amrdiab-pp.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function FriendsHeader() {
  return (
    <>
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "92% 8%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "4%" }}>
          <Link style={{ height: "25px" }} to="/homePage">
            <svg
              height="25px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </Link>
          <h2>Friends</h2>
        </div>
        <div id="searchIcon">
          <svg
            style={{
              backgroundColor: "#e3e3e3",
              padding: "6px 3px",
              borderRadius: "50%",
            }}
            height="22px"
            width="auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
      </header>

      <div className={styles.Buttons}>
        <button>Suggestions</button>
        <button>Your friends</button>
      </div>

      <div
        style={{
          display: "flex",
          paddingTop: "8%",
          justifyContent: "space-between",
        }}
      >
        <h4>Friend requests (495) </h4>
        <a href="http://blank">See all</a>
      </div>
    </>
  );
}

function RequestsList() {
  const [confirmMarkzuckerberg, setConfirmMarkzuckerberg] = useState(false);
  const [deleteMarkzuckerberg, setDeleteMarkZuckerberg] = useState(false);
  const [confirmBenBoy , setConfirmBenBoy] = useState(false);
  const [deleteBenBoy, setDeleteBenBoy] = useState(false);
  const [confirmWillSmith , setConfirmWillSmith] = useState(false);
  const [deleteWillSmith , setDeleteWillSmith] = useState(false);
  const [confirmAdelEmam , setConfirmAdelEmam] = useState(false);
  const [deleteAdelEmam , setDeleteAdelEmam] = useState(false);
  const [confirmKhaledNbwy , setConfirmKhaledNbwy] = useState(false);
  const [deleteKhaledNbwy , setDeleteKhaledNbwy] = useState(false);
  const [confirmAmrDiab , setConfirmAmrDiab] = useState(false);
  const [deleteAmrDiab , setDeleteAmrDiab] = useState(false);
  




  return (
    <div className={styles.RequestList}>
      <ul>
        {/* MarkZuckerBerg*/}
        <li>
          <img
            className={styles.ProfileIMG}
            src={MarkZuckerberg}
            alt="friend_pic"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: " 90% 10%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Mark Zuckerberg </p>
                <img
                  style={{ height: "26px", width: "26px", borderRadius: "50%" }}
                  src={VerifiedIcon}
                  alt="verified-icon"
                />
              </div>
              <p style={{ fontSize: "0.8rem", color: "gray" }}>45w</p>
            </div>
            <div style={{ display: "flex", gap: "4%" }}>
              {confirmMarkzuckerberg ? (
                <p>Confirmed 😘</p>
              ) : deleteMarkzuckerberg ? (
                <p>Deleted 😑</p>
              ) : (
                <>
                  <button
                    onClick={() => setConfirmMarkzuckerberg(true)}
                    className={styles.confirmButton}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setDeleteMarkZuckerberg(true)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </li>

        {/* Ben Boy*/}
        <li>
          <img className={styles.ProfileIMG} src={BoyPic} alt="friend_pic" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: " 90% 10%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Ben Boy</p>
              </div>
              <p style={{ fontSize: "0.8rem", color: "gray" }}>45w</p>
            </div>
            <div style={{ display: "flex", gap: "4%" }}>
              {confirmBenBoy ? (
                <p>Confirmed 😘</p>
              ) : deleteBenBoy ? (
                <p>Deleted 😑</p>
              ) : (
                <>
                  <button
                    onClick={() => setConfirmBenBoy(true)}
                    className={styles.confirmButton}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setDeleteBenBoy(true)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </li>

        {/* Will Smith */}
        <li>
          <img className={styles.ProfileIMG} src={WillSmith} alt="friend_pic" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: " 90% 10%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Will Smith</p>
                <img
                  style={{ height: "26px", width: "26px", borderRadius: "50%" }}
                  src={VerifiedIcon}
                  alt="verified-icon"
                />
              </div>
              <p style={{ fontSize: "0.8rem", color: "gray" }}>45w</p>
            </div>
            <div style={{ display: "flex", gap: "4%" }}>
              {confirmWillSmith ? (
                <p>Confirmed 😘</p>
              ) : deleteWillSmith ? (
                <p>Deleted 😑</p>
              ) : (
                <>
                  <button
                    onClick={() => setConfirmWillSmith(true)}
                    className={styles.confirmButton}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setDeleteWillSmith(true)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </li>

        {/* Adel Emam - عادل امام*/}
        <li>
          <img className={styles.ProfileIMG} src={AdelImam} alt="friend_pic" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: " 90% 10%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Adel Emam - عادل إمام</p>
                <img
                  style={{ height: "26px", width: "26px", borderRadius: "50%" }}
                  src={VerifiedIcon}
                  alt="verified-icon"
                />
              </div>
              <p style={{ fontSize: "0.8rem", color: "gray" }}>45w</p>
            </div>
            <div style={{ display: "flex", gap: "4%" }}>
              {confirmAdelEmam ? (
                <p>Confirmed 😘</p>
              ) : deleteAdelEmam ? (
                <p>Deleted 😑</p>
              ) : (
                <>
                  <button
                    onClick={() => setConfirmAdelEmam(true)}
                    className={styles.confirmButton}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setDeleteAdelEmam(true)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </li>

        {/* Khaled Elnabawy - خالد النبوي*/}
        <li>
          <img
            className={styles.ProfileIMG}
            src={KhaledElnabawy}
            alt="friend_pic"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: " 75% 10%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                <p>Khaled Elnabawy - خالد النبوى </p>
                <img
                  style={{
                    position: "absolute",
                    top: "1%",
                    right: "-5%",
                    height: "26px",
                    width: "26px",
                    borderRadius: "50%",
                  }}
                  src={VerifiedIcon}
                  alt="verified-icon"
                />
              </div>
              <p style={{ fontSize: "0.8rem", color: "gray" }}>45w</p>
            </div>
            <div style={{ display: "flex", gap: "4%" }}>
              {confirmKhaledNbwy ? (
                <p>Confirmed 😘</p>
              ) : deleteKhaledNbwy ? (
                <p>Deleted 😑</p>
              ) : (
                <>
                  <button
                    onClick={() => setConfirmKhaledNbwy(true)}
                    className={styles.confirmButton}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setDeleteKhaledNbwy(true)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </li>

        {/* Amr Diab */}
        <li>
          <img className={styles.ProfileIMG} src={AmrDiab} alt="friend_pic" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: " 90% 10%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Amr Diab</p>
                <img
                  style={{ height: "26px", width: "26px", borderRadius: "50%" }}
                  src={VerifiedIcon}
                  alt="verified-icon"
                />
              </div>
              <p style={{ fontSize: "0.8rem", color: "gray" }}>45w</p>
            </div>
            <div style={{ display: "flex", gap: "4%" }}>
              {confirmAmrDiab ? (
                <p>Confirmed 😘</p>
              ) : deleteAmrDiab ? (
                <p>Deleted 😑</p>
              ) : (
                <>
                  <button
                    onClick={() => setConfirmAmrDiab(true)}
                    className={styles.confirmButton}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setDeleteAmrDiab(true)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

function Friends() {
  return (
    <>
      <Header1 />
      <div style={{ padding: "2% 3%" }}>
        <FriendsHeader />
        <RequestsList />
      </div>
    </>
  );
}

export default Friends;
