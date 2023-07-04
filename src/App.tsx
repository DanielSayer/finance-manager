import { useState } from "react"
import Input from "./components/Input"
import Button from "./components/Button"
import "./assets/global.scss"
import Card from "./components/Card"

const App = (): React.ReactElement => {
  const [userName, setUserName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  return (
    <Card position="center">
      <Input
        placeholder="Username"
        value={userName}
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        type="password"
        onChange={(f) => setPassword(f.target.value)}
      />
      <Button type="submit">Submit</Button>
    </Card>
  )
}

export default App
