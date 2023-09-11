import React, { useRef, useState } from "react";
import { Field, ErrorMessage } from "formik";
import images from "../../config/constants.js";

const SubmissionForm = ({ image, updateImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target.result;
        updateImage(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  const fieldNames = [
    {
      name: "title",
      label: "Title",
      placeholder: "Title of your submission",
      type: "text",
      width: "100%",
    },
    {
      name: "summary",
      label: "Summary",
      placeholder:
        "A short summary of your submission (this will be visible with your submission)",
      type: "text",
      width: "100%",
    },
    {
      name: "description",
      label: "Description",
      placeholder:
        "Write a long description of your project. You can describe your idea and approach here.",
      type: "text",
      width: "100%",
    },
    {
      name: "coverImage",
      label: "Cover Image",
      placeholder: "Minimum resolution: 360px  X 360px",
      type: "file",
      width: "100%",
    },
    {
      name: "hackathonName",
      label: "Hackathon Name",
      placeholder: "Enter the name of the hackathon",
      type: "text",
      width: "100%",
    },
    {
      name: "hackathonStartDate",
      label: "Hackathon Start Date",
      placeholder: "Select start date",
      type: "date",
      width: "47.8%",
    },
    {
      name: "hackathonEndDate",
      label: "Hackathon End Date",
      placeholder: "Select end date",
      type: "date",
      width: "47.8%",
    },
    {
      name: "githubRepositoryLink",
      label: "GitHub Repository",
      placeholder: "Enter your submission’s public GitHub repository link",
      type: "text",
      width: "100%",
    },
    {
      name: "otherLinks",
      label: "Other Links",
      placeholder: "You can upload a video demo or URL of you demo app here.",
      type: "text",
      width: "100%",
    },
  ];
  return (
    <>
      {fieldNames.map((fieldName) => (
        <div
          key={fieldName.name}
          style={{ width: fieldName.width, marginBottom: "1rem" }}
        >
          <label htmlFor={fieldName.name} style={{ color: "#222" }}>
            {fieldName.label}
          </label>
          <br />
          {fieldName.name == "coverImage" ? (
            <>
              <div
                className="upload-gallery__image"
                onClick={() => {
                  updateImage(null);
                }}
                style={{
                  backgroundImage: image ? `url(${image})` : "",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <label htmlFor={fieldName.name}>
                  <input
                    hidden
                    accept="image/*"
                    style={{
                      display: "none",
                    }}
                    onChange={(e) => handleImageChange(e)}
                    type="file"
                    id={fieldName.name}
                    name={fieldName.name}
                  />
                  {!image && <img src={images.addIcon} />}
                </label>
              </div>
            </>
          ) : (
            <Field
              component={fieldName.name == "description" && "textarea"}
              style={{
                width: "92%",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #CCCCCC",
                margin: "8px 0px 0 0",
                height: fieldName.name == "description" ? "153px" : "auto",
              }}
              placeholder={fieldName.placeholder}
              type={fieldName.type}
              name={fieldName.name}
              id={fieldName.name}
            />
          )}

          <ErrorMessage
            name={fieldName.name}
            component="div"
            className="error"
          />
        </div>
      ))}
    </>
  );
};
export default SubmissionForm;
