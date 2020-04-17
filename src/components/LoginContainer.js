import React from "react";
import Container from "react-bootstrap/Container";

const LoginContainer = (props) => {
  return <Container className="p-3 my-3 border">{props.children}</Container>;
};

export default LoginContainer;
