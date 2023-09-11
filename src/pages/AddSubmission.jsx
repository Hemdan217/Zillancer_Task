import { useState, useContext } from "react";
import { useEffect } from "react";
import { Formik, Form } from "formik";
import { schemaValidation } from "../config/validate";
import SubmissionForm from "../components/AddEdit/SubmissionForm";
import { SubmissionsContext } from "../contextAPI/context";
import { useNavigate } from "react-router-dom";

export const AddSubmission = () => {
  const { addSubmission } = useContext(SubmissionsContext);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

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
    values["coverImage"] = image;
    //console.log(values);
    addSubmission(values);
    setSubmitting(false);
    navigate("/");
  };
  const updateImage = (value) => {
    setImage(value);
  };
  useEffect(() => {
    document.title = "Add Submission";
  }, []);
  return (
    <>
      <div className=" wrapper" id="add__submission">
        <div className="main__section">
          <h3>New Hackathon Submission</h3>
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
