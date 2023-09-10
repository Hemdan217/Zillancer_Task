import * as Yup from "yup";

export const schemaValidation = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(4, "Title must be at least 4 characters"),

  summary: Yup.string()
    .required("Summary is required")
    .min(4, "Summary must be at least 4 characters"),

  description: Yup.string().required("Description is required"),
  // coverImage: Yup.mixed()
  //   .required("Cover image is required")
  //   .test(
  //     "fileType",
  //     "Unsupported file format. Only JPEG and PNG are allowed.",
  //     (value) => {
  //       if (!value) return true; // Allow empty file
  //       return ["jpeg", "png"].includes(value.split(".").pop().toLowerCase());
  //     }
  //   ),

  hackathonName: Yup.string()
    .required("Hackathon name is required")
    .min(4, "GitHub repository link must be at least 4 characters"),

  hackathonStartDate: Yup.date()
    .required("Start date is required")
    .min(new Date(), "Start date must be in the future"),

  hackathonEndDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("hackathonStartDate"), "End date must be after start date"),

  githubRepositoryLink: Yup.string()
    .required("GitHub repository link is required")
    .min(4, "GitHub repository link must be at least 4 characters"),

  otherLinks: Yup.string().min(4, "Other links must be at least 4 characters"),
});
