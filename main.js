const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(express.json());

// セッション（＝CookieにセッションIDを入れる仕組み）
app.use(
  session({
    name: "sid", // Cookie名（デフォルトは connect.sid）
    secret: "dev-secret-change-me",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,     // JSから読めない（XSS対策）
      secure: false,      // HTTPSなら true（開発HTTPでは false）
      sameSite: "lax",    // CSRF対策
      maxAge: 1000 * 60 * 30, // 30分
    },
  })
);

// ログイン（例）：ログイン済み情報をセッションに保存
app.post("/api/login", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: "username is required" });

  req.session.user = { username };
  res.json({ message: "logged in", user: req.session.user });
});

// 認証チェック
function requireLogin(req, res, next) {
  if (req.session && req.session.user) return next();
  return res.status(401).json({ message: "login required" });
}

// 認証が必要なAPI
app.get("/api/me", requireLogin, (req, res) => {
  res.json({ message: "ok", user: req.session.user });
});

// ログアウト（セッション破棄）
app.post("/api/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: "logout failed" });
    res.json({ message: "logged out" });
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
