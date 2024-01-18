import Sidebar from "./components/Sidebar"
import Dashboard from "./components/dashboard/Dashboard"
function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Dashboard/>
      </div>

    </>
  )
}

export default App
