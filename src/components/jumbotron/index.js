import React from "react";
import {
  Item,
  Inner,
  Container,
  Title,
  Subtitle,
  Pic,
  Pane,
} from "./styles/jumbotron";

const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronsubTitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Jumbotron.Pic = function JumbotronPic({ ...restProps }) {
  return <Pic {...restProps} />;
};

export default Jumbotron;
