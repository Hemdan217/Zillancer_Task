import React, { useContext, useState } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { SubmissionsContext } from "../../contextAPI/context";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Dialog } from "@mui/material";

function DeleteSubmission({ open, setOpen, removeSubmission, submissionId }) {
  return (
    <Dialog
      open={open}
      PaperProps={{
        lg: {
          width: "130%",
        },
      }}
      className="delete__submission"
    >
      <h3>Delete model</h3>
      <p>
        This action is irreversible. Are you sure you want to delete this model?
      </p>
      <div style={{ textAlign: "end" }}>
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          className="delete"
          onClick={() => {
            //console.log("dojdoj");
            removeSubmission(submissionId);
          }}
        >
          <Link to="/">Delete</Link>
        </button>
      </div>
    </Dialog>
  );
}

export const SubmissionHero = ({ submission }) => {
  const { manageFavorite, removeSubmission } = useContext(SubmissionsContext);
  const [open, setOpen] = useState(false);
  return (
    <div className="wrapper" id="submission__hero">
      <div>
        <img src={submission.coverImage} />
        <h1>{submission.title}</h1>
        <div className="submission__action">
          <button>
            <Link to={`edit`}>
              {" "}
              <ModeEditOutlineIcon
                style={{
                  margin: "-18px 10px -5px -11px",
                  /* font-size: 13px; */
                  width: "24px",
                  height: "24px",
                  padding: "5px 4px 2px 4px",
                }}
              />
              Edit
            </Link>
          </button>
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            <DeleteIcon
              style={{
                margin: "-18px 10px -5px -11px",
                /* font-size: 13px; */
                width: "24px",
                height: "24px",
                padding: "5px 4px 2px 4px",
              }}
            />
            Delete
          </button>
        </div>
      </div>
      <p>{submission.summary}</p>

      <motion.span
        className="icon"
        layout
        animate={{ scale: [0, 1, 1.3, 1] }}
        transition={{ duration: 0.5 }}
        onClick={() => {
          manageFavorite(submission.id);
        }}
        style={{ cursor: "pointer" }}
      >
        <AnimatePresence>
          {submission.isFavorited ? <StarIcon /> : <StarOutlineIcon />}
        </AnimatePresence>
      </motion.span>
      <span className="date">
        <CalendarTodayIcon
          style={{ width: "16px", height: "16px", marginRight: "4px" }}
        />{" "}
        {` ${new Date(submission.createdAt).getDate()} ${new Date(
          submission.createdAt
        ).toLocaleDateString("default", {
          month: "long",
        })}`}
      </span>
      <DeleteSubmission
        open={open}
        setOpen={setOpen}
        removeSubmission={removeSubmission}
        submissionId={submission.id}
      />
    </div>
  );
};