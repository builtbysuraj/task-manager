import { useAuth0 } from "@auth0/auth0-react"
import { ButtonSecondary } from "../styles/Button.style"

export default function Logout() {
  const { logout } = useAuth0()

  return (
    <div>
      <ButtonSecondary
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </ButtonSecondary>
    </div>
  )
}
