import { useState } from "react"
import Input from "./components/Input"
import Button from "./components/Button"
import "./assets/global.scss"

const App = (): React.ReactElement => {
  const [userName, setUserName] = useState<string>("")
  return (
    <>
      <Input
        placeholder="Username"
        value={userName}
        type="password"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </>
  )
}

export default App
