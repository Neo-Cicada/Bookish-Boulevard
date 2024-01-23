import RouterPages from "./components/RouterPages"
import Sidebar from "./components/Sidebar"
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
