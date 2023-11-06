import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import Home from "./pages/Home"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <div id="AppContainer">
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
