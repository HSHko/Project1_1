import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { Hide } from "styles/theme";

export default function fun() {
  console.log("init");
  // const dispatch = useDispatch();

  return (
    <Wrapper>
      <h1>Script</h1>
      <Hide size="tmax">
        <h1> hmm.. </h1>
      </Hide>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  text-align: center;
`;

const Tester = styled.div.attrs(p => ({ type: "password" }))`
  text-align: left;
`;
