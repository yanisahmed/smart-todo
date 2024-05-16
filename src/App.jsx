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
                <input type="text" placeholder="Add Todo" className="px-2 border focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />

                <button className=" bg-[#add8e6] px-6 py-2 text-[#3b444b] font-bold" >Add</button>
              </div>
            </div>
            <div className="task_list">
              <li className="flex justify-center mt-2">
                <input type="checkbox" />
                <p className=" leading-loose px-2 text-white w-40">Hellor From React</p>
                <button className="bg-[#fb654e] text-white font-bold py-1 px-4 rounded hover:bg-purple-700">
                  Edit
                </button>
                <button type="button" className=" bg-red-500 px-4 py-1 ms-1 text-white rounded font-bold hover:bg-red-700">Delete</button>
              </li>
              <li className="flex justify-center mt-2">
                <input type="checkbox" />
                <p className=" leading-loose px-2 text-white w-40">Hellor From React</p>
                <button className="bg-[#fb654e] text-white font-bold py-1 px-4 rounded hover:bg-purple-700">
                  Edit
                </button>
                <button type="button" className=" bg-red-500 px-4 py-1 ms-1 text-white rounded font-bold hover:bg-red-700">Delete</button>
              </li>
              <li className="flex justify-center mt-2">
                <input type="checkbox" />
                <p className=" leading-loose px-2 text-white w-40">Hellor From React</p>
                <button className="bg-[#fb654e] text-white font-bold py-1 px-4 rounded hover:bg-purple-700">
                  Edit
                </button>
                <button type="button" className=" bg-red-500 px-4 py-1 ms-1 text-white rounded font-bold hover:bg-red-700">Delete</button>
              </li>


            </div>
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
