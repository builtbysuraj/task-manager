import { SyncLoader } from "react-spinners"
import { LoaderStyle } from "../styles/Main.style"

export default function Loader() {
  return (
    <LoaderStyle>
      <SyncLoader color="#646ff0" margin={4} size={17} />
    </LoaderStyle>
  )
}
