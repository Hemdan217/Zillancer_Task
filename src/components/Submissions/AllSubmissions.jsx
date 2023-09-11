import React from "react";
import { SubmissionCard } from "./SubmissionCard";

export const AllSubmissions = ({ submissions }) => {
  return (
    <>
      {submissions.length ? (
        submissions.map((item, index) => {
          return <SubmissionCard key={index} item={item} />;
        })
      ) : (
        <h3>There are no Submissions</h3>
      )}
    </>
  );
};
