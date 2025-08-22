import Home from "./pages/Home"
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "./context/AppContext";
function App() {
  return (
      <TooltipProvider>
        <AppProvider>
          <Home/>
        </AppProvider>
      </TooltipProvider>
    
  )
}

export default App
