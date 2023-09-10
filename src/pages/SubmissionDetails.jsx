import { useEffect } from "react";
import { SubmissionHero } from "../components/Details/SubmissionHero";
import { SubmissionDescription } from "../components/Details/SubmissionDescription";
import { useLoaderData } from "react-router-dom";

export const SubmissionDetails = () => {
  const submission = useLoaderData();

  useEffect(() => {
    document.title = "Submission Details";
  }, []);

  return (
    <>
      {submission && (
        <>
          <SubmissionHero submission={submission} />
          <SubmissionDescription submission={submission} />
        </>
      )}
    </>
  );
};
