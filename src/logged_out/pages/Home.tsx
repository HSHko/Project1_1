import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

import Button from "atoms/Button";

export default function fun() {
  console.log("init");
  // const dispatch = useDispatch();

  return (
    <Wrapper>
      <h1>Test...</h1>
      <Ddiv>
        <span>
          <h2> sss</h2>
        </span>
        <span>ddd</span>
        xxx
        <Button>
          <span>HELLLLLLO</span>
        </Button>
        <div>
          <h2> xxx</h2>
        </div>
      </Ddiv>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  text-align: center;
`;

const Ddiv = styled.div`
  width: 80%;
  margin: 30px auto;
  background-color: ${p => p.theme.color.lime[1]};
`;
