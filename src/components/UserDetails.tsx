import { useAuth0 } from "@auth0/auth0-react"
import { UserDetailsStyle } from "../styles/Main.style"

export default function UserDetails() {
  const { user } = useAuth0()
  return (
    <UserDetailsStyle>
      <img src={user?.picture} alt="user profile picture" />
      <div>
        <h3>Welcome, {user?.name} !</h3>
      </div>
    </UserDetailsStyle>
  )
}
