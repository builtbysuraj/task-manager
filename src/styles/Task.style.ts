import { styled } from "styled-components"
import { bgTask } from "./Colors.style"

export const TaskWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 1rem;
  margin: 2rem 0;
  background-color: ${bgTask};
`
