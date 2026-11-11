import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className=" min-h-screen flex flex-col fade-in bg-purple-50 text-black">
   <Navbar />

   <div className="flex flex-1">
    <Sidebar />

    {/* {<About />}
    {<Projects />}
    {<Skills />}
    {<Contact /> }
    {<Footer /> }  */}
  </div>
  </div>
  );
}

export default App
