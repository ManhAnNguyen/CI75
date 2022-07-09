import styled from "styled-components";

export const SButton = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;
