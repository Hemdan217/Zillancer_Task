import React from "react";
import { SubmissionCard } from "./SubmissionCard";

export const AllSubmissions = ({ submissions }) => {
  return (
    <>
      {submissions.length &&
        submissions.map((item, index) => {
          return <SubmissionCard key={index} item={item} />;
        })}
    </>
  );
};
