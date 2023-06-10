import styled from "styled-components"
import { headerColor, primaryColor } from "./Colors.style"

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

export const UserSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const UserDetailsStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 80px;
    border-radius: 50%;
  }
`

export const LoaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

export const LoginStyle = styled.div`
  display: grid;
  place-content: center;
  margin: 1rem;
  gap: 2rem;
  h1 {
    color: ${headerColor};
  }
`
