import { useState } from "react"
import SignUpForm from './components/signupform'
import Authenticate from './components/authenticate'

function App() {

  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken ={setToken}/>
      <Authenticate token ={token}/>
    </>
  )
}

export default App
