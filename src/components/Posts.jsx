import styles from "../css/Posts.module.css";
import ThreeDotsIcon from "../assets/icons/three-dots-svgrepo-com.svg";
import MarkZuckerBerg from "../assets/images/mark-zuckerberg-story.avif";
import LoveReact from "../assets/icons/love.png";
import HeartReact from "../assets/icons/heart.png";
import LikeReact from "../assets/icons/like.png";
import VerifiedIcon from "../assets/icons/verified-icon.jpg";
import LikeIcon from "../assets/icons/like-svgrepo-com.svg";
import CommentIcon from "../assets/icons/instagram-comment-icon.svg";
import ShareIcon from "../assets/icons/share-svgrepo-com.svg";
import AdelImamPhoto from "../assets/images/adel-emam-story.jpg";
import NancyAjramPhoto from "../assets/images/nancy-ajram-story.jpeg";
import WillSmith from "../assets/images/willsmith-story.jpeg";

function Posts() {
  return (
    <div className={styles.PostsContainer}>
      {/* Post 1*/}
      <div className={styles.post}>
        <header>
          <img
            style={{ height: "40px", borderRadius: "50%" }}
            src={MarkZuckerBerg}
            alt="mark-pp"
          />
          <p>
            Mark ZuckerBerg
            <img height="20px" src={VerifiedIcon} alt="verified-img" />{" "}
          </p>
          <img height="20px" src={ThreeDotsIcon} alt="three-dots-svg" />
        </header>
        <main>
          <p style={{ fontWeight: "500", textAlign: "left", padding: "5px 0" }}>
            I have changed my photo thanks Omar Tegar for you coding 😘
          </p>
          <img
            width="100%"
            height="100%"
            src={MarkZuckerBerg}
            alt="mark-photo"
          />
        </main>
        <footer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img height="17px" src={LoveReact} alt="love" />
            <img height="17px" src={HeartReact} alt="heart" />
            <img height="17px" src={LikeReact} alt="like" />
            <p style={{ marginLeft: "3px" }}> Omar Tegar and 471K likes</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: "2px 10px",
              gap: "2%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={LikeIcon} alt="like-svg" />
              <p>452K</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={CommentIcon} alt="comment-svg" />
              <p>81K</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={ShareIcon} alt="share-svg" />
              <p>13K</p>
            </div>
          </div>
        </footer>
      </div>
      <hr style={{ height: "2px", backgroundColor: "#c6c2c2" }} />

      {/* Post 2 */}
      <div className={styles.post}>
        <header>
          <img
            style={{ width: "90%", height: "40px", borderRadius: "50%" }}
            src={AdelImamPhoto}
            alt="mark-pp"
          />
          <p>
            الفنان عادل امام
            <img height="20px" src={VerifiedIcon} alt="verified-img" />{" "}
          </p>
          <img height="20px" src={ThreeDotsIcon} alt="three-dots-svg" />
        </header>
        <main>
          <p
            style={{ fontWeight: "500", textAlign: "right", padding: "5px 0" }}
          >
            مساء الفل على كل أحلى جمهور في الدنيا! 😊 حبيت أشارككم على صفحتي
            الشخصية خبر حلو قوي: بتشتغل معايا شركة نتفليكس على مسلسل جديد بعنوان
            «زعيم الحارة»! 🎬🔥 المسلسل من تأليفي مع صديقي مدحت العدل ومن إخراج
            شريف عرفة، وإن شاء الله بنبدأ التصوير الصيف الجاي في شوارع القاهرة
            القديمة. في المسلسل هألعب دور “سِكّر الدسوقي” زعيم الحارة اللي قلبه
            طيب رغم تهوره، وصراحة مستنيكم تشوفوني لأول مرة بغني وأرقص في مشهد
            واحد! 💃🕺 منتظر تعليقاتكم وحماسكم، وإياكم تنسوا المتابعة على
            نتفليكس. #زعيم_الحارة #عادل_إمام #Netflix #الكوميديا_البلدي
          </p>
        </main>
        <footer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img height="17px" src={LoveReact} alt="love" />
            <img height="17px" src={HeartReact} alt="heart" />
            <img height="17px" src={LikeReact} alt="like" />
            <p style={{ marginLeft: "3px" }}> Elham Shaheen and 788K likes</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: "2px 10px",
              gap: "2%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={LikeIcon} alt="like-svg" />
              <p>801K</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={CommentIcon} alt="comment-svg" />
              <p>112K</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={ShareIcon} alt="share-svg" />
              <p>235K</p>
            </div>
          </div>
        </footer>
      </div>
      <hr style={{ height: "2px", backgroundColor: "#c6c2c2" }} />

      {/* Post 3 */}
      <div className={styles.post}>
        <header>
          <img
            style={{ width: "85%", height: "40px", borderRadius: "50%" }}
            src={NancyAjramPhoto}
            alt="mark-pp"
          />
          <p>
            Nancy Ajram
            <img height="20px" src={VerifiedIcon} alt="verified-img" />{" "}
          </p>
          <img height="20px" src={ThreeDotsIcon} alt="three-dots-svg" />
        </header>
        <main>
          <p
            style={{ fontWeight: "500", textAlign: "right", padding: "5px 0" }}
          >
            مساء البسمة على أحلى ناس! 😄 حابّة أقولكم على صفحتي إني هفتح أول
            “تاكسي غنائي” في القاهرة: كل سواقة هتكون على نغمات أغنياتي وأنتوا
            تختاروا اللايف بلايليست! 🚕🎶 استنوا إعلان الأسعار والمسارات،
            ومتنسوش تحجزوا من دلوقتي علشان نغنّي مع بعض في الطريق! 😉❤️
            #نانسي_عجرم #تاكسي_غنائي #ضحك_وغنا
          </p>
        </main>
        <footer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img height="17px" src={LoveReact} alt="love" />
            <img height="17px" src={HeartReact} alt="heart" />
            <img height="17px" src={LikeReact} alt="like" />
            <p style={{ marginLeft: "3px" }}> Tamer Hosny and 1.5M likes</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: "2px 10px",
              gap: "2%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={LikeIcon} alt="like-svg" />
              <p>1.8M</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={CommentIcon} alt="comment-svg" />
              <p>411K</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={ShareIcon} alt="share-svg" />
              <p>121K</p>
            </div>
          </div>
        </footer>
      </div>
      <hr style={{ height: "2px", backgroundColor: "#c6c2c2" }} />

      {/* Post 4 */}
      <div className={styles.post}>
        <header>
          <img
            style={{ width: "85%", height: "40px", borderRadius: "50%" }}
            src={WillSmith}
            alt="willsmith-pp"
          />
          <p>
            Will Smith
            <img height="20px" src={VerifiedIcon} alt="verified-img" />{" "}
          </p>
          <img height="20px" src={ThreeDotsIcon} alt="three-dots-svg" />
        </header>
        <main>
          <p style={{ fontWeight: "500", textAlign: "left", padding: "5px 0" }}>
            Hey, it’s Will Smith here—shoutout to Omar Tegar, the dev who turns
            a Blue Screen of Death into fine art. 🎨💥 He debugs at light speed
            on Red Bull and curry, fixes your bugs, rewrites your whole app…and
            still sends you a meme. 😂👨‍💻 #FreshPrinceOfCode #BugBuster{" "}
          </p>
        </main>
        <footer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img height="17px" src={LoveReact} alt="love" />
            <img height="17px" src={HeartReact} alt="heart" />
            <img height="17px" src={LikeReact} alt="like" />
            <p style={{ marginLeft: "3px" }}> Mike and 471K likes</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: "2px 10px",
              gap: "2%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={LikeIcon} alt="like-svg" />
              <p>988K</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={CommentIcon} alt="comment-svg" />
              <p>111K</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px",
                backgroundColor: "#f3e8ea",
                borderRadius: "20px",
              }}
            >
              <img height="20px" src={ShareIcon} alt="share-svg" />
              <p>53K</p>
            </div>
          </div>
        </footer>
      </div>
      <hr style={{ height: "2px", backgroundColor: "#c6c2c2" }} />
    </div>
  );
}

export default Posts;
