import { redirect } from "react-router-dom";
export const submissionLoader = ({ params }) => {
  const { id } = params;
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const foundSubmission = submissions.find((submission) => submission.id == id);
  if (!foundSubmission) {
    return redirect("/");
  }
  return foundSubmission;
};
