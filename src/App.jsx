import "./App.css";
import images from "./config/constants.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import Welcome from "./pages/Welcome";
import { SubmissionDetails } from "./pages/SubmissionDetails";
import { AddSubmission } from "./pages/AddSubmission";
import { EditSubmissionDetails } from "./pages/EditSubmissionDetails";
import { Header } from "./components/Header";
import { submissionLoader } from "./loader/submissionDetailsLoader";
import { useContext } from "react";
import { SubmissionsContext } from "./contextAPI/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <MainPage />
      </>
    ),
  },
  {
    path: "/new",
    element: (
      <>
        <Header />
        <AddSubmission />
      </>
    ),
  },
  {
    path: "/:id",
    element: (
      <>
        <Header />
        <SubmissionDetails />
      </>
    ),
    loader: submissionLoader,
  },
  {
    path: "/:id/edit",
    element: (
      <>
        <Header />
        <EditSubmissionDetails />
      </>
    ),
    loader: submissionLoader,
  },
]);

function App() {
  const { userName } = useContext(SubmissionsContext);
  return <>{userName ? <RouterProvider router={router} /> : <Welcome />}</>;
}

export default App;
