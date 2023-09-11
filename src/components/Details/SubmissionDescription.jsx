import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
export const SubmissionDescription = ({ submission }) => {
  // Split the description into paragraphs based on line breaks ("\n")
  const paragraphs = submission.description.split("\n");

  return (
    <div className="wrapper" id="submission__description">
      <div className="description">
        <h3>Description</h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="details">
        <h4>Hackathon</h4>
        <h3>{submission.hackathonName}</h3>
        <p>
          <CalendarTodayIcon /> {"  "}
          {`  ${new Date(submission.hackathonStartDate).getDate()} ${new Date(
            submission.hackathonStartDate
          ).toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}`}{" "}
          -{" "}
          {` ${new Date(submission.hackathonEndDate).getDate()} ${new Date(
            submission.hackathonEndDate
          ).toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}`}
        </p>
        <a href={submission.githubRepositoryLink} target="_blank">
          <GitHubIcon /> GitHub Repository
        </a>
        {submission.otherLinks && (
          <>
            <br />
            <a href={submission.otherLinks} target="_blank">
              <LaunchIcon /> Other Link
            </a>
          </>
        )}
      </div>
    </div>
  );
};
