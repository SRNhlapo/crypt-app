function Sidebar() {
  return (
      <aside className="w-64 bg-purple-200 border-r border-purple-500 p-4">
        <ul className="flex flex-col gap-2">
        <li>
            <a href="#overview" className="block px-4 py-2 rounded-lg hover:text-purple-600">Overview</a></li>
        <li>
            <a href="#chart" className="block px-4 py-2 rounded-lg hover:text-purple-600">Chart</a></li>
        <li>
            <a href="#transactions" className="block px-4 py-2 rounded-lg hover:text-purple-600">Transactions</a></li>
        <li>
            <a href="#wallet" className="block px-4 py-2 rounded-lg hover:text-purple-600">Wallet</a></li>
        <li>
            <a href="#settings" className="block px-4 py-2 rounded-lg hover:text-purple-600">Settings</a></li>
        <li>
            <a href="#mailbox" className="block px-4 py-2 rounded-lg hover:text-purple-600">Mailbox</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;