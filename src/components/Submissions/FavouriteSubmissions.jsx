import React from "react";
import { SubmissionCard } from "./SubmissionCard";

export const FavouriteSubmissions = ({ favoriteSubmissions }) => {
  return (
    <>
      {favoriteSubmissions.length ? (
        favoriteSubmissions.map((item, index) => {
          return <SubmissionCard key={index} item={item} />;
        })
      ) : (
        <h3>There are no favorite Submissions</h3>
      )}
    </>
  );
};
