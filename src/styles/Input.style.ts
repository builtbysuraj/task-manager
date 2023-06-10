import styled from "styled-components"
import { primaryColor } from "./Colors.style"

export const Input = styled.input`
  padding: 10px 14px;
  border-radius: 5px;
  outline: none;
  border: 2px solid ${primaryColor};
  margin-right: 4px;
  font-size: 1.8rem;
  &::placeholder {
    opacity: 0.8;
  }
`

export const FilterInput = styled.input`
  padding: 10px 14px;
  border-radius: 5px;
  outline: none;
  border: 2px solid ${primaryColor};
  margin-right: 4px;
  font-size: 1.8rem;
  &::placeholder {
    opacity: 0.8;
  }
`
