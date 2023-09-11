import React, { useContext } from "react";
import { SubmissionsContext } from "../contextAPI/context";

const Welcome = () => {
  const { register } = useContext(SubmissionsContext);

  return <>Hi From Home Pag</>;
};

export default Welcome;
