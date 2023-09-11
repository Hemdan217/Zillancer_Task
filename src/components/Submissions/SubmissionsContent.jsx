import { useState, useContext, useEffect } from "react";
import { AllSubmissions } from "./AllSubmissions.jsx";
import { FavouriteSubmissions } from "./FavouriteSubmissions.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { SubmissionsContext } from "../../contextAPI/context.jsx";
export const SubmissionsContent = () => {
  const [tab, setTab] = useState("All");
  const { submissions } = useContext(SubmissionsContext);
  const [filteredSubmissions, setFilteredSubmissions] = useState(submissions);
  useEffect(() => {
    setFilteredSubmissions(submissions);
  }, [submissions]);
  const filterByTitle = (query) => {
    setFilteredSubmissions(
      submissions.filter((submission) =>
        submission.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  const sortByDate = (sortBy) => {
    setFilteredSubmissions(submissions);
    if (sortBy == "Newest") {
      setFilteredSubmissions(
        filteredSubmissions
          .slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (sortBy == "Oldest") {
      setFilteredSubmissions(
        filteredSubmissions
          .slice()
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    }
  };
  return (
    <div className=" wrapper" id="tabs">
      <div className="tabs__navbar">
        <div className="tabs__item">
          {["All", "Favourite"].map((item) => {
            return (
              <div key={item}>
                <button
                  onClick={() => {
                    setTab(item);
                  }}
                  className={` ${tab == item ? "active" : ""}`}
                >
                  {item} Submissions
                </button>
                {tab == item && (
                  <motion.div layoutId="id" className="active-tab-indicator" />
                )}
              </div>
            );
          })}
        </div>
        <div className="filter__options">
          <input
            className="nosubmit"
            type="search"
            placeholder="Search..."
            onChange={(event) => {
              filterByTitle(event.target.value);
            }}
          />
          <select
            onChange={(event) => {
              sortByDate(event.target.value);
            }}
            defaultValue="DEFAULT"
          >
            <option disabled value="DEFAULT">
              Sort By
            </option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>
      <AnimatePresence>
        {" "}
        <div className="submissions__container">
          {tab == "All" ? (
            <AllSubmissions submissions={filteredSubmissions} />
          ) : (
            <FavouriteSubmissions
              favoriteSubmissions={filteredSubmissions.filter(
                (item) => item?.isFavorited == true
              )}
            />
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

//  <span
//     onClick={() => {
//       setTab("all");
//     }}
//     className={`col-2  ${tab == "all" ? "active" : ""}`}
//     style={{
//       cursor: "pointer",
//       color: tab == "Favourite" ? "#666" : "",
//       display: "inline-block",

//       textAlign: "center",
//       padding: "17px 0px",
//     }}
//   >
//     All Submissions
//     {tab == "all" && (
//       <motion.div layoutId="id" className="active-tab-indicator" />
//     )}
//   </span>
//   <span
//     onClick={() => {
//       setTab("Favourite");
//     }}
//     className={`col-2  ${tab == "Favourite" ? "active" : ""}`}
//     style={{
//       cursor: "pointer",
//       color: tab == "all" ? "#666" : "",
//       display: "inline-block",

//       textAlign: "center",
//       padding: "17px 0px",
//       margin: "0 10px",
//     }}
//   >
//     Favourite Submissions
//     {tab == "Favourite" && (
//       <motion.div layoutId="id" className="active-tab-indicator" />
//     )}
//   </span>

//   <div className="row py-4">
//     {tab == "all" ? <SubmissionsTab /> : <FavouriteTab />}
//   </div>

//   <div
//     className="row py-4"
//     style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gap: "32px",
//     }}

//   </div>
