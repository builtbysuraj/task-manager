import { styled } from "styled-components"

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  background-color: #646ff0;
  color: white;
  font-size: 1.6rem;
  &:active {
    transform: scale(0.91);
  }
`
