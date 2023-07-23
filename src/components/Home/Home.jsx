import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder.jsx";
import Menu from "./Menu.jsx";

const Home = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>Burger Point</motion.h1>
          <motion.p {...options} transition={{ delay: 0.2 }}>
            Treat Yourself with a Burger
          </motion.p>
        </div>
        <motion.a
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          href="#menu"
        >
          Explore Menu
        </motion.a>
      </section>
      <Founder />
      <Menu />
    </>
  );
};

export default Home;
