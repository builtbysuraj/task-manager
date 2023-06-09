import styled from "styled-components";

export const InputWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 5px;
  outline: none;
  margin-right: 4px;
  font-size: 1.5rem;
`

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 2px;
  font-size: 1.5rem;
  border: none;
  background-color: white;

&:hover{
  background-color: #388e3c;
  color: white;
}
`
