import * as Yup from "yup";

export const schemaValidation = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(4, "Title must be at least 4 characters"),

  summary: Yup.string()
    .required("Summary is required")
    .min(20, "Summary must be at least 20 characters"),

  description: Yup.string()
    .required("Description is required")
    .min(100, "Description must be at least 100 characters")
    .max(3000, "Description must not exceed 3000 characters"),

  // coverImage: Yup.mixed()
  //   .required("Cover image is required")
  //   .test(
  //     "fileType",
  //     "Unsupported file format. Only JPEG and PNG are allowed.",
  //     (value) => {
  //       if (!value) return true;
  //       const acceptedFormats = ["image/jpeg", "image/png"];
  //       return acceptedFormats.includes(value.type);
  //     }
  //   ),

  hackathonName: Yup.string()
    .required("Hackathon name is required")
    .min(10, "Hackathon name must be at least 10 characters"),

  hackathonStartDate: Yup.date()
    .required("Start date is required")
    .min(new Date(), "Start date must be in the future"),

  hackathonEndDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("hackathonStartDate"), "End date must be after start date"),

  githubRepositoryLink: Yup.string()
    .required("GitHub repository link is required")
    .min(4, "GitHub repository link must be at least 4 characters")
    .matches(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[^\s]*$/,
      "Enter a correct URL format for GitHub repository link!"
    ),

  otherLinks: Yup.string()
    .min(4, "Other links must be at least 4 characters")
    .matches(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}[^\s]*$/,
      "Enter a correct URL format for other links!"
    ),
});
