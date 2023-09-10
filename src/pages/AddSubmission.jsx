import { useState, useContext } from "react";
import { useEffect } from "react";
import { Formik, Form } from "formik";
import { schemaValidation } from "./validate"; // Import your Yup validation schema here
import SubmissionForm from "../components/AddEdit/SubmissionForm";
import { SubmissionsContext } from "../contextAPI/context";

export const AddSubmission = () => {
  const { addSubmission } = useContext(SubmissionsContext);
  const [image, setImage] = useState(null);
  const initialValues = {
    title: undefined,
    summary: undefined,
    description: undefined,
    coverImage: undefined,
    hackathonName: undefined,
    hackathonStartDate: undefined,
    hackathonEndDate: undefined,
    githubRepositoryLink: undefined,
    otherLinks: undefined,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    values["coverImage"] = image;
    //console.log(values);
    addSubmission(values);
    setSubmitting(false); // Set submitting to false if no file is selected
  };
  const updateImage = (value) => {
    setImage(value);
  };
  useEffect(() => {
    document.title = "Add Submission";
  }, []);
  return (
    <>
      <div className="container-fluid wrapper" id="add__submission">
        <div className="main__section">
          <h3>New Hackathon Submission</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={schemaValidation} // Set the validation schema here
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
