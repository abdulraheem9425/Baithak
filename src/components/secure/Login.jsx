import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (data.success) {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <motion.div
      className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-zinc-900 to-black text-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.form
        onSubmit={handleLogin}
        className="bg-zinc-800/60 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-6 border border-yellow-400/30"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
      >
        <motion.h2
          className="text-3xl font-extrabold text-center text-yellow-400 drop-shadow-md"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Admin Login
        </motion.h2>

        <AnimatePresence>
          {error && (
            <motion.p
              className="text-red-500 text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-900 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-600 hover:from-yellow-500 hover:to-red-600 text-black font-semibold text-lg shadow-lg transition-transform"
        >
          Sign In
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Login;
