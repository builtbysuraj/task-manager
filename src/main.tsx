import { Auth0Provider } from "@auth0/auth0-react"
import { createRoot } from "react-dom/client"
import App from "./App"

createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain="dev-2fqldi8xm41jt5xr.au.auth0.com"
    clientId="F7P8PuwwwBMPYhMvUkvJyvNxvCge9H3w"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
)
