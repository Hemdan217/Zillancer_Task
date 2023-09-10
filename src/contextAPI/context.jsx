import React, { createContext, useState, useEffect } from "react";
import { initialData } from "./../assets/constants.js";
import Swal from "sweetalert2";

const alertFire = (title, icon) => {
  Swal.mixin({
    toast: true,
    animation: false,
    position: "top-right",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  }).fire({
    title,
    icon,
  });
};

export const SubmissionsContext = createContext();

const SubmissionsContextProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState(
    JSON.parse(localStorage.getItem("submissions")) || []
  );

  function initializeData() {
    if (!localStorage.getItem("submissions")) {
      setSubmissions(initialData);
    }
  }
  useEffect(() => {
    initializeData();
  }, []);

  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }, [submissions]); // Added this useEffect to save submissions to localStorage when it changes

  const addSubmission = (submission) => {
    console.log(submission);
    submission["id"] = submissions.length + 1;
    submission["isFavorited"] = false;
    const now = new Date();
    const isoString = now.toISOString();
    submission["createdAt"] = isoString;
    setSubmissions((prevSubmissions) => [submission, ...prevSubmissions]);
  };

  const removeSubmission = (submissionId) => {
    setSubmissions((prevSubmissions) =>
      prevSubmissions.filter((submission) => submission.id !== submissionId)
    );
  };

  const manageFavorite = (submissionId) => {
    setSubmissions((prevSubmissions) =>
      prevSubmissions.map((submission) => {
        if (submission.id === submissionId) {
          const newValue = !submission.isFavorited;
          if (newValue) {
            alertFire("Added to favorites", "success");
          } else {
            alertFire("Removed from favorites", "info");
          }
          return { ...submission, isFavorited: newValue };
        }
        return submission;
      })
    );
  };

  return (
    <SubmissionsContext.Provider
      value={{ submissions, addSubmission, removeSubmission, manageFavorite }}
    >
      {children}
    </SubmissionsContext.Provider>
  );
};
export default SubmissionsContextProvider;
