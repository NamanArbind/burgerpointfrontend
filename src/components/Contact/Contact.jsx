import React, { useState } from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const Contact = () => {
  const formHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setFeedback("");
    toast.success("Thank You for your feedback");
  };
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        onSubmit={formHandler}
      >
        <h2>Contact Us</h2>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Enter Feedback..."
          cols={30}
          rows={10}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit">Send</button>
      </motion.form>
      <motion.div
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        className="formBorder"
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{ delay: 0.7 }}
        >
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
