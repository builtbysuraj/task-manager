import styled from "styled-components"
import { headerColor } from "./Colors.style"

export const Container = styled.div`
  display: grid;
  place-content: center;
  margin-top: 3rem;
`

export const Header = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: ${headerColor};
  font-weight: 700;
  font-size: 3.7rem;
  margin-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
