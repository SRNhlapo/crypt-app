function Navbar() {
  return (
    <div className="Navbar">
            <header className="bg-purple-200 text-black py-4 px-7 flex items-center">
            <div className="flex-1 text-3xl font-bold">CryptX</div>
<form className="flex w-full max-w-md items-center ml-auto">
  <input type="text" placeholder="Search..." className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" />
  <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600">Search</button>
</form>
<div className="flex-1"></div>
        </header>
    </div>
  )
}

export default Navbar;