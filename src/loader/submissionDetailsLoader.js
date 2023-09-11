import { redirect } from "react-router-dom";
export const submissionLoader = ({ params, request }) => {
  const { id } = params;
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const foundSubmission = submissions.find((submission) => submission.id == id);
  const { url } = request;
  if (!foundSubmission) {
    return redirect("/");
  }
  if (url.includes("edit")) {
    if (foundSubmission.userName !== localStorage.getItem("userName")) {
      return redirect("/");
    }
  }
  return foundSubmission;
};
