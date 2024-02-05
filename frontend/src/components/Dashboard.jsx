
function Dashboard() {
  return (
    <div className="h-svh flex items-center justify-center">
    <div className="overflow-x-auto h-3/5 w-3/5">
        <div className="flex justify-center">
        <h1 className="mb-5 text-3xl font-bold">User Management</h1>
        </div>
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 p-2">Name</th>
        <th className="border border-gray-300 p-2">Email</th>
        <th className="border border-gray-300 p-2">Mobile</th>
        <th className="border border-gray-300 p-2 w-44">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-300">
        <td className="border-r border-gray-300 p-2">Adhil</td>
        <td className="border-r border-gray-300 p-2">adhil@gmail.com</td>
        <td className="border-r border-gray-300 p-2">9876543456</td>
        <td className="flex justify-center space-x-5">
            <button>edit</button>
            <button>del</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  )
}

export default Dashboard