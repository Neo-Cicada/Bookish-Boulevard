import RouterPages from "./components/RouterPages"
import Sidebar from "./components/Sidebar"
function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full border border-red-500 h-100vh">
          <RouterPages />
        </div>

      </div>

    </>
  )
}

export default App
