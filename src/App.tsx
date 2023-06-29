import { useState } from "react"
import Input from "./components/Input"
import Button from "./components/Button"

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
      <Button type="submit">Text</Button>
    </>
  )
}

export default App
