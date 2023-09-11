import React, { useContext, useState } from "react";
import { SubmissionsContext } from "../contextAPI/context";
import { Button, TextField } from "@mui/material";
import images from "./../config/constants.js";
import Typewriter from "typewriter-effect";

const Welcome = () => {
  const { register } = useContext(SubmissionsContext);
  const [name, setName] = useState(null);

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          textAlign: "center",
          paddingTop: "5rem",
        }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("To Access The Submission Please Enter Your Name")
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
          }}
        />
        <img
          src={images.login}
          style={{ width: "100px", margin: "30px 0px" }}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Name"
          style={{ color: "white" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {name && (
          <div>
            <br />
            <Button
              variant="contained"
              color="success"
              style={{ padding: "5px", width: "230px" }}
              onClick={() => {
                register(name);
              }}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Welcome;
