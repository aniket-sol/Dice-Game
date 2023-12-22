import styled from "styled-components";
export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid white;
  transition: 0.3s ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s ease-in;
  }
`;
export const OutlineButton = styled(Button)`
color: black;
background-color: white;
border: 1px solid black;
&:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;
