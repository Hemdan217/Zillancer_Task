import React, { createContext, useState, useEffect } from "react";
import { initialData } from "../config/constants.js";
import Swal from "sweetalert2";

const alertFire = (title, icon) => {
  Swal.mixin({
    toast: true,
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
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || null
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

  const register = (value) => {
    setUserName(value);
    localStorage.setItem("userName", value);
  };
  const addSubmission = (submission) => {
    console.log(submission);
    submission["id"] = Math.floor(Math.random() * 999999);
    submission["isFavorited"] = false;
    submission["userName"] = userName;
    const now = new Date();
    const isoString = now.toISOString();
    submission["createdAt"] = isoString;
    setSubmissions((prevSubmissions) => [submission, ...prevSubmissions]);
    alertFire("Submission Was Uploaded Successfully ", "success");
  };
  const updateSubmission = (submissionId, newSubmission) => {
    setSubmissions((prevSubmissions) =>
      prevSubmissions.map((submission) => {
        if (submission.id === submissionId) {
          return { ...submission, ...newSubmission };
        }
        return submission;
      })
    );
    alertFire("Submission Was Updated Successfully ", "success");
  };

  const removeSubmission = (submissionId) => {
    setSubmissions((prevSubmissions) =>
      prevSubmissions.filter((submission) => submission.id !== submissionId)
    );
    alertFire("Submission Was Deleted Successfully", "info");
  };

  const manageFavorite = (submissionId) => {
    setSubmissions((prevSubmissions) =>
      prevSubmissions.map((submission) => {
        if (submission.id == submissionId) {
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
      value={{
        userName,
        register,
        submissions,
        addSubmission,
        updateSubmission,
        removeSubmission,
        manageFavorite,
      }}
    >
      {children}
    </SubmissionsContext.Provider>
  );
};
export default SubmissionsContextProvider;
