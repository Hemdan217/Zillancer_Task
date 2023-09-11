import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const SubmissionCard = ({ item }) => {
  return (
    <Link to={`${item.id}`} className="submission__card">
      <motion.div layout>
        <img
          src={item.coverImage}
          className="img-fluid rounded-top"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "8px",
          }}
          alt=""
        />
        <h3>{item.title}</h3>
      </motion.div>
      <p>{item.summary}</p>
      <p className="createdAt">uploaded {moment(item.createdAt).fromNow()}</p>
    </Link>
  );
};
