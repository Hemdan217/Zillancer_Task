import "./App.css";
import images from "./assets/constants.js";
import {
  RouterProvider,
  Link,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { Submissions } from "./pages/Submissions";
import { SubmissionDetails } from "./pages/SubmissionDetails";
import { AddSubmission } from "./pages/AddSubmission";
import { EditSubmissionDetails } from "./pages/EditSubmissionDetails";
import SubmissionsContextProvider from "./contextAPI/context";
import { Header } from "./components/Header";
import { submissionLoader } from "./loader/submissionLoader";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Submissions />
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
  return (
    <>
      <SubmissionsContextProvider>
        <RouterProvider router={router} />
      </SubmissionsContextProvider>
    </>
  );
}

export default App;
