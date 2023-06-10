import { createGlobalStyle } from "styled-components"
import { bgColor } from "./Colors.style"

export const Global = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
  html{
  font-size: 62.5%;
  font-family: 'Poppins', sans-serif;
 }
 body{
  font-size: 1.6rem;
  background-color: ${bgColor};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
 }

 input, button, textarea, select {
  font: inherit;
}
`
