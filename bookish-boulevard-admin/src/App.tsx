import RouterPages from "./components/RouterPages"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/dashboard/Dashboard"
function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <RouterPages/>
      </div>

    </>
  )
}

export default App
