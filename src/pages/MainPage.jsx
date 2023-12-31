import { SubmissionsHeader } from "../components/Submissions/SubmissionsHeader.jsx";
import { SubmissionsContent } from "../components/Submissions/SubmissionsContent.jsx";
import { useEffect } from "react";

export const MainPage = () => {
  useEffect(() => {
    document.title = "Main Page";
  }, []);
  return (
    <>
      <SubmissionsHeader />
      <SubmissionsContent />
    </>
  );
};
