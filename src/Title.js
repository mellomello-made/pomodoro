import React from "react";

const Title = ({ title, textColor }) => (
  <h1 style={{ color: textColor }}>{title}</h1>
);

export default Title;

export const StorybookTitle = (args) => {
  return <Title {...args} />;
};
