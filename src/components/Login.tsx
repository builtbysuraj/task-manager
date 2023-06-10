import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../styles/Button.style"
import { LoginStyle } from "../styles/Main.style"

export default function Login() {
  const { loginWithRedirect } = useAuth0()
  return (
    <LoginStyle>
      <h1>Log in / Sign up </h1>
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    </LoginStyle>
  )
}
