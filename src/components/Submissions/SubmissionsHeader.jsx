import React from "react";
import images from "../../config/constants.js";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const SubmissionsHeader = () => {
  const navigate = useNavigate();
  return (
    <div className=" wrapper" id="hero">
      <div className="hero__text">
        <motion.h1 animate={{ x: [-70, 12, -10, 0], opacity: [0, 0.7, 1] }}>
          Hackathon Submissions
        </motion.h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque
          in parturient purus feugiat faucibus. Congue laoreet duis porta turpis
          eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae.
        </p>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/new");
          }}
        >
          <Link>Upload Submission</Link>
        </button>
      </div>

      <motion.img
        whileInView={{ scale: [0.7, 1, 1.1, 1] }}
        transition={{ duration: 0.5 }}
        src={images.idea}
      />
    </div>
  );
};
