// import express from "express";
// import cors from "cors";

// const app = express();
// const PORT = 3001;

// // یک آرایه ساده برای ذخیره کاربران
// const users = [];

// app.use(
//   cors({
//     origin: "http://localhost:5173", // آدرس فرانت
//     credentials: true,
//   })
// );

// app.use(express.json());

// // ثبت‌نام
// app.post("/api/register", (req, res) => {
//   const { name, email, password } = req.body;

//   // چک کن اگه ایمیل قبلاً ثبت شده باشه
//   const existingUser = users.find((user) => user.email === email);
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   const newUser = { name, email, password };
//   users.push(newUser);

//   console.log("Registered new user:", newUser);

//   res.status(201).json({ message: "User registered successfully" });
// });

// // ورود
// app.post("/api/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   if (user) {
//     // یه توکن فیک برای تست برگردونیم
//     res.json({ refreshToken: "fake-refresh-token-123" });
//   } else {
//     res.status(401).json({ message: "Invalid email or password" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import jwt from "jsonwebtoken";

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(
//   cors({
//     origin: "http://localhost:5173", // allow only your React app
//     credentials: true, // allow cookies and credentials
//   })
// );
// app.use(bodyParser.json());

// // Fake user database
// const users = [];

// // Register route
// app.post("/api/register", (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "email and password required" });
//   }

//   const userExists = users.find((u) => u.email === email);
//   if (userExists) {
//     return res.status(409).json({ message: "email already exists" });
//   }

//   users.push({ email, password }); // (Don't do this in real apps! Hash passwords!)
//   res.status(201).json({ message: "User registered successfully" });
// });

// // Login route
// app.post("/api/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find((u) => u.email === email && u.password === password);

//   if (!user) {
//     return res.status(401).json({ message: "Invalid email or password" });
//   }

//   res.status(200).json({ message: "Login successful!" });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

const SECRET_KEY = "yourSecretKey";

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  // In a real app, you'd save the user to the database here.

  // Create a refresh token (fake user ID = 1 here for demo)
  const refreshToken = jwt.sign({ id: 1, email }, SECRET_KEY, {
    expiresIn: "7d", // valid for 7 days
  });

  res.json({ refreshToken });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // In a real app, you'd check the user credentials here.

  const refreshToken = jwt.sign({ id: 1, email }, SECRET_KEY, {
    expiresIn: "7d",
  });

  res.json({ refreshToken });
});

app.listen(5173, () => console.log("Server running on port 5173"));
