import { styled } from "styled-components"
import { delBtn, primaryColor } from "./Colors.style"

type ButtonSecondaryProps = {
  del?: string
}

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  background-color: ${primaryColor};
  color: white;
  font-size: 1.6rem;
  &:active {
    transform: scale(0.91);
  }
`

export const ButtonSecondary = styled.button<ButtonSecondaryProps>`
  padding: 8px 10px;
  margin: 0 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  justify-self: flex-end;
  border: none;
  text-align: right;
  background-color: ${(props) => (props.del ? `${delBtn}` : `${primaryColor}`)};
  color: white;
  font-size: 1.4rem;
  &:active {
    transform: scale(0.91);
  }
`

export const ButtonWrapper = styled.section`
  display: flex;
`
