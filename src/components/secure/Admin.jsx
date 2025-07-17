import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut } from "lucide-react";

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/login");
    } else {
      fetchSubmissions();
      fetchSubscribers();
    }
  }, [navigate]);

  const fetchSubmissions = () => {
    fetch("http://localhost:5000/get-submissions")
      .then(res => res.json())
      .then(setSubmissions)
      .catch(console.error);
  };

  const fetchSubscribers = () => {
    fetch("http://localhost:5000/get-newsletters")
      .then(res => res.json())
      .then(setSubscribers)
      .catch(console.error);
  };

  const handleDeleteSubmission = async (id) => {
    if (!window.confirm("Delete this submission?")) return;
    await fetch(`http://localhost:5000/delete-submission/${id}`, { method: "DELETE" });
    fetchSubmissions();
  };

  const handleDeleteSubscriber = async (id, email) => {
    if (!window.confirm(`Delete subscriber ${email}?`)) return;
    await fetch(`http://localhost:5000/delete-newsletter/${id}`, { method: "DELETE" });
    fetchSubscribers();
  };

  const handleEditClick = (entry) => {
    setEditId(entry.id);
    setEditForm({ name: entry.name, email: entry.email, message: entry.message });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/edit-submission/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });
    setEditId(null);
    fetchSubmissions();
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 sm:px-8 lg:px-24 py-24 space-y-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-yellow-500 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-yellow-400">Admin Dashboard</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 py-3 rounded-lg shadow-lg"
        >
          <LogOut className="w-5 h-5" /> Logout
        </motion.button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Submissions */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Contact Form Submissions</h2>
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 sm:pr-4 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800">
            <AnimatePresence>
              {submissions.length === 0 ? (
                <p className="text-gray-400 italic">No submissions found.</p>
              ) : (
                submissions.map((entry) => (
                  <motion.div
                    key={entry.id}
                    className="bg-gray-800 p-5 rounded-xl shadow-md border border-yellow-500/30 hover:border-yellow-500 transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {editId === entry.id ? (
                      <motion.form onSubmit={handleEditSubmit} className="space-y-4">
                        <input
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          className="w-full p-3 rounded-md border border-yellow-500 bg-gray-900 text-yellow-300 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-400"
                          placeholder="Name"
                          required
                        />
                        <input
                          value={editForm.email}
                          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                          className="w-full p-3 rounded-md border border-yellow-500 bg-gray-900 text-yellow-300 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-400"
                          placeholder="Email"
                          type="email"
                          required
                        />
                        <textarea
                          value={editForm.message}
                          onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                          rows={4}
                          className="w-full p-3 rounded-md border border-yellow-500 bg-gray-900 text-yellow-300 placeholder-yellow-500 focus:ring-2 focus:ring-yellow-400 resize-none"
                          placeholder="Message"
                          required
                        />
                        <div className="flex gap-3 justify-end">
                          <button type="submit" className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full font-semibold">Save</button>
                          <button type="button" onClick={() => setEditId(null)} className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold">Cancel</button>
                        </div>
                      </motion.form>
                    ) : (
                      <>
                        <p className="font-semibold text-yellow-300">Name: <span className="font-normal">{entry.name}</span></p>
                        <p className="font-semibold text-yellow-300">Email: <span className="font-normal">{entry.email}</span></p>
                        <p className="font-semibold text-yellow-300">Message: <span className="font-normal whitespace-pre-wrap">{entry.message}</span></p>

                        <div className="flex gap-3 mt-4">
                          <button onClick={() => handleEditClick(entry)} className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full font-semibold">Edit</button>
                          <button onClick={() => handleDeleteSubmission(entry.id)} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-semibold">Delete</button>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Subscribers */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Newsletter Subscribers</h2>
          <div className="bg-gray-800 rounded-xl p-5 shadow-md max-h-[600px] overflow-y-auto pr-2 sm:pr-4 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800 space-y-3">
            {subscribers.length === 0 ? (
              <p className="text-gray-400 italic">No subscribers yet.</p>
            ) : (
              subscribers.map((subscriber, index) => (
                <div key={subscriber.id} className="flex justify-between items-center border-b border-yellow-700 pb-2 last:border-none">
                  <p className="text-yellow-300 font-medium">
                    <span className="text-yellow-400 mr-2">#{index + 1}</span>{subscriber.email}
                  </p>
                  <button
                    onClick={() => handleDeleteSubscriber(subscriber.id, subscriber.email)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full text-xs font-semibold shadow"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Admin;
