import { useContext, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { schemaValidation } from "../config/validate";
import SubmissionForm from "../components/AddEdit/SubmissionForm";
import { useNavigate, useLoaderData } from "react-router-dom";
import { SubmissionsContext } from "../contextAPI/context";

export const EditSubmissionDetails = () => {
  const submission = useLoaderData();
  const navigate = useNavigate();
  const { updateSubmission } = useContext(SubmissionsContext);
  const [image, setImage] = useState(submission.coverImage);
  const initialValues = {
    title: submission.title || undefined,
    summary: submission.summary || undefined,
    description: submission.description || undefined,
    coverImage: submission.coverImage || undefined,
    hackathonName: submission.hackathonName || undefined,
    hackathonStartDate: submission.hackathonStartDate || undefined,
    hackathonEndDate: submission.hackathonEndDate || undefined,
    githubRepositoryLink: submission.githubRepositoryLink || undefined,
    otherLinks: submission.otherLinks || undefined,
  };

  useEffect(() => {
    document.title = "Submission Details";
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    values["coverImage"] = image;
    updateSubmission(submission.id, values);
    setSubmitting(false);
    navigate("/");
  };

  const updateImage = (value) => {
    setImage(value);
  };

  useEffect(() => {
    document.title = "Edit Submission";
  }, []);

  return (
    <>
      <div className=" wrapper" id="add__submission">
        <div className="main__section">
          <h3>Edit Hackathon Submission</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={schemaValidation}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form style={{ display: "flex", flexWrap: "wrap" }}>
                <SubmissionForm image={image} updateImage={updateImage} />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
