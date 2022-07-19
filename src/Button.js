import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  //  props.color가 있으면 props.color를 , 그렇지 않으면 배경색이 흰색
  background: ${(props) => props.color || "white"};

  // prop.size가 "big"이면 200px를, 그렇지 않으면 100px를 너비로 사용한다.
  width: ${(props) => (props.size === "big" ? "200px" : "100px")};

  // prop.size가 "big"이면 80px를, 그렇지 않으면 4px를 높이로 사용한다.
  height: ${(props) => (props.size === "big" ? "80px" : "40px")};
`;

const Button = ({ color, size, text }) => (
  <StyledButton color={color} size={size}>
    {text}
  </StyledButton>
);

export default Button;
