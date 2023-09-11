# Submissions App README

## Front-end Development Assignment

### Objective

The objective of this assignment is to create a submissions app that allows users to submit their hackathon projects and view a list of all submissions. This app is intended for learners participating in hackathons, and it provide a simple and user-friendly interface for managing their project submissions.

### Application Overview

The Submissions App is designed for learners to create, edit, and delete their hackathon submissions. Each submission should include the following fields:

1. **Title**: A concise title for the submission.
2. **Summary**: A brief summary of the project.
3. **Description**: A detailed description of the project.
4. **Cover Image**: An image representing the project.
5. **Hackathon Name**: The name of the hackathon.
6. **Hackathon Start Date**: The start date of the hackathon.
7. **Hackathon End Date**: The end date of the hackathon.
8. **GitHub Repository Link**: The link to the project's GitHub repository.
9. **Other Links (Optional)**: Additional links related to the project.

### Features

The Submissions App includes the following features:

1. **Submission Management**: Users can create, edit, and delete their project submissions.

2. **Submission List**: Users can view a list of all submissions.

3. **Search Functionality**: Users can search for submissions using the title.

4. **Sorting**: Submissions can be sorted based on the hackathon start date (oldest to newest).

5. **Tabs**: There are two tabs available:

   - **All Submissions**: Displays all project submissions.
   - **Favorite Submissions**: Displays the user's favorite submissions.

6. **Submission Details**: Clicking on a submission takes the user to a page displaying all the details related to that submission.

7. **Editing and Deletion**: On the submission details page, users can edit or delete the submission if he owns it.

8. **Favorite Submissions**: Users can mark a submission as their favorite by clicking on a star icon. Favorite submissions are displayed in the "Favorite Submissions" tab.

### Data Storage

It uses local storage as a database to store submission data. This simplifies the development process by allowing data to be stored locally within the user's browser.

State Management Using Context
