import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <>
      <div className="ya-app w-full h-screen flex justify-center items-center">
        <div className="bottom-4 w-96 bg-[#3b444b] p-5">
          <header className="text-center">
            <h1 className="font-bold text-2xl uppercase text-white">Smart Todo</h1>
          </header>
          <main className="">
            <div className="addForm flex justify-center">
              <div className="flex my-6">
                <AddTodo />
              </div>
            </div>
            <Todos />
          </main>
          <footer className="text-center text-lg mt-4">
            <p className="text-gray-500">&copy; 2024 - Present</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
