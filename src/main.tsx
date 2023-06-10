import { Auth0Provider } from "@auth0/auth0-react"
import { createRoot } from "react-dom/client"
import App from "./App"

const domain = `${import.meta.env.VITE_DOMAIN}`
const clientId = `${import.meta.env.VITE_CLIENT_ID}`

createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
)
