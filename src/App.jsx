import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Coins from './components/Coins'
import BtcChart from './components/BtcChart'
import LiveMarket from './components/LiveMarket'
import Transactions from './components/Transactions'



function App() {
  return (
    <div className=" min-h-screen flex flex-col bg-[#F5F3FF] text-black">
   <Navbar />

   <div className="flex flex-1">
    <Sidebar />

  <main className="flex-1 p-6">
    <Coins />
<BtcChart />

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
<LiveMarket />
<Transactions />
</div>

    </main>
  </div>
  </div>
  );
}

export default App
