// each account has id, profile info, posts, comments, likes…
const accounts = [
  {
    // 0 is not an account
    id: 0,
    username: "test",
    password: "test",
    profile: {
      name: "test",
      age: "text",
      avatarPicture: "test",
    },
    textAboveCount: "test",
    likesCount: "test",
    commentsCounts: "test",
    shareCounts: "test",
  },
  {
    id: 1,
    username: "omartegar",
    password: "password",
    profile: {
      name: "Mr.Tegar New",
      age: 30,
      avatarPicture: "./",
    },
    postContent: (
      <>
        👋 Hey there! I’m Omar Tegar Welcome to my Facebook-style feed! Here’s a
        quick snapshot of what I built—and what I can do for you: <br /> <br />
        🖥️ Front-End • HTML5 & CSS3 for clean, responsive layouts • JavaScript &
        React.js for dynamic, component-driven UIs <br /> <br />
        ⚙️ Back-End • Node.js runtime with • Express.js framework for fast,
        scalable APIs <br /> <br />
        🔧 Skills at a glance • Building full-stack web apps from scratch •
        Designing intuitive user interfaces • Crafting RESTful services and
        handling real-time data <br /> <br />
        Feel free to explore, poke around the code, and drop me a message if
        you’d like to collaborate. Let’s build something awesome together! 🚀
      </>
    ),
    textAboveCount: "Admin and 1.6M others",
    likesCount: "1.3M",
    commentCounts: "110K",
    shareCounts: "290K",
  },
  {
    id: 2,
    username: "omartegar",
    password: "password",
    profile: {
      name: "Mr.Tegar New",
      age: 30,
      avatarPicture: "./",
    },
    postContent: (
      <>
        👋 Hey there! I’m Omar Tegar Welcome to my Facebook-style feed! Here’s a
        quick snapshot of what I built—and what I can do for you: <br /> <br />
        🖥️ Front-End • HTML5 & CSS3 for clean, responsive layouts • JavaScript &
        React.js for dynamic, component-driven UIs <br /> <br />
        ⚙️ Back-End • Node.js runtime with • Express.js framework for fast,
        scalable APIs <br /> <br />
        🔧 Skills at a glance • Building full-stack web apps from scratch •
        Designing intuitive user interfaces • Crafting RESTful services and
        handling real-time data <br /> <br />
        Feel free to explore, poke around the code, and drop me a message if
        you’d like to collaborate. Let’s build something awesome together! 🚀
      </>
    ),
    textAboveCount: "Admin and 1.6M others",
    likesCount: "1.3M",
    commentCounts: "110K",
    shareCounts: "290K",
  },
];

export default accounts;
