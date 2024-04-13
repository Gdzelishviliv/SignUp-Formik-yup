import Headers from "./components/header/Headers"
import Signup from "./pages/Signup"
import "./App.css"

const App = () => {
  return (
    <div className="app-layout">
      <Headers/>
      <Signup/>
    </div>
  )
}

export default App